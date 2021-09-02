import React, {createContext, useEffect, useState, FC} from "react";

import api from "../api";

const contextDefaultValues: CandidatesContextT = {
  candidates: [],
  steps: [],
  loading: false,
  addCandidate: () => {},
  loadCandidates: () => {},
  moveCandidate: () => {},
  removeCandidate: () => {},
};

const CandidatesContext = createContext<CandidatesContextT>(contextDefaultValues);

export const CandidatesProvider: FC = ({children}) => {
  const [candidates, setCandidates] = useState<Candidate[]>(contextDefaultValues.candidates);
  const [loading, setLoading] = useState(false);
  const steps: Step[] = [
    "Entrevista inicial",
    "Entrevista técnica",
    "Oferta",
    "Asignación",
    "Rechazo",
  ];

  const addCandidate = (name: string, comments: string) => {
    let id = name
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");

    if (candidates.find((c) => c.id === id)) {
      throw new Error("Duplicated id");
    }

    const new_candidate = {
      id,
      name,
      comments,
      step: "Entrevista inicial" as Step,
    };

    setCandidates((candidates) => [...candidates, new_candidate]);
  };

  const removeCandidate = (id: string) => {
    setCandidates((candidates) => candidates.filter((c) => c.id !== id));
  };

  const moveCandidate = (id: string, dir: 1 | -1) => {
    setCandidates((oldCandidates) => {
      // Fix: undefined alerts
      // TODO: add this to context
      let shifted_can = oldCandidates.find((candidate) => candidate.id === id) as Candidate;
      let new_step = steps[steps.indexOf(shifted_can.step) + dir];
      const filtered = oldCandidates.filter((c) => c.id !== id);

      shifted_can = {...shifted_can, step: new_step} as Candidate;

      return [...filtered, shifted_can];
    });
  };

  useEffect(() => {
    window.localStorage.setItem("cached_candidates", JSON.stringify(candidates));
  }, [candidates]);

  const loadCandidates = async (fromCloud = false) => {
    let cached_candidates: string | null | undefined;

    if (!fromCloud) {
      cached_candidates = window.localStorage.getItem("cached_candidates");
    }

    if (cached_candidates && cached_candidates !== "[]") {
      setCandidates(JSON.parse(cached_candidates));
    } else {
      setLoading(true);
      const response = await api.candidates.list();

      setCandidates(response);
      setLoading(false);
    }
  };

  return (
    <CandidatesContext.Provider
      value={{
        loading,
        loadCandidates,
        candidates,
        addCandidate,
        moveCandidate,
        removeCandidate,
        steps,
      }}
    >
      {children}
    </CandidatesContext.Provider>
  );
};

export default CandidatesContext;

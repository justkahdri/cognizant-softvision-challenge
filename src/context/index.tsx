import React, {createContext, useEffect, useState, FC} from "react";

const contextDefaultValues: CandidatesContextT = {
  candidates: [],
  addCandidate: () => {},
  loadCandidates: () => {},
};

const CandidatesContext = createContext<CandidatesContextT>(contextDefaultValues);

export const CandidatesProvider: FC = ({children}) => {
  const [candidates, setCandidates] = useState<Candidate[]>(contextDefaultValues.candidates);

  const addCandidate = (name: string, comments: string) => {
    const new_candidate = {
      id: name
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, ""),
      name,
      comments,
      step: "Entrevista inicial" as Step,
    };

    setCandidates((candidates) => [...candidates, new_candidate]);
  };

  useEffect(() => {
    window.localStorage.setItem("cached_candidates", JSON.stringify(candidates));
  }, [candidates]);

  return (
    <CandidatesContext.Provider
      value={{
        candidates,
        addCandidate,
        loadCandidates: setCandidates,
      }}
    >
      {children}
    </CandidatesContext.Provider>
  );
};

export default CandidatesContext;

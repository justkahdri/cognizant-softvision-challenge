declare global {
  type Step = "Entrevista inicial" | "Entrevista técnica" | "Oferta" | "Asignación" | "Rechazo";

  interface Candidate {
    id: string;
    name: string;
    step: Step;
    comments: string;
  }

  type CandidatesContextT = {
    candidates: Candidate[];
    addCandidate: (name: string, comments: string) => void;
    loadCandidates: (data: Candidate[]) => void;
    moveCandidate: (candidate_id: string, direction: -1 | 1) => void;
    steps: Step[];
  };
}

export {};

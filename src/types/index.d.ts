declare global {
  type Step = "Entrevista inicial" | "Entrevista técnica" | "Oferta" | "Asignación" | "Rechazo";

  interface Candidate {
    id: string;
    name: string;
    step: Step;
    comments: string;
  }

  type moveCandidateT = (candidate_id: string, direction: -1 | 1) => void;
}

export {};

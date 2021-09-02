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
    steps: Step[];
    loading: boolean;
    addCandidate: (name: string, comments: string) => void;
    loadCandidates: (fromCloud?: boolean) => void;
    moveCandidate: (candidate_id: string, direction: -1 | 1) => void;
    removeCandidate: (candidate_id: string) => void;
  };

  type SettingsContextT = {
    gridView: boolean;
    editMode: boolean;
    toggleGridView: () => void;
    toggleEditMode: () => void;
  };
}

export {};

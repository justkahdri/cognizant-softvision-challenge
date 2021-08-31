import mock from "./candidates.json";

export default {
  candidates: {
    list: (): Promise<Candidate[]> => Promise.resolve(mock as Candidate[]),
  },
};

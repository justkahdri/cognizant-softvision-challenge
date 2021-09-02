import mock from "./candidates.json";

const delay = Math.random() * 1500;

export default {
  candidates: {
    list: (): Promise<Candidate[]> =>
      new Promise((resolve) => setTimeout(() => resolve(mock as Candidate[]), delay)),
  },
};

import fetcher from './fetcher';

export type Word = {
  word: string;
  definition: string;
  pronunciation: string;
};

type Response = {
  source: string;
  words: Array<Word>;
};

const dictApi = {
  getTop327: () => {
    return fetcher<Response>('/words/327-best-words.json');
  },
  getBaron334: () => {
    return fetcher<Response>('/words/baron-334.json');
  },
  getBaron753: () => {
    return fetcher<Response>('/words/baron-753.json');
  },
  getQitao1787: () => {
    return fetcher<Response>('/words/qitao-1781.json');
  },
};

export default dictApi;

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
};

export default dictApi;

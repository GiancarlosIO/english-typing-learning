import { useEffect } from 'react';

const voiceApi = 'https://dict.youdao.com/dictvoice?audio=';

const usePronunciationSound = (word: string | undefined): void => {
  useEffect(() => {
    if (word) {
      // type 1 is for UK and type 2 for US pronunciation
      const wordAudio = new Audio(`${voiceApi}${word}&type=2`);

      wordAudio.play();
    }
  }, [word]);
};

export default usePronunciationSound;

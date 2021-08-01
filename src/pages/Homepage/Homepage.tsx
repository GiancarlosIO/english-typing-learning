import * as React from 'react';
import { useQuery } from 'react-query';

import Header from '@components/Header';

import useKey from '@react-hooks/useKey';
import usePronunciationSound from '@react-hooks/usePronunciation';

import dictApi from '@fetchers/dict';
import type { Word } from '@fetchers/dict';

import Keyboard from './components/Keyboard';
import Board from './components/Board';

import cls from './Homepage.module.scss';

const isKeySupported = (value: string): boolean => {
  return /^[a-z_A-Z_._(_)_0-9'!,'?\-;[\]\\/]$/.test(value);
};

// preload the audio files
let keyPressAudio: HTMLAudioElement;
let wrongKeyAudio: HTMLAudioElement;

if (typeof window != 'undefined') {
  keyPressAudio = new Audio('/sounds/key_pressed.wav');
  wrongKeyAudio = new Audio('/sounds/wrong_key.wav');
}

const Homepage: React.FC = () => {
  const [currentWord, setCurrentWord] = React.useState<
    undefined | (Word & { index: number })
  >(undefined);
  const [wordProgress, setWordProgress] = React.useState(-1);
  const [wrongIndex, setWrongIndex] = React.useState(-1);
  const { data, isLoading } = useQuery('327-words', dictApi.getBaron334, {
    refetchOnWindowFocus: false,
  });

  usePronunciationSound(currentWord?.word);

  const pressedKey = useKey((keyPressed) => {
    if (isKeySupported(keyPressed)) {
      keyPressAudio.currentTime = 0;
      keyPressAudio.play();

      const nextChar = currentWord?.word[wordProgress + 1];
      if (currentWord && nextChar === keyPressed) {
        setWordProgress((v) => v + 1);
      } else {
        setWrongIndex(() => {
          setTimeout(() => {
            setWrongIndex(-1);
            setWordProgress(-1);
          }, 300);
          return wordProgress + 1;
        });
        wrongKeyAudio.currentTime = 0;
        wrongKeyAudio.play();
      }
    } else if (keyPressed === 'Backspace' && wordProgress > -1) {
      setWordProgress((v) => v - 1);
    }
  });

  React.useEffect(() => {
    if (data && data.words.length) {
      setCurrentWord({
        ...data.words[0],
        index: 0,
      });
    }
  }, [data]);

  React.useEffect(() => {
    // if we have completed the word-typing, pass to the next wordItem
    if (data && currentWord && wordProgress + 1 === currentWord.word.length) {
      const nextIndex = currentWord?.index + 1;
      const nextItem = data?.words[nextIndex];
      if (nextItem) {
        setCurrentWord({
          ...nextItem,
          index: nextIndex,
        });
        setWordProgress(-1);
      } else {
        console.log('we have reached the end of the list words');
        setWordProgress(-1);
      }
    }
  }, [data, wordProgress, currentWord]);

  const getColorText = (index: number) =>
    wordProgress + 1 > index ? 'text-green-500' : 'text-purple-500';
  return (
    <div className="h-screen max-h-screen">
      <Header />
      <div className={`${cls.Inner} max-w-screen-lg mx-auto py-4`}>
        <div className="flex flex-col items-center justify-center">
          {data && currentWord && !isLoading ? (
            <React.Fragment>
              {currentWord.pronunciation && (
                <span className="text-gray-500 inline-block italic">
                  {currentWord.pronunciation}
                </span>
              )}
              <span className="text-7xl mb-4 mt-2">
                {currentWord.word.split('').map((c, index) => (
                  <span
                    className={
                      wrongIndex === index
                        ? 'text-red-500'
                        : getColorText(index)
                    }
                    key={index}
                  >
                    {c}
                  </span>
                ))}
              </span>
              <span className="text-gray-500 inline-block">
                {currentWord.definition}
              </span>
            </React.Fragment>
          ) : (
            <div>loading</div>
          )}
        </div>
        <div className="flex justify-center items-center">
          <Board wordItemIndex={currentWord?.index} word={currentWord?.word} />
        </div>
        <div>
          <Keyboard
            activeChar={
              currentWord ? currentWord.word[wordProgress + 1] : undefined
            }
            pressedKey={pressedKey}
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;

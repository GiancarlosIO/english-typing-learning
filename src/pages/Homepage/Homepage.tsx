import * as React from 'react';
import { useQuery } from 'react-query';

import Header from '@components/Header';
import Keyboard from '@icons/Keyboard';

import useKey from '@react-hooks/useKey';

import dictApi from '@fetchers/dict';

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
  const [currentWord, setCurrentWord] = React.useState('');
  const [wordProgress, setWordProgress] = React.useState(-1);
  const [wrongIndex, setWrongIndex] = React.useState(-1);
  const { data, isLoading } = useQuery('327-words', dictApi.getTop327, {
    refetchOnWindowFocus: false,
  });

  useKey((keyPressed) => {
    if (isKeySupported(keyPressed)) {
      keyPressAudio.currentTime = 0;
      keyPressAudio.play();

      if (currentWord && currentWord[wordProgress + 1] === keyPressed) {
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

  const wordItem = data?.words[0];

  React.useEffect(() => {
    if (wordItem) {
      setCurrentWord(wordItem.word);
    }
  }, [data, wordItem]);

  console.log({ wordProgress, wrongIndex });

  return (
    <div className="h-screen max-h-screen">
      <Header />
      <div className={`${cls.Inner} max-w-screen-lg mx-auto py-4`}>
        <div className="flex flex-col items-center justify-center">
          {data && wordItem && !isLoading && currentWord ? (
            <React.Fragment>
              <span className="text-gray-500 inline-block italic">
                {wordItem.pronunciation}
              </span>
              <span className="text-7xl mb-4 mt-2">
                {currentWord.split('').map((c, index) => (
                  <span
                    className={
                      wrongIndex === index
                        ? 'text-red-500'
                        : wordProgress + 1 > index
                          ? 'text-green-500'
                          : 'text-purple-500'
                    }
                    key={index}
                  >
                    {c}
                  </span>
                ))}
              </span>
              <span className="text-gray-500 inline-block">
                {wordItem.definition}
              </span>
            </React.Fragment>
          ) : (
            <div>loading</div>
          )}
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-row p-4 bg-gray-100">
            <div className="p-4 text-center w-52">
              <span className="block font-bold text-gray-900 text-3xl">20</span>
              <span className="block">words peer minute</span>
            </div>
            <div className="p-4 text-center w-52">
              <span className="block font-bold text-gray-900 text-3xl">
                129
              </span>
              <span className="block">words typed</span>
            </div>
            <div className="p-4 text-center w-52">
              <span className="block font-bold text-gray-900 text-3xl">
                05:20
              </span>
              <span className="block">time</span>
            </div>
          </div>
        </div>
        <div>
          <Keyboard
            className={cls.keyboard}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;

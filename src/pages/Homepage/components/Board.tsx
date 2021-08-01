import * as React from 'react';

import { useStopwatch } from 'react-timer-hook';

const padString = (options: {
  num?: number;
  width?: number;
  prefix?: string;
}): string => {
  if (typeof options.num === 'undefined') {
    return '';
  }
  const prefix = options.prefix || '0';
  const width = options.width || 2;

  const str = options.num.toString();

  if (str.length >= width) {
    return str;
  }

  return `${Array.from({ length: width - (str.length - 1) }).join(
    prefix,
  )}${str}`;
};

const Board: React.FC<{
  wordItemIndex?: number;
  word?: string;
}> = ({ wordItemIndex, word }) => {
  const [characterTyped, setCharacterTyped] = React.useState(0);

  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: true });

  React.useEffect(() => {
    if (word) {
      setCharacterTyped((v) => v + word.length);
    }
  }, [word]);

  const firstWordHasBeenTyped = (wordItemIndex || -1) > -1;
  const wordTypedCounts = wordItemIndex || 0;
  const timeElapsed = minutes * 60 + seconds;

  return (
    <React.Fragment>
      <div className="flex flex-row p-4 bg-gray-100">
        <div className="p-4 text-center w-52">
          <span className="block font-bold text-gray-900 text-3xl">
            {firstWordHasBeenTyped
              ? Math.round((characterTyped / 5 / timeElapsed) * 60)
              : 0}
          </span>
          <span className="block">Words Peer Minute</span>
        </div>
        <div className="p-4 text-center w-52">
          <span className="block font-bold text-gray-900 text-3xl">
            {firstWordHasBeenTyped
              ? Math.round((characterTyped / timeElapsed) * 60)
              : 0}
          </span>
          <span className="block">Characteres Per Minute</span>
        </div>
        <div className="p-4 text-center w-52">
          <span className="block font-bold text-gray-900 text-3xl">
            {wordTypedCounts}
          </span>
          <span className="block">words typed</span>
        </div>
        <div className="p-4 text-center w-52">
          <span className="block font-bold text-gray-900 text-3xl">
            {padString({
              num: minutes,
            })}
            :{padString({ num: seconds })}
          </span>
          <span className="block">Time</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Board;

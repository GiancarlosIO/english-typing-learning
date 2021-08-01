import * as React from 'react';
import KeyboardIcon from '@icons/Keyboard';

import cls from './Keyboard.module.scss';

// const namedKeys = {
//   'double-quotation-marks': '"',
//   'shift-left': '',
//   'shift-right': '',
//   'caps-lock': 'caps-lock',
//   backspace: 'backspace',
//   enter: 'enter',
//   control: 'control',
//   'option-left': 'option-left',
//   space: 'space',
//   'option-right': 'option-right',
// };

const Keyboard: React.FC<{
  activeChar: string | undefined;
  pressedKey: string | undefined;
}> = ({ activeChar, pressedKey }) => {
  return (
    <KeyboardIcon
      className={cls.keyboard}
      style={{
        width: '100%',
        height: '100%',
      }}
      activeChar={activeChar}
      pressedKey={pressedKey}
    />
  );
};

export default Keyboard;

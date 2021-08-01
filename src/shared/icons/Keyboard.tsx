import * as React from 'react';

const Keyboard: React.FC<
  React.SVGProps<SVGSVGElement> & {
    activeChar?: string | undefined;
    pressedKey?: string | undefined;
  }
> = ({ activeChar, pressedKey, ...rest }) => {
  const getKeyActiveStyles = (char: string) => {
    if (char.toLowerCase() === activeChar) {
      return {
        fill: 'rgba(16, 185, 129, 0.8)',
      };
    }
  };

  const getTextActiveStyles = (char: string) => {
    if (char.toLowerCase() === activeChar) {
      return {
        fill: 'white',
      };
    }
  };

  return (
    <svg
      className="standard-kb"
      viewBox="0 0 683.3 254"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g id="keys">
        <path
          id="tilda"
          className="st0"
          d="M58.4,53.7c0,1.7-1.4,3-3,3H18.9c-1.6,0-3-1.3-3-3V18.3c0-1.7,1.3-3,3-3h36.5c1.6,0,3,1.3,3,3V53.7z"
          style={getKeyActiveStyles('`')}
        ></path>
        <path
          id="key-1"
          className="st0"
          d="M103.4,53.7c0,1.7-1.3,3-3,3H63.9c-1.7,0-3-1.3-3-3V18.3c0-1.6,1.3-3,3-3h36.5c1.7,0,3,1.4,3,3V53.7z"
          style={getKeyActiveStyles('1')}
        ></path>
        <path
          id="q"
          className="st0"
          d="M126.7,97.6c0,1.6-1.3,3-3,3H87.2c-1.7,0-3-1.4-3-3V62.3c0-1.6,1.3-3,3-3h36.5c1.7,0,3,1.4,3,3V97.6z"
          style={getKeyActiveStyles('q')}
        ></path>
        <path
          id="a"
          className="st0"
          d="M137.4,141.5c0,1.6-1.4,3-3,3H97.9c-1.7,0-3-1.4-3-3v-35.4c0-1.7,1.3-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"
          style={getKeyActiveStyles('a')}
        ></path>
        <path
          id="z"
          className="st0"
          d="M160.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3v-35.3c0-1.7,1.3-3,3-3h36.5c1.6,0,3,1.3,3,3V185.4z"
          style={getKeyActiveStyles('z')}
        ></path>
        <path
          id="x"
          className="st0"
          d="M205.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3v-35.3c0-1.6,1.3-3,3-3h36.5c1.6,0,3,1.4,3,3V185.4z"
          style={getKeyActiveStyles('x')}
        ></path>
        <path
          id="c"
          className="st0"
          d="M250.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3v-35.3c0-1.6,1.3-3,3-3h36.5c1.6,0,3,1.4,3,3V185.4z"
          style={getKeyActiveStyles('c')}
        ></path>
        <path
          id="v"
          className="st0"
          d="M295.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3v-35.3c0-1.6,1.3-3,3-3h36.5c1.6,0,3,1.4,3,3V185.4z"
          style={getKeyActiveStyles('v')}
        ></path>
        <path
          id="b"
          className="st0"
          d="M340.8,185.4c0,1.7-1.4,3-3,3h-36.6c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h36.6c1.6,0,3,1.4,3,3V185.4z"
          style={getKeyActiveStyles('b')}
        ></path>
        <path
          id="n"
          className="st0"
          d="M385.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V185.4z"
          style={getKeyActiveStyles('n')}
        ></path>
        <path
          id="m"
          className="st0"
          d="M430.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V185.4z"
          style={getKeyActiveStyles('m')}
        ></path>
        <path
          id="comma"
          className="st0"
          d="M475.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V185.4z"
          style={getKeyActiveStyles(',')}
        ></path>
        <path
          id="dot"
          className="st0"
          d="M520.8,185.4c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V185.4z"
          style={getKeyActiveStyles('.')}
        ></path>
        <path
          id="slash"
          className="st0"
          d="M565.8,185.4c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V185.4z"
          style={getKeyActiveStyles('/')}
        ></path>
        <path
          id="s"
          className="st0"
          d="M182.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"
          style={getKeyActiveStyles('s')}
        ></path>
        <path
          id="d"
          className="st0"
          d="M227.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"
          style={getKeyActiveStyles('d')}
        ></path>
        <path
          id="f"
          className="st0 active"
          d="M272.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"
          style={getKeyActiveStyles('f')}
        ></path>
        <path
          id="g"
          className="st0"
          d="M317.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"
          style={getKeyActiveStyles('g')}
        ></path>
        <path
          id="h"
          className="st0"
          d="M362.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"
          style={getKeyActiveStyles('h')}
        ></path>
        <path
          id="j"
          className="st0"
          d="M407.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"
          style={getKeyActiveStyles('j')}
        ></path>
        <path
          id="k"
          className="st0"
          d="M452.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"
          style={getKeyActiveStyles('k')}
        ></path>
        <path
          id="l"
          className="st0"
          d="M497.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"
          style={getKeyActiveStyles('l')}
        ></path>
        <path
          id="semicolon"
          className="st0"
          d="M542.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"
          style={getKeyActiveStyles(';')}
        ></path>
        <path
          id="quote"
          className="st0"
          d="M587.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.7,0-3-1.4-3-3v-35.4c0-1.7,1.3-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"
          style={getKeyActiveStyles("'")}
        ></path>
        <path
          id="w"
          className="st0"
          d="M171.7,97.6c0,1.6-1.3,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V97.6z"
          style={getKeyActiveStyles('w')}
        ></path>
        <path
          id="e"
          className="st0"
          d="M216.7,97.6c0,1.6-1.3,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.7,1.4-3,3-3h36.5c1.7,0,3,1.3,3,3V97.6z"
          style={getKeyActiveStyles('e')}
        ></path>
        <path
          id="r"
          className="st0"
          d="M261.7,97.6c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V97.6z"
          style={getKeyActiveStyles('r')}
        ></path>
        <path
          id="t"
          className="st0"
          d="M306.7,97.6c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V97.6z"
          style={getKeyActiveStyles('t')}
        ></path>
        <path
          id="y"
          className="st0"
          d="M351.7,97.6c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V97.6z"
          style={getKeyActiveStyles('y')}
        ></path>
        <path
          id="u"
          className="st0"
          d="M396.7,97.6c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V97.6z"
          style={getKeyActiveStyles('u')}
        ></path>
        <path
          id="i"
          className="st0"
          d="M441.7,97.6c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V97.6z"
          style={getKeyActiveStyles('i')}
        ></path>
        <path
          id="o"
          className="st0"
          d="M486.7,97.6c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V97.6z"
          style={getKeyActiveStyles('o')}
        ></path>
        <path
          id="p"
          className="st0"
          d="M531.7,97.6c0,1.6-1.3,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V97.6z"
          style={getKeyActiveStyles('p')}
        ></path>
        <path
          id="open-bracket"
          className="st0"
          d="M576.7,97.6c0,1.6-1.3,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V97.6z"
          style={getKeyActiveStyles('[')}
        ></path>
        <path
          id="close-bracket"
          className="st0"
          d="M621.7,97.6c0,1.6-1.3,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V97.6z"
          style={getKeyActiveStyles(']')}
        ></path>
        <path
          id="backslash"
          className="st0"
          d="M668.8,97.6c0,1.6-1.3,3-3,3h-38.6c-1.6,0-3-1.4-3-3V62.4c0-1.6,1.4-3,3-3h38.6c1.7,0,3,1.4,3,3V97.6z"
          style={getKeyActiveStyles('\\')}
        ></path>
        <path
          id="key-2"
          className="st0"
          d="M148.4,53.7c0,1.7-1.4,3-3,3h-36.5c-1.6,0-3-1.3-3-3V18.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V53.7z"
          style={getKeyActiveStyles('2')}
        ></path>
        <path
          id="key-3"
          className="st0"
          d="M193.4,53.7c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3V18.3c0-1.6,1.3-3,3-3h36.5c1.6,0,3,1.4,3,3V53.7z"
          style={getKeyActiveStyles('3')}
        ></path>
        <path
          id="key-4"
          className="st0"
          d="M238.4,53.7c0,1.7-1.4,3-3,3H199c-1.7,0-3-1.3-3-3V18.3c0-1.7,1.3-3,3-3h36.5c1.6,0,3,1.3,3,3V53.7z"
          style={getKeyActiveStyles('4')}
        ></path>
        <path
          id="key-5"
          className="st0"
          d="M283.4,53.7c0,1.7-1.3,3-3,3h-36.5c-1.7,0-3-1.3-3-3V18.3c0-1.7,1.3-3,3-3h36.5c1.7,0,3,1.3,3,3V53.7z"
          style={getKeyActiveStyles('5')}
        ></path>
        <path
          id="key-6"
          className="st0"
          d="M328.4,53.7c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3V18.3c0-1.7,1.4-3,3-3h36.5c1.7,0,3,1.3,3,3V53.7z"
          style={getKeyActiveStyles('6')}
        ></path>
        <path
          id="key-7"
          className="st0"
          d="M373.4,53.7c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3V18.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V53.7z"
          style={getKeyActiveStyles('7')}
        ></path>
        <path
          id="key-8"
          className="st0"
          d="M418.4,53.7c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3V18.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V53.7z"
          style={getKeyActiveStyles('8')}
        ></path>
        <path
          id="key-9"
          className="st0"
          d="M463.4,53.7c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3V18.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V53.7z"
          style={getKeyActiveStyles('9')}
        ></path>
        <path
          id="key-0"
          className="st0"
          d="M508.4,53.7c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3V18.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V53.7z"
          style={getKeyActiveStyles('0')}
        ></path>
        <path
          id="minus"
          className="st0"
          d="M553.4,53.7c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3V18.3c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V53.7z"
          style={getKeyActiveStyles('-')}
        ></path>
        <path
          id="equal"
          className="st0"
          d="M598.4,53.7c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3V18.3c0-1.6,1.3-3,3-3h36.5c1.6,0,3,1.4,3,3V53.7z"
          style={getKeyActiveStyles('=')}
        ></path>
        <path
          id="backspace"
          className="st0"
          d="M668.8,53.7c0,1.7-1.3,3-3,3h-61.9c-1.7,0-3-1.3-3-3V18.3c0-1.6,1.3-3,3-3h61.9c1.7,0,3,1.4,3,3V53.7z"
          style={getKeyActiveStyles('Backspace')}
        ></path>
        <path
          id="tab"
          className="st0"
          d="M81.7,97.6c0,1.6-1.3,3-3,3H18.9c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.3-3,3-3h59.8c1.7,0,3,1.4,3,3V97.6z"
          style={getKeyActiveStyles('Tab')}
        ></path>
        <path
          id="capslock"
          className="st0"
          d="M92.4,141.5c0,1.6-1.3,3-3,3H18.9c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.3-3,3-3h70.4c1.7,0,3,1.3,3,3V141.5z"
          style={getKeyActiveStyles('CapsLock')}
        ></path>
        <path
          id="enter"
          className="st0"
          d="M668.8,141.5c0,1.6-1.3,3-3,3h-72.9c-1.7,0-3-1.4-3-3v-35.4c0-1.7,1.3-3,3-3h72.9c1.7,0,3,1.3,3,3V141.5z"
          style={getKeyActiveStyles('Enter')}
        ></path>
        <path
          id="shift-left"
          className="st0"
          d="M115.8,185.4c0,1.7-1.3,3-3,3H18.9c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.3-3,3-3h93.8c1.7,0,3,1.4,3,3V185.4z"
          style={getKeyActiveStyles('Shift1')}
        ></path>
        <path
          id="control"
          className="st0 hide-on-bone"
          d="M105,236c0,1.6-1.3,3-3,3H18.9c-1.6,0-3-1.4-3-3v-42c0-1.7,1.3-3,3-3H102c1.7,0,3,1.3,3,3V236z"
          style={getKeyActiveStyles('Control1')}
        ></path>
        <path
          id="option-left"
          className="st0 hide-on-bone"
          d="M182.4,236c0,1.7-1.4,3-3,3h-68.8c-1.7,0-3-1.3-3-3v-42c0-1.7,1.3-3,3-3h68.8c1.6,0,3,1.3,3,3V236z"
          style={getKeyActiveStyles('Option1')}
        ></path>
        <path
          id="option-right"
          className="st0 hide-on-bone"
          d="M531.8,191c1.7,0,3,1.4,3,3v42c0,1.7-1.3,3-3,3h-62.9c-1.6,0-3-1.3-3-3v-42c0-1.6,1.4-3,3-3H531.8z"
          style={getKeyActiveStyles('Option2')}
        ></path>
        <path
          className="st0 hide-on-bone"
          d="M668.8,236.1c0,1.7-1.3,3-3,3H540.3c-1.6,0-3-1.3-3-3v-42c0-1.6,1.4-3,3-3h125.5c1.7,0,3,1.4,3,3V236.1z"
        ></path>
        <path
          id="space"
          className="st0"
          d="M460.4,191c1.6,0,3,1.4,3,3v42c0,1.7-1.4,3-3,3H187.5c-1.6,0-3-1.3-3-3v-42c0-1.6,1.4-3,3-3H460.4z"
          style={getKeyActiveStyles(' ')}
        ></path>
        <path
          id="shift-right"
          className="st0"
          d="M668.8,185.4c0,1.7-1.3,3-3,3h-94.5c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h94.5c1.7,0,3,1.4,3,3V185.4z"
          style={getKeyActiveStyles('Shift2')}
        ></path>
      </g>
      <g id="letters">
        <text
          transform="matrix(1 0 0 1 33.4903 33.804)"
          className="st1 st2"
          dx="0"
          dy="0"
          id="text-~"
          style={getTextActiveStyles('~')}
        >
          ~
        </text>
        <text
          transform="matrix(1 0 0 1 35.8009 52.6643)"
          className="st1 st2"
          dx="0"
          dy="0"
          id="text-`"
          style={getTextActiveStyles('`')}
        >
          `
        </text>
        <text
          transform="matrix(1 0 0 1 78.626 50.4071)"
          className="st1 st2"
          dx="0"
          dy="0"
          id="text-1"
          style={getTextActiveStyles('1')}
        >
          1
        </text>
        <text
          transform="matrix(1 0 0 1 123.299 51.1765)"
          className="st1 st2"
          dx="0"
          dy="0"
          id="text-2"
          style={getTextActiveStyles('2')}
        >
          2
        </text>
        <text
          transform="matrix(1 0 0 1 169.6841 51.404)"
          className="st1 st2"
          dx="0"
          dy="0"
          id="text-3"
          style={getTextActiveStyles('3')}
        >
          3
        </text>
        <text
          transform="matrix(1 0 0 1 213.0758 51.404)"
          className="st1 st2"
          dx="0"
          dy="0"
          id="text-4"
          style={getTextActiveStyles('4')}
        >
          4
        </text>
        <text
          transform="matrix(1 0 0 1 258.0724 51.404)"
          className="st1 st2"
          dx="0"
          dy="0"
          id="text-5"
          style={getTextActiveStyles('5')}
        >
          5
        </text>
        <text
          transform="matrix(1 0 0 1 303.2822 51.0891)"
          className="st1 st2"
          dx="0"
          dy="0"
          id="text-6"
          style={getTextActiveStyles('6')}
        >
          6
        </text>
        <text
          transform="matrix(1 0 0 1 349.5064 51.0891)"
          className="st1 st2"
          dx="0"
          dy="0"
          id="text-7"
          style={getTextActiveStyles('7')}
        >
          7
        </text>
        <text
          transform="matrix(1 0 0 1 393.281 51.2157)"
          className="st1 st2"
          dx="0"
          dy="0"
          id="text-8"
          style={getTextActiveStyles('8')}
        >
          8
        </text>
        <text
          transform="matrix(1 0 0 1 438.5742 51.2157)"
          className="st1 st2"
          dx="0"
          dy="0"
          id="text-9"
          style={getTextActiveStyles('9')}
        >
          9
        </text>
        <text
          transform="matrix(1 0 0 1 483.4907 51.2157)"
          className="st1 st2"
          dx="0"
          dy="0"
          id="text-0"
          style={getTextActiveStyles('0')}
        >
          0
        </text>
        <text
          transform="matrix(1 0 0 1 530.4011 50.4071)"
          className="st1 st2"
          dx="0"
          dy="0"
          id="text--"
          style={getTextActiveStyles('-')}
        >
          -
        </text>
        <text
          transform="matrix(1 0 0 1 573.5195 51.2157)"
          className="st1 st2"
          dx="0"
          dy="0"
          id="text-="
          style={getTextActiveStyles('=')}
        >
          =
        </text>
        <text
          transform="matrix(1 0 0 1 80.5513 31.7605)"
          className="st1 st2"
          dx="0"
          dy="0"
          id="text-!"
          style={getTextActiveStyles('!')}
        >
          !
        </text>
        <text
          transform="matrix(1 0 0 1 119.8565 30.45)"
          className="st1 st2"
          dx="0"
          dy="0"
          id="text-@"
          style={getTextActiveStyles('@')}
        >
          @
        </text>
        <text
          transform="matrix(1 0 0 1 169.6841 31.76)"
          className="st1 st2"
          dx="0"
          dy="0"
          id="text-#"
          style={getTextActiveStyles('#')}
        >
          #
        </text>
        <text
          transform="matrix(1 0 0 1 213.0758 31.2171)"
          className="st1 st2"
          dx="0"
          dy="0"
          id="text-$"
          style={getTextActiveStyles('$')}
        >
          $
        </text>
        <text
          transform="matrix(1 0 0 1 255.5748 30.8318)"
          className="st1 st2"
          dx="0"
          dy="0"
          id="text-%"
          style={getTextActiveStyles('%')}
        >
          %
        </text>
        <text
          transform="matrix(1 0 0 1 303.9556 32.4427)"
          className="st1 st2"
          dx="0"
          dy="0"
          id="text-^"
          style={getTextActiveStyles('^')}
        >
          ^
        </text>
        <text
          transform="matrix(1 0 0 1 348.2554 31.76)"
          className="st1 st2"
          dx="0"
          dy="0"
          id="text-&"
          style={getTextActiveStyles('&')}
        >
          &amp;
        </text>
        <text
          transform="matrix(1 0 0 1 394.5334 32.8236)"
          className="st1 st2"
          dx="0"
          dy="0"
          id="text-*"
          style={getTextActiveStyles('*')}
        >
          *
        </text>
        <text
          transform="matrix(1 0 0 1 440.3076 30.6435)"
          className="st1 st2"
          dx="0"
          dy="0"
          id="text-("
          style={getTextActiveStyles('(')}
        >
          (
        </text>
        <text
          transform="matrix(1 0 0 1 485.1645 30.6435)"
          className="st1 st2"
          dx="0"
          dy="0"
          id="text-)"
          style={getTextActiveStyles(')')}
        >
          )
        </text>
        <text
          transform="matrix(1 0 0 1 528.7588 25.5423)"
          className="st1 st2"
          dx="0"
          dy="0"
          id="text-_"
          style={getTextActiveStyles('_')}
        >
          _
        </text>
        <text
          transform="matrix(1 0 0 1 573.5195 32.4422)"
          className="st1 st2"
          dx="0"
          dy="0"
          id="text-+"
          style={getTextActiveStyles('+')}
        >
          +
        </text>
        <text
          transform="matrix(1 0 0 1 100.9088 75.4743)"
          className="st1"
          dx="0"
          dy="0"
          id="text-Q"
          style={getTextActiveStyles('Q')}
        >
          Q
        </text>
        <text
          transform="matrix(1 0 0 1 100.9088 93.4743)"
          className="st1 st2 b"
          dx="-2.0622100830078125"
          dy="-6"
          id="text-q"
          style={getTextActiveStyles('q')}
        >
          q
        </text>
        <text
          transform="matrix(1 0 0 1 145.3644 75.4744)"
          className="st1"
          dx="0"
          dy="0"
          id="text-W"
          style={getTextActiveStyles('W')}
        >
          W
        </text>
        <text
          transform="matrix(1 0 0 1 145.3644 93.4744)"
          className="st1 st2 b"
          dx="-3.00201416015625"
          dy="-6"
          id="text-w"
          style={getTextActiveStyles('w')}
        >
          w
        </text>
        <text
          transform="matrix(1 0 0 1 190.5943 75.4744)"
          className="st1"
          dx="0"
          dy="0"
          id="text-E"
          style={getTextActiveStyles('E')}
        >
          E
        </text>
        <text
          transform="matrix(1 0 0 1 190.5943 93.4744)"
          className="st1 st2 b"
          dx="-2.06219482421875"
          dy="-6"
          id="text-e"
          style={getTextActiveStyles('e')}
        >
          e
        </text>
        <text
          transform="matrix(1 0 0 1 236.9933 75.4743)"
          className="st1"
          dx="0"
          dy="0"
          id="text-R"
          style={getTextActiveStyles('R')}
        >
          R
        </text>
        <text
          transform="matrix(1 0 0 1 236.9933 93.4743)"
          className="st1 st2 b"
          dx="-0.997100830078125"
          dy="-6"
          id="text-r"
          style={getTextActiveStyles('r')}
        >
          r
        </text>
        <text
          transform="matrix(1 0 0 1 280.6080 75.4744)"
          className="st1"
          dx="0"
          dy="0"
          id="text-T"
          style={getTextActiveStyles('T')}
        >
          T
        </text>
        <text
          transform="matrix(1 0 0 1 280.6080 93.4744)"
          className="st1 st2 b"
          dx="-0.4958648681640625"
          dy="-6"
          id="text-t"
          style={getTextActiveStyles('t')}
        >
          t
        </text>
        <text
          transform="matrix(1 0 0 1 326.5138 75.4744)"
          className="st1"
          dx="0"
          dy="0"
          id="text-Y"
          style={getTextActiveStyles('Y')}
        >
          Y
        </text>
        <text
          transform="matrix(1 0 0 1 326.5138 93.4744)"
          className="st1 st2 b"
          dx="-1.51397705078125"
          dy="-6"
          id="text-y"
          style={getTextActiveStyles('y')}
        >
          y
        </text>
        <text
          transform="matrix(1 0 0 1 371.1386 75.4743)"
          className="st1"
          dx="0"
          dy="0"
          id="text-U"
          style={getTextActiveStyles('U')}
        >
          U
        </text>
        <text
          transform="matrix(1 0 0 1 371.1386 93.4743)"
          className="st1 st2 b"
          dx="-2.062225341796875"
          dy="-6"
          id="text-u"
          style={getTextActiveStyles('u')}
        >
          u
        </text>
        <text
          transform="matrix(1 0 0 1 418.5557 75.4743)"
          className="st1"
          dx="0"
          dy="0"
          id="text-I"
          style={getTextActiveStyles('I')}
        >
          I
        </text>
        <text
          transform="matrix(1 0 0 1 418.5557 93.4743)"
          className="st1 st2 b"
          dx="-0.22955322265625"
          dy="-6"
          id="text-i"
          style={getTextActiveStyles('i')}
        >
          i
        </text>
        <text
          transform="matrix(1 0 0 1 459.9639 75.4743)"
          className="st1"
          dx="0"
          dy="0"
          id="text-O"
          style={getTextActiveStyles('O')}
        >
          O
        </text>
        <text
          transform="matrix(1 0 0 1 459.9639 93.4743)"
          className="st1 st2 b"
          dx="-2.062225341796875"
          dy="-6"
          id="text-o"
          style={getTextActiveStyles('o')}
        >
          o
        </text>
        <text
          transform="matrix(1 0 0 1 506.9335 75.4743)"
          className="st1"
          dx="0"
          dy="0"
          id="text-P"
          style={getTextActiveStyles('P')}
        >
          P
        </text>
        <text
          transform="matrix(1 0 0 1 506.9335 93.4743)"
          className="st1 st2 b"
          dx="-2.062225341796875"
          dy="-6"
          id="text-p"
          style={getTextActiveStyles('p')}
        >
          p
        </text>
        <text
          transform="matrix(1 0 0 1 112.1346 120.3303)"
          className="st1"
          dx="0"
          dy="0"
          id="text-A"
          style={getTextActiveStyles('A')}
        >
          A
        </text>
        <text
          transform="matrix(1 0 0 1 112.1346 138.3303)"
          className="st1 st2 b"
          dx="-1.999542236328125"
          dy="-6"
          id="text-a"
          style={getTextActiveStyles('a')}
        >
          a
        </text>
        <text
          transform="matrix(1 0 0 1 156.0135 120.3303)"
          className="st1"
          dx="0"
          dy="0"
          id="text-S"
          style={getTextActiveStyles('S')}
        >
          S
        </text>
        <text
          transform="matrix(1 0 0 1 156.0135 138.3303)"
          className="st1 st2 b"
          dx="-1.75677490234375"
          dy="-6"
          id="text-s"
          style={getTextActiveStyles('s')}
        >
          s
        </text>
        <text
          transform="matrix(1 0 0 1 201.5241 120.3303)"
          className="st1"
          dx="0"
          dy="0"
          id="text-D"
          style={getTextActiveStyles('D')}
        >
          D
        </text>
        <text
          transform="matrix(1 0 0 1 201.5241 138.3303)"
          className="st1 st2 b"
          dx="-2.0622100830078125"
          dy="-6"
          id="text-d"
          style={getTextActiveStyles('d')}
        >
          d
        </text>
        <text
          transform="matrix(1 0 0 1 247.1121 120.3303)"
          className="st1 active"
          dx="0"
          dy="0"
          id="text-F"
          style={getTextActiveStyles('F')}
        >
          F
        </text>
        <text
          transform="matrix(1 0 0 1 247.1121 138.3303)"
          className="st1 st2 b active"
          dx="-0.5036773681640625"
          dy="-6"
          id="text-f"
          style={getTextActiveStyles('f')}
        >
          f
        </text>
        <text
          transform="matrix(1 0 0 1 289.4753 120.3303)"
          className="st1"
          dx="0"
          dy="0"
          id="text-G"
          style={getTextActiveStyles('G')}
        >
          G
        </text>
        <text
          transform="matrix(1 0 0 1 289.4753 138.3303)"
          className="st1 st2 b"
          dx="-2.062225341796875"
          dy="-6"
          id="text-g"
          style={getTextActiveStyles('g')}
        >
          g
        </text>
        <text
          transform="matrix(1 0 0 1 335.5886 120.3303)"
          className="st1"
          dx="0"
          dy="0"
          id="text-H"
          style={getTextActiveStyles('H')}
        >
          H
        </text>
        <text
          transform="matrix(1 0 0 1 335.5886 138.3303)"
          className="st1 st2 b"
          dx="-2.06219482421875"
          dy="-6"
          id="text-h"
          style={getTextActiveStyles('h')}
        >
          h
        </text>
        <text
          transform="matrix(1 0 0 1 382.2692 120.3303)"
          className="st1"
          dx="0"
          dy="0"
          id="text-J"
          style={getTextActiveStyles('J')}
        >
          J
        </text>
        <text
          transform="matrix(1 0 0 1 382.2692 138.3303)"
          className="st1 st2 b"
          dx="-0.2296142578125"
          dy="-6"
          id="text-j"
          style={getTextActiveStyles('j')}
        >
          j
        </text>
        <text
          transform="matrix(1 0 0 1 426.0182 120.3303)"
          className="st1"
          dx="0"
          dy="0"
          id="text-K"
          style={getTextActiveStyles('K')}
        >
          K
        </text>
        <text
          transform="matrix(1 0 0 1 426.0182 138.3303)"
          className="st1 st2 b"
          dx="-1.999542236328125"
          dy="-6"
          id="text-k"
          style={getTextActiveStyles('k')}
        >
          k
        </text>
        <text
          transform="matrix(1 0 0 1 470.8706 120.3303)"
          className="st1"
          dx="0"
          dy="0"
          id="text-L"
          style={getTextActiveStyles('L')}
        >
          L
        </text>
        <text
          transform="matrix(1 0 0 1 470.8706 138.3303)"
          className="st1 st2 b"
          dx="-0.229583740234375"
          dy="-6"
          id="text-l"
          style={getTextActiveStyles('l')}
        >
          l
        </text>
        <text
          transform="matrix(1 0 0 1 134.7896 163.7458)"
          className="st1"
          dx="0"
          dy="0"
          id="text-Z"
          style={getTextActiveStyles('Z')}
        >
          Z
        </text>
        <text
          transform="matrix(1 0 0 1 134.7896 181.7458)"
          className="st1 st2 b"
          dx="-1.75677490234375"
          dy="-6"
          id="text-z"
          style={getTextActiveStyles('z')}
        >
          z
        </text>
        <text
          transform="matrix(1 0 0 1 179.2339 163.7458)"
          className="st1"
          dx="0"
          dy="0"
          id="text-X"
          style={getTextActiveStyles('X')}
        >
          X
        </text>
        <text
          transform="matrix(1 0 0 1 179.2339 181.7458)"
          className="st1 st2 b"
          dx="-1.51397705078125"
          dy="-6"
          id="text-x"
          style={getTextActiveStyles('x')}
        >
          x
        </text>
        <text
          transform="matrix(1 0 0 1 222.5416 163.7458)"
          className="st1"
          dx="0"
          dy="0"
          id="text-C"
          style={getTextActiveStyles('C')}
        >
          C
        </text>
        <text
          transform="matrix(1 0 0 1 222.5416 181.7458)"
          className="st1 st2 b"
          dx="-1.51397705078125"
          dy="-6"
          id="text-c"
          style={getTextActiveStyles('c')}
        >
          c
        </text>
        <text
          transform="matrix(1 0 0 1 269.3973 163.7458)"
          className="st1"
          dx="0"
          dy="0"
          id="text-V"
          style={getTextActiveStyles('V')}
        >
          V
        </text>
        <text
          transform="matrix(1 0 0 1 269.3973 181.7458)"
          className="st1 st2 b"
          dx="-1.51397705078125"
          dy="-6"
          id="text-v"
          style={getTextActiveStyles('v')}
        >
          v
        </text>
        <text
          transform="matrix(1 0 0 1 314.0098 163.7458)"
          className="st1"
          dx="0"
          dy="0"
          id="text-B"
          style={getTextActiveStyles('B')}
        >
          B
        </text>
        <text
          transform="matrix(1 0 0 1 314.0098 181.7458)"
          className="st1 st2 b"
          dx="-2.062225341796875"
          dy="-6"
          id="text-b"
          style={getTextActiveStyles('b')}
        >
          b
        </text>
        <text
          transform="matrix(1 0 0 1 358.4863 163.7458)"
          className="st1"
          dx="0"
          dy="0"
          id="text-N"
          style={getTextActiveStyles('N')}
        >
          N
        </text>
        <text
          transform="matrix(1 0 0 1 358.4863 181.7458)"
          className="st1 st2 b"
          dx="-2.062225341796875"
          dy="-6"
          id="text-n"
          style={getTextActiveStyles('n')}
        >
          n
        </text>
        <text
          transform="matrix(1 0 0 1 401.6816 163.7458)"
          className="st1"
          dx="0"
          dy="0"
          id="text-M"
          style={getTextActiveStyles('M')}
        >
          M
        </text>
        <text
          transform="matrix(1 0 0 1 401.6816 181.7458)"
          className="st1 st2 b"
          dx="-3.597198486328125"
          dy="-6"
          id="text-m"
          style={getTextActiveStyles('m')}
        >
          m
        </text>
        <text
          transform="matrix(1 0 0 1 519.074 136.7127)"
          className="st1 st2"
          dx="0"
          dy="0"
          id="text-;"
          style={getTextActiveStyles(';')}
        >
          ;
        </text>
        <text
          transform="matrix(1 0 0 1 519.074 119.3763)"
          className="st1 st2"
          dx="0"
          dy="0"
          id="text-:"
          style={getTextActiveStyles(':')}
        >
          :
        </text>
        <text
          transform="matrix(1 0 0 1 451.3285 180.0409)"
          className="st1 st2 b2"
          dx="-1.253082275390625"
          dy="0"
          id="text-,"
          style={getTextActiveStyles(',')}
        >
          ,
        </text>
        <text
          transform="matrix(1 0 0 1 450.2827 164.3396)"
          className="st1 st2"
          dx="0"
          dy="0"
          id="text-<"
          style={getTextActiveStyles('<')}
        >
          &lt;
        </text>
        <text
          transform="matrix(1 0 0 1 495.9731 181.0409)"
          className="st1 st2 b2"
          dx="-1.2530517578125"
          dy="0"
          id="text-."
          style={getTextActiveStyles('.')}
        >
          .
        </text>
        <text
          transform="matrix(1 0 0 1 494.9274 164.3396)"
          className="st1 st2"
          dx="0"
          dy="0"
          id="text->"
          style={getTextActiveStyles('>')}
        >
          &gt;
        </text>
        <text
          transform="matrix(1 0 0 1 543.4077 181.0408)"
          className="st1 st2"
          dx="0"
          dy="0"
          id="text-/"
          style={getTextActiveStyles('/')}
        >
          /
        </text>
        <text
          transform="matrix(1 0 0 1 541.3276 163.2498)"
          className="st1 st2"
          dx="0"
          dy="0"
          id="text-?"
          style={getTextActiveStyles('?')}
        >
          ?
        </text>
        <text
          transform="matrix(1 0 0 1 565.621 138.7127)"
          className="st1 st2"
          dx="0"
          dy="0"
          id="text-'"
          style={getTextActiveStyles("'")}
        >
          {"'"}
        </text>
        <text
          transform="matrix(1 0 0 1 565.621 120.3763)"
          className="st1 st2"
          dx="0"
          dy="0"
          id={'text-double-quotation-marks'}
          style={getTextActiveStyles('"')}
        >
          {'"'}
        </text>
        <text
          transform="matrix(1 0 0 1 553.3923 94.426)"
          className="st1 st2"
          dx="0"
          dy="0"
          id="text-["
          style={getTextActiveStyles('[')}
        >
          [
        </text>
        <text
          transform="matrix(1 0 0 1 552.9709 74.8769)"
          className="st1 st2"
          dx="0"
          dy="0"
          id="text-{"
          style={getTextActiveStyles('{')}
        >
          {'{'}
        </text>
        <text
          transform="matrix(1 0 0 1 598.7657 94.426)"
          className="st1 st2"
          dx="0"
          dy="0"
          id="text-]"
          style={getTextActiveStyles(']')}
        >
          ]
        </text>
        <text
          transform="matrix(1 0 0 1 598.3443 74.7849)"
          className="st1 st2"
          dx="0"
          dy="0"
          id="text-}"
          style={getTextActiveStyles('}')}
        >
          {'}'}
        </text>
        <text
          transform="matrix(1 0 0 1 644.3574 96.8807)"
          className="st1 st2"
          dx="0"
          dy="0"
          id="text-\"
          style={getTextActiveStyles('\\')}
        >
          \
        </text>
        <text
          transform="matrix(1 0 0 1 644.4941 74.8769)"
          className="st1 st2"
          dx="0"
          dy="0"
          id="text-|"
          style={getTextActiveStyles('|')}
        >
          |
        </text>
        <text
          transform="matrix(1 0 0 1 23.3467 93.2342)"
          className="st1 s st2"
          id="text-tab"
          style={getTextActiveStyles('Tab')}
        >
          tab
        </text>
        <text
          transform="matrix(1 0 0 1 23.3467 137.7127)"
          className="st1 s st2"
          id="text-caps-lock"
          style={getTextActiveStyles('CapsLock')}
        >
          caps lock
        </text>
        <text
          id="text-shift-left"
          transform="matrix(1 0 0 1 23.3467 181.0408)"
          className="st1 s st2"
          style={getTextActiveStyles('Shift1')}
        >
          shift
        </text>
        <text
          id="text-shift-right"
          transform="matrix(1 0 0 1 641.826 180.0408)"
          className="st1 s st2"
          style={getTextActiveStyles('Shift2')}
        >
          shift
        </text>
        <text
          id="text-backspace"
          transform="matrix(1 0 0 1 606.4653 51.1765)"
          className="st1 s st2"
          style={getTextActiveStyles('Backspace')}
        >
          backspace
        </text>
        <text
          id="text-enter"
          transform="matrix(1 0 0 1 636.3144 137.7128)"
          className="st1 s st2"
          style={getTextActiveStyles('Enter')}
        >
          enter
        </text>
        <text
          id="text-control"
          transform="matrix(1 0 0 1 23.3467 232.465)"
          className="st1 s st2"
          style={getTextActiveStyles('Control1')}
        >
          control{' '}
        </text>
        <text
          id="text-option-left"
          transform="matrix(1 0 0 1 129.2338 231.4646)"
          className="st1 s st2"
          style={getTextActiveStyles('Option1')}
        >
          option
        </text>
        <text
          id="text-space"
          transform="matrix(1 0 0 1 199.7899 232.4646)"
          className="st1 s st2"
          style={getTextActiveStyles(' ')}
        >
          space
        </text>
        <text
          id="text-option-right"
          transform="matrix(1 0 0 1 483.8864 231.4646)"
          className="st1 s st2"
          style={getTextActiveStyles('Option2')}
        >
          option
        </text>
      </g>
    </svg>
  );
};

export default Keyboard;

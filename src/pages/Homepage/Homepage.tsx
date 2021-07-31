import Header from '@components/Header';
import Keyboard from '@icons/Keyboard';

import cls from './Homepage.module.scss';

const Homepage = () => {
  return (
    <div className="h-screen max-h-screen">
      <Header />
      <div className={`${cls.Inner} max-w-screen-lg mx-auto py-4`}>
        <div className="flex flex-col items-center justify-center">
          <span className="text-gray-500 inline-block italic">ˈjərnē</span>
          <span className="text-purple-500 text-7xl mb-4 mt-2">journey</span>
          <span className="text-gray-500 inline-block">
            viaje, camino, trayecto
          </span>
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

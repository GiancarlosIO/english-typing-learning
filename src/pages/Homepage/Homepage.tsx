import Link from 'next/link';
import clsx from 'clsx';

import cls from './Homepage.module.css';

const Homepage = () => {
  return (
    <div className={clsx(cls.container, 'max-w-screen-lg', 'mx-auto')}>
      <header className={cls.header}>
        <Link href="/" passHref>
          <a>
            <h1>QWERTY Learner</h1>
          </a>
        </Link>
      </header>
    </div>
  );
};

export default Homepage;

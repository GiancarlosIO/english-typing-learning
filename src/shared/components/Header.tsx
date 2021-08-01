import Link from 'next/link';

const Header = () => {
  return (
    <header className="max-w-screen-lg mx-auto py-4">
      <Link href="/" passHref>
        <a className="inline-block p-4 text-blue-500 font-bold rounded-lg text-2xl">
          <h1>English Typing Learning</h1>
        </a>
      </Link>
    </header>
  );
};

export default Header;

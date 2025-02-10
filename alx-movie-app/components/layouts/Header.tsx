import React from 'react';
import Link from 'next/link';
import Button from './Button';

const Header = () => {
  return (
    <header className="bg-[#171D22] text-white p-4 flex justify-between items-center">
      <h1>Movie Galaxy</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/movies">
              Movies
            </Link>
          </li>
        </ul>
      </nav>
      <Button title="Sign In" />
    </header>
  );
};

export default Header;
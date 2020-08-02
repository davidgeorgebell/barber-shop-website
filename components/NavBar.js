import React from 'react';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className='min-w-full'>
      <ul className='flex items-center justify-between max-w-2xl mx-auto text-gray-200 px-4'>
        <li>
          <Link href='/open'>
            <a className='hover:underline'>OPENING TIMES</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>
              <h1 className='text-5xl font-serif text-yellow-500 font-bold'>
                JB
              </h1>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a className='hover:underline'>ABOUT</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

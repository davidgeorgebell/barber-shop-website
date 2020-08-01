import React from 'react';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav>
      <Link href='/'>
        <a>
          <h3 className='text-5xl font-serif text-yellow-500 font-bold'>JB</h3>
        </a>
      </Link>
    </nav>
  );
}

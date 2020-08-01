import React from 'react';

import NavBar from './NavBar.js';

export default function Layout({ children }) {
  return (
    <div className='min-h-screen min-w-screen bg-teal-900'>
      <header className='flex justify-center pb-5'>
        <NavBar />
      </header>
      <main>{children}</main>
    </div>
  );
}

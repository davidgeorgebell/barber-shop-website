import React from 'react';
import Layout from '../components/Layout';

export default function about() {
  return (
    <Layout>
      <div className='p-4 container mx-auto max-w-2xl mt-10'>
        <div className=' p-6 pb-10 shadow-lg rounded-lg'>
          <div className='flex flex-col justify center'>
            <h1 className='text-6xl font-serif text-white mb-10'>About</h1>
            <p className='text-gray-200 text-2xl pb-2'>
              This is an example of a streamline website for a business built by{' '}
              <span className='text-yellow-500'>David Bell.</span>
            </p>
            <p className='text-gray-200 text-2xl'>
              If you would like a website for your business you can contact him
              here{' '}
              <a
                className='text-yellow-500 hover:text-yellow-600 hover:underline'
                href='https:davidbell.co'>
                davidbell.co
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

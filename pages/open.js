import React from 'react';
import Layout from '../components/Layout';
import { AnimationX } from '../components/AnimationX';

export default function open() {
  return (
    <Layout>
      <div className='flex flex-col justify-center container px-6  md:px-2 lg:max-w-xl mx-auto'>
        <AnimationX>
          <div className='grid grid-cols-2 gap-10 py-10 mx-auto'>
            <ul className='text-white'>
              <li className='border-t-2 border-gray-500 font-medium'>Mon</li>
              <li className='border-t-2 border-gray-500 font-medium'>Tue</li>
              <li className='border-t-2 border-gray-500 font-medium'>Wed</li>
              <li className='border-t-2 border-gray-500 font-medium'>Thur</li>
              <li className='border-t-2 border-gray-500 font-medium'>Fri</li>
              <li className='border-t-2 border-gray-500 font-medium'>Sat</li>
              <li className='border-t-2 border-gray-500 font-medium'>Sun</li>
            </ul>

            <ul className='text-white text-right'>
              <li className=' text-yellow-500'>8.00am - 5.00pm</li>
              <li className=' text-yellow-500'>8.00am - 5.00pm</li>
              <li className=' text-yellow-500'>8.00am - 5.00pm</li>
              <li className=' text-yellow-500'>8.00am - 5.00pm</li>
              <li className=' text-yellow-500'>8.00am - 5.00pm</li>
              <li className=' text-yellow-500'>9.00am - 3.00pm</li>
              <li className=' text-yellow-500'>9.00am - 3.00pm</li>
            </ul>
          </div>
        </AnimationX>
        <div className='main-image mt-4 mb-10'>
          <img
            className='rounded-lg shadow-xl '
            src='barber-2.jpg'
            alt='Man getting a shave'
          />
        </div>
      </div>
    </Layout>
  );
}

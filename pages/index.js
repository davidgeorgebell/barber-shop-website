import Head from 'next/head';
import Link from 'next/link';

import { AnimationY } from '../components/AnimationY';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Traditional Barber Shop</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='main-grid'>
        <h1 className='main-title text-3xl md:text-5xl lg:text-5xl xl:text-5xl font-bold text-white'>
          <AnimationY>JACKSON BROTHERS BARBERSHOP</AnimationY>
        </h1>
        <div className='main-image mt-4'>
          <img
            className='rounded-lg shadow-xl '
            src='/barber-3.jpg'
            alt='Man cutting hair'
          />
        </div>
        <div className='bits'>
          <p className='main-intro text-lg font-serif mb-8 text-gray-300'>
            New barbershop using old school methods for cutting mens hair
          </p>
          <div className='main-btn-wrapper mb-8'>
            <button className='bg-yellow-500 hover:bg-yellow-600 text-black  py-2 px-4 rounded shadow-xl'>
              <Link href='/open'>
                <a>OPENING TIMES</a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

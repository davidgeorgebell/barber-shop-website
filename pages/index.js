import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='container mx-auto min-h-screen bg-teal-900'>
      <Head>
        <title>Traditional Barber Shop</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='flex justify-center pb-8'>
        <nav className='pt-4'>
          <h3 className='font-serif text-5xl font-bold text-yellow-600'>JB</h3>
        </nav>
      </header>
      <main>
        <div className='main-grid'>
          <h1 className='main-title text-3xl md:text-5xl lg:text-5xl xl:text-5xl font-bold text-white'>
            JACKSON BROTHERS BARBERSHOP
          </h1>
          <div className='main-image mt-4'>
            <img className='rounded-lg shadow-xl ' src='/barber-1.jpg' />
          </div>
          <div className='bits'>
            <p className='main-intro text-lg font-serif mb-8 text-gray-300'>
              New barbershop using old school methods for cutting mens hair
            </p>
            <div className='main-btn-wrapper mb-8'>
              <button className='bg-yellow-600 hover:bg-yellow-700 text-gray-900  py-2 px-4 rounded shadow-xl'>
                <Link href='/contact'>
                  <a>BOOK NOW</a>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

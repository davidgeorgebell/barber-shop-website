import Head from 'next/head';

export default function Home() {
  return (
    <div className='container mx-auto'>
      <Head>
        <title>Traditional Barber Shop</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className=' items-center justify-between max-w-4xl mx-auto p-4 md:p-8'>
        <nav>
          <ul className='flex justify-between'>
            <li>TESTIMONIALS</li>
            <li>CONTACT</li>
            <li>LOGO</li>
            <li>GALLERY</li>
            <li>ABOUT US</li>
          </ul>
        </nav>
      </header>
      <main>
        <div className='main-grid   '>
          <h1 className='main-title text-2xl md:text-5xl lg:text-5xl xl:text-5xl font-bold'>
            JACKSON BROTHERS BARBERSHOP
          </h1>
          <div className='main-image   mt-8'>
            <img className='rounded-lg shadow-xl ' src='/barber-1.jpg' />
          </div>
          <div className='bits'>
            <p className='main-intro text-lg font-serif mb-8'>
              New barbershop using old school methods for cutting mens hair
            </p>
            <div className='main-btn-wrapper mb-8'>
              <button className='bg-orange-600 hover:bg-orange-700 text-white  py-2 px-4 rounded'>
                <a>BOOK NOW</a>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

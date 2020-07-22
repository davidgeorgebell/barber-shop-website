import Head from 'next/head';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Traditional Barber Shop</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <nav>
        <div className='p-5 m-5 rounded shadow bg-gray-200'>Hello Tailwind</div>
        <ul>
          <li>TESTIMONIALS</li>
          <li>CONTACT</li>
          <li>LOGO</li>
          <li>GALLERY</li>
          <li>ABOUT US</li>
        </ul>
      </nav>
      <main>
        <div>
          <h1>Jackson Brothers Barber Shop</h1>
          <p>New barbershop using old school methods for cutting mens hair</p>
          <button className='text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal'>
            <a>BOOK NOW</a>
          </button>
        </div>
        <div className='h-12 w-12 bg-red'>IMAGE GOES HERE</div>
      </main>
    </div>
  );
}

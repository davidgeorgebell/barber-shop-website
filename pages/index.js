import Head from 'next/head';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Traditional Barber Shop</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <nav>
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
          <div>
            <a>BOOK NOW</a>
          </div>
        </div>
        <div>IMAGE GOES HERE</div>
      </main>
    </div>
  );
}

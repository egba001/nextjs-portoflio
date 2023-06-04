import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import Layout from '../components/Layout.js';
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

// If loading a variable font, you don't need to specify the font weight

export default function App({ Component, pageProps }) {
  return (
    <>
      <Cursor isGelly={true} cursorSize={10} cursorBackgrounColor={'#9F2B68'} colorAnimationDuration={0.5} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout data-cursor-magnetic data-cursor-size="10px">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </>
  )
}

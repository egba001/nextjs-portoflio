import 'tailwindcss/tailwind.css';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Layout from './../components/Layout';
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout inter={inter} >
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

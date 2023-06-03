import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import Layout from './../components/Layout.js';

// If loading a variable font, you don't need to specify the font weight

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

import 'tailwindcss/tailwind.css';
import { Layout } from '../components/template/Layout.jsx';
import { Navbar } from '../components/template/Navbar.jsx';
import { Footer } from '../components/template/Footer.jsx';
import Head from 'next/head.js';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Head>
          <link href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css" rel="stylesheet" />
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <meta name="theme-color" content="#000000" />
          <meta
              name="description"
              content="Web site created using create-react-app"
          />
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </>
  )
}

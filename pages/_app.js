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
          <title>Egba Nnaemeka's Portfolio</title>
          <meta name="theme-color" content="#000000" />
          <meta
              name="description"
              content="Web site created using create-react-app"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content="@egba791" />
          <meta property="og:url" content="http://egba.tech" />
          <meta property="og:title" content="Egba Nnaemeka's Portfolio" />
          <meta property="og:description" content="Portfolio site created using Next Js" />
          <meta property="og:image" content="https://imgur.com/a/FSYe1wj" />
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </>
  )
}

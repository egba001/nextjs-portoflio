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
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@egba791" />
          <meta property="og:url" content="http://egba.tech" />
          <meta property="og:title" content="Egba Nnaemeka's Portfolio" />
          <meta property="og:description" content="A frontend developer with a passion for crafting exceptional user experiences. With experience using React and JavaScript and Typescript, I specialize in building elegant and intuitive web applications. I'm excited to bring my expertise and enthusiasm to your next project, creating seamless and visually appealing experiences that leave a lasting impact." />
          <meta property="og:image" content="https://res.cloudinary.com/da3qch8ch/image/upload/v1691420408/Nnaemeka_c1g0xj.jpg" />
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </>
  )
}

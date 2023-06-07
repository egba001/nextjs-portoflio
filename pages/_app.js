import 'tailwindcss/tailwind.css';
import { Layout } from '../components/Layout.js';
import { Navbar } from '../components/Navbar.js';
import { Footer } from '../components/Footer.js';

// If loading a variable font, you don't need to specify the font weight

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </>
  )
}

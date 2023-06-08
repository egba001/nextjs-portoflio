import 'tailwindcss/tailwind.css';
import { Layout } from '../components/template/Layout.jsx';
import { Navbar } from '../components/template/Navbar.jsx';
import { Footer } from '../components/template/Footer.jsx';

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

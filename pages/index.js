import Navbar from '../components/Navbar';
import TitleSection from '../components/TitleSection';
import Info from '../components/Info';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Head>
        <title>Game Design</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://upload.wikimedia.org/wikipedia/commons/f/f7/Bananas.svg"
        />
      </Head>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <TitleSection />
      <Info />
      <Footer />
    </div>
  );
}

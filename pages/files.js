import Navbar from '../components/Navbar';
import Head from 'next/head';

export default function Files() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Head>
        <title>Game Design | Files</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://upload.wikimedia.org/wikipedia/commons/f/f7/Bananas.svg"
        />
      </Head>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
    </div>
  )
}
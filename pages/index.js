import Navbar from "/components/Navbar";
import TitleSection from "/components/TitleSection";
import Footer from "/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Navbar />
      <TitleSection />
      <Footer />
    </div>
  );
}

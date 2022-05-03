import Info from "../components/Info";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-zinc-900">
        <div className="flex w-full h-64 bg-gradient-to-r from-yellow-400 via-green-500 to-blue-700">
          <div className="mx-auto my-auto">
            <p className="text-center text-white text-7xl font-extrabold">
              Game Design
            </p>
            <p className="text-center text-white text-xl font-light pt-2">
              We make games
            </p>
          </div>
        </div>
        <Info />
      </div>
    </>
  );
}

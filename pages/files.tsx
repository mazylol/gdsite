import Head from "next/head";
import FileList from "../components/FileList";
import Footer from "../components/Footer";

export default function Files() {
  return (
    <>
      <Head>
        <title>Game Design | Files</title>
      </Head>
      <div className="min-h-screen bg-zinc-900">
        <div className="flex w-full h-64 bg-gradient-to-r from-yellow-400 via-green-500 to-blue-700">
          <div className="mx-auto my-auto">
            <p className="text-center text-white text-7xl font-extrabold">
              Files
            </p>
          </div>
        </div>
        <FileList />
      </div>
    </>
  );
}

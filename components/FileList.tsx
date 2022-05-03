import Link from "next/link";

export default function FileList() {
  return (
    <div className="w-full p-5">
      <div className="grid grid-cols-1 gap-4">
        <Link href="https://google.com" passHref>
          <div className="bg-zinc-800 rounded-md hover:bg-zinc-700 duration-200">
            <p className="text-white font-semibold text-left text-3xl p-5">Platformer</p>
            <p className="text-gray-300 font-medium text-left text-xl mx-5 pb-5">A delightful hopping adventure where you will be creating the hopping adventure of your dreams.</p>
          </div>
        </Link>
        <Link href="https://youtube.com" passHref>
          <div className="bg-zinc-800 rounded-md hover:bg-zinc-700 duration-200">
            <p className="text-white font-semibold text-left text-3xl p-5">FPS</p>
            <p className="text-gray-300 font-medium text-left text-xl mx-5 pb-5">One of the most thrilling shooter experiences west of the Misssippi.</p>
          </div>
        </Link>
        <Link href="https://orteil.dashnet.org/cookieclicker" passHref>
          <div className="bg-zinc-800 rounded-md hover:bg-zinc-700 duration-200">
            <p className="text-white font-semibold text-left text-3xl p-5">Clicker</p>
            <p className="text-gray-300 font-medium text-left text-xl mx-5 pb-5">You will create an overwhelmingly addictive clicker game.</p>
          </div>
        </Link>
        <Link href="https://phet.colorado.edu" passHref>
          <div className="bg-zinc-800 rounded-md hover:bg-zinc-700 duration-200">
            <p className="text-white font-semibold text-left text-3xl p-5">Simulation</p>
            <p className="text-gray-300 font-medium text-left text-xl mx-5 pb-5">Create a complicated simulation game that will make you question if we are in a simulation ourselves.</p>
          </div>
        </Link>
        <Link href="https://nist.gov" passHref>
          <div className="bg-zinc-800 rounded-md hover:bg-zinc-700 duration-200">
            <p className="text-white font-semibold text-left text-3xl p-5">RPG</p>
            <p className="text-gray-300 font-medium text-left text-xl mx-5 pb-5">Create a mystical world where you can play as a dungeon master.</p>
          </div>
        </Link>
        <Link href="https://apple.com" passHref>
          <div className="bg-zinc-800 rounded-md hover:bg-zinc-700 duration-200">
            <p className="text-white font-semibold text-left text-3xl p-5">Horror</p>
            <p className="text-gray-300 font-medium text-left text-xl mx-5 pb-5">Make a bone chilling game to scare the pants off of people.</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
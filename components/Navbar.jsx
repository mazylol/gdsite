import { BsController } from 'react-icons/bs';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-zinc-900 p-3">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
          <a>
           <BsController className="text-gray-300 flex text-5xl" />
          </a>
        </Link>
      </div>
      <div className="w-full flex items-center">
        <div className="text-sm md:flex-grow">
          <Link href="/files">
            <a className="inline-block mt-0 text-gray-300 hover:text-white mr-4 text-md">
              Files
           </a>
          </Link>
          <Link href="">
            <a className="inline-block mt-0 text-gray-300 hover:text-white mr-4 text-md">
              Showcase
            </a>
          </Link>
          <Link href="">
            <a className="inline-block mt-0 text-gray-300 hover:text-white text-md">
              Games
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}
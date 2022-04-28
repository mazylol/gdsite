import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { BsController } from 'react-icons/bs';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-zinc-900 p-3">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <a href="#">
          <BsController className="text-gray-300 flex text-5xl" />
        </a>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a href="" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4 text-md">
            Files
          </a>
          <a href="" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4 text-md">
            Showcase
          </a>
          <a href="" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white text-md">
            Games
          </a>
        </div>
      </div>
    </nav>
  )
}
import Image from "next/image";

export default function FileList() {
  return (
    <div className="w-full p-5">
      <div className="grid grid-cols-2 gap-4">
        <a href="https://google.com">
          <div className="bg-zinc-800 rounded-md">
            <p className="text-white font-semibold text-left text-3xl p-5">Platformer</p>
            <p className="text-gray-300 font-medium text-left text-xl mx-5 pb-5">A delightful hopping adventure where you will be creating the hopping adventure of your dreams</p>
          </div>
        </a>
      </div>
    </div>
  )
}
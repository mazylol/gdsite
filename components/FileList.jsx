import Image from "next/image";

export default function FileList() {
  return (
    <div className="w-full p-5">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-zinc-800 rounded-md">
          <p className="text-white font-semibold text-left text-3xl m-5">Platformer</p>
          <p className="text-gray-300 font-medium text-left text-xl m-5">A delighul hopping adventure</p>
          <span className="flex justify-right">
            <Image alt="platformer" src="/platformer.jpg" height={200} width={300} />
          </span>
        </div>
      </div>
    </div>
  )
}
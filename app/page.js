import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-slate-900 grow px-40 py-20">
      <div className="">
        <h1 className="text-3xl font-bold">Muhammad Ahsan</h1>
        <h3 className="text-lg mt-5">
          I build web apps using JavaScript and TypeScript.
        </h3>
        <a className=" bg-slate-800 mt-10 p-3 border-2 rounded-sm font-medium border-white hover:scale-105 transition ease-out duration-300">
          View Work
        </a>
      </div>
    </main>
  );
}

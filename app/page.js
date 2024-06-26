import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-slate-900 grow px-40 py-20">
      <div className="">
        <h1 className="text-3xl font-bold">Muhammad Ahsan</h1>
        <h3 className="text-lg mt-5">
          I build web apps using JavaScript and TypeScript.
        </h3>
        <div className="flex items-center mt-5">
          <p className="text-lg mt-5">
            I'm a software engineer based in Karachi, Pakistan specializing in
            building (and occasionally designing) exceptional, high-quality
            websites and applications.
          </p>
        </div>
        <div className="flex items-center mt-5">
          <a
            href="https://github.com/thegreenpaladin"
            className=" bg-slate-800 mb-2 p-3 border-2 rounded-sm font-medium border-white hover:scale-105 transition ease-out duration-300"
          >
            Check out my GitHub
          </a>
        </div>
        <div className="flex items-center mt-5">
          <a
            href="https://github.com/thegreenpaladin/portfolio/blob/main/README.md"
            className=" bg-slate-800 mb-2 p-3 border-2 rounded-sm font-medium border-white hover:scale-105 transition ease-out duration-300"
          >
            Languages and Frameworks
          </a>
        </div>
        <div className="flex items-center mt-5">
          <a
            className="bg-slate-800 mb-2 p-3 border-2 rounded-sm font-medium border-white hover:scale-105 transition ease-out duration-300"
            href="https://www.threads.net/@calledahsan"
          >
            Reach out to me on {"Threads"}
          </a>
        </div>
      </div>
    </main>
  );
}

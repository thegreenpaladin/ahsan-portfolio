"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function Navbar() {
  const currentRoute = usePathname();

  const linkStyle = "ml-5 px-2 py-1 rounded-sm hover:scale-[105%]";
  const activeLinkStyle = linkStyle + " font-bold scale-[105%]";
  return (
    <div className=" bg-slate-800 flex items-center justify-between h-10 p-8">
      <h1 className="text-2xl font-medium">Ahsan</h1>
      <ul className="flex">
        <li className={currentRoute === "/" ? activeLinkStyle : linkStyle}>
          <Link href="/">Home</Link>
        </li>
        <li className={currentRoute === "/about" ? activeLinkStyle : linkStyle}>
          <Link href="/about">About</Link>
        </li>
        <li
          className={currentRoute === "/skills" ? activeLinkStyle : linkStyle}
        >
          <Link href="/skills">Skills</Link>
        </li>
      </ul>
      <ul className="fixed left-2 top-[50%]">
        <li className="social">
          <a href="https://www.linkedin.com/in/muhammadahsan45/">
            <AiFillLinkedin />
          </a>
        </li>
        <li className="social">
          <a href="https://github.com/thegreenpaladin">
            <AiFillGithub />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

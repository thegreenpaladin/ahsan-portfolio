import "./globals.css";
import { Inter } from "next/font/google";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

import Navbar from "./_components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ahsan | Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

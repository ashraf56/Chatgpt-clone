import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import img from '@/asset/logo.jpg'
import { FaRegEdit } from "react-icons/fa";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ChatGPT",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>


        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content ">
            {children}

          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

            <ul className="menu p-4 w-60 min-h-full bg-base-300  text-base-content text-md">
              <div className="flex justify-between items-center pb-4">
                <div className="flex items-center gap-2">
                  <Image src={img} width={30} height={30} alt="i" className="rounded-full"></Image>
                  <p>New Chat  </p>
                </div>
                <p className="font-extrabold">
                  <FaRegEdit />
                </p>
              </div>
              <div className="py-4">
                <p className="text-xs">today</p>
                <li><a>What is function expr...</a></li>
                <li><a>Today is November 25,...</a></li>
              </div>
              <div className="py-4">
                <p className="text-xs">Yestarday</p>
                <li><a>What is function expr...</a></li>
                <li><a>Today is November 25,...</a></li>
              </div>


            </ul>

          </div>
        </div>


      </body>
    </html>
  );
}

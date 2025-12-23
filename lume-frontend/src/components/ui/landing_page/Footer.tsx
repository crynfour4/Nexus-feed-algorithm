'use client'
import { SparklesIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black border border-t-zinc-900 w-full h-25 flex flex-row justify-between items-center px-8">
      <div className="flex flex-row gap-3 items-center pr-23">
        <span className="bg-indigo-500 rounded-lg p-1">
          <SparklesIcon className="text-white size-7" />
        </span>
        <p className="text-white font-semibold text-2xl">Lume</p>
      </div>
      <div className="flex flex-row gap-6">
        <Link
          href=""
          className="text-zinc-500 cursor-pointer hover:text-zinc-400 transition duration-300 ease-in-out"
        >
          Privacy
        </Link>
        <Link
          href=""
          className="text-zinc-500 cursor-pointer hover:text-zinc-400 transition duration-300 ease-in-out"
        >
          Terms
        </Link>
        <Link
          href=""
          className="text-zinc-500 cursor-pointer hover:text-zinc-400 transition duration-300 ease-in-out"
        >
          Contact
        </Link>
      </div>
      <div className="text-zinc-500">
        <p>© 2026 Lume. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

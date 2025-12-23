"use client";
import { SparklesIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { Link } from "react-scroll";

const Header = () => {
  const router = useRouter();

  return (
    <div className="flex flex-row justify-between items-center py-4 px-7 bg-current w-full h-1/12 fixed border border-b-zinc-900 z-10">
      <div className="flex flex-row gap-3 items-center pr-23">
        <span className="bg-indigo-500 rounded-lg p-1">
          <SparklesIcon className="text-white size-7" />
        </span>
        <p className="text-white font-semibold text-2xl">Lume</p>
      </div>
      <div className="flex flex-row gap-6">
        <Link
          to="features"
          className="text-zinc-500 cursor-pointer hover:text-white/80 transition duration-300 ease-in-out hover:text-shadow-[0_0_8px_white]"
        >
          Features
        </Link>
        <Link
          to="community"
          className="text-zinc-500 cursor-pointer hover:text-white/80 transition duration-300 ease-in-out hover:text-shadow-[0_0_8px_white]"
        >
          Community
        </Link>
        {/* TODO: change link */}
        <Link
          to="features"
          className="text-zinc-500 cursor-pointer hover:text-white/80 transition duration-300 ease-in-out hover:text-shadow-[0_0_8px_white]"
        >
          Contact us
        </Link>
      </div>
      <div className="flex flex-row items-center gap-6">
        <button onClick={() => router.push("/sign_in")} className="bg-black text-white cursor-pointer py-2 px-4 rounded-lg">
          Sign in
        </button>
        <button
          onClick={() => router.push("/sign_up")}
          className="bg-indigo-500 text-white py-2 px-3 rounded-lg cursor-pointer transition duration-300 ease-in-out hover:scale-103 hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]"
        >
          Get started
        </button>
      </div>
    </div>
  );
};

export default Header;

"use client";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();

  return (
    <div className="w-full h-182 bg-radial from-indigo-950 to-zinc-950 flex flex-col justify-center items-center">
      <p className="text-white font-bold text-7xl text-center pb-7 pt-10">
        Connect. Share.
        <br />
        <span className="text-indigo-500">Explore.</span>
      </p>
      <p className="text-zinc-400 text-center text-xl pb-10">
        Join a community where meaningful connections happen. Share your
        moments,
        <br />
        discover new perspectives, and build lasting friendships.
      </p>
      <div className="flex flex-row items-center gap-4">
        <button
          onClick={() => router.push("/sign_up")}
          className="bg-indigo-500 text-white flex flex-row items-center gap-2 rounded-lg px-4 py-3 cursor-pointer transition duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_10px_rgba(99,102,241,0.5)]"
        >
          Get Started Now
          <ArrowRightIcon className="size-4" />
        </button>
        <button
          className="bg-neutral-900 text-white rounded-lg px-8 py-3 cursor-pointer transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-zinc-900/30"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default HeroSection;

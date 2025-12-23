import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";
import React from "react";

const CTASection = () => {
  const router = useRouter();

  return (
    <div
      id="community"
      className="bg-black w-full h-170 flex items-center justify-center"
    >
      <div className="rounded-xl flex flex-col items-center justify-center gap-6 bg-radial from-indigo-950 to-zinc-950 w-370 py-25 ">
        <p className="text-white text-5xl font-bold">
          Ready to join <span className="text-indigo-500">Lume</span>?
        </p>
        <p className="text-zinc-400 text-lg">
          Create your account for free and start connecting with people who
          matter.
        </p>
        <button
          onClick={() => router.push("/sign_up")}
          className="bg-indigo-500 text-white px-4 py-3 rounded-lg flex flex-row items-center gap-2 cursor-pointer transition duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_10px_rgba(99,102,241,0.5)]"
        >
          Get started <ArrowRightIcon className="size-4" />
        </button>
      </div>
    </div>
  );
};

export default CTASection;

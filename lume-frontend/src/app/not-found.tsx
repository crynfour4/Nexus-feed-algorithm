"use client";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { HomeIcon } from "@heroicons/react/24/solid";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="w-full h-screen bg-radial from-indigo-950 to-70% to-zinc-950 flex flex-col items-center pt-8 select-none">
      <p className="text-indigo-900/50 text-[270px] font-bold h-97">404</p>
      <p className="text-white font-bold text-3xl pb-3">Page not found</p>
      <p className="text-zinc-400 pb-12">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="flex flex-row justify-center gap-4">
        <Button className="bg-zinc-900 text-white rounded-lg flex flex-row justify-center gap-2 cursor-pointer transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-zinc-900/30">
          <ArrowLeftIcon className="size-4 text-white" /> Go Back
        </Button>
        <Button
          className="bg-indigo-500 text-white rounded-lg flex flex-row justify-center gap-2 cursor-pointer transition duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_10px_rgba(99,102,241,0.5)]"
          onClick={() => router.push("/")}
        >
          <HomeIcon className="size-4 text-white" />
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

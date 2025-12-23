"use client";
import Progress from "@/components/ui/sign_up/Progress";
import SignUpForm from "@/components/ui/sign_up/SignUpForm";
import { SparklesIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Page = () => {

  return (
    <div className="w-full h-screen bg-zinc-950 flex justify-center">
      <div className="w-183 h-screen bg-radial from-indigo-950 to-70% to-zinc-950 flex flex-col items-center justify-center">
        <div className="flex flex-row gap-3 items-center pb-8">
          <span className="bg-indigo-500 rounded-lg p-1">
            <SparklesIcon className="text-white size-7" />
          </span>
          <Link href="/" className="text-white font-semibold text-2xl">Lume</Link>
        </div>
        <div>
            <Progress/>
        </div>
        <SignUpForm/>
      </div>
    </div>
  );
};

export default Page;

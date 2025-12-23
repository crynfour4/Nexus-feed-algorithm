"use client";
import useStepStore from "@/store/useStepStore";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import { Avatar, Button, Input } from "@heroui/react";
import { ChangeEvent, useState } from "react";

interface ThirdStepProps {
  stepData: {
    heading: string;
    description: string;
    inputs: {
      values: string[];
      placeholders: string[];
    };
  };
}

const ThirdStep: React.FC<ThirdStepProps> = ({ stepData }) => {
  const [imagePath, setImagePath] = useState<string>("");

  const nextStep = useStepStore((state) => state.nextStep);
  const prevStep = useStepStore((state) => state.prevStep);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; 
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePath(previewUrl);
    }
  };

  return (
    <div className="flex flex-col items-center w-md">
      <div className="flex flex-col items-center">
        <Avatar
          className="w-25 h-25 bg-indigo-950 text-indigo-400 border-3 border-indigo-500 mt-2"
          src={imagePath}
        />
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e)}
          classNames={{
            inputWrapper: [
              "mt-8",
              "bg-zinc-900/50", 
              "border-indigo-800", 
              "hover:border-indigo-600", 
              "group-data-[focus=true]:border-indigo-500", 
              "h-12 p-3 w-65", 
              "rounded-lg",
            ],
            input: [
              "text-indigo-200 text-md", 
              "file:mr-4 file:py-1 file:px-3",
              "file:rounded-md file:border-0",
              "file:text-md file:font-medium",
              "file:bg-indigo-500 file:text-white", 
              "file:cursor-pointer hover:file:bg-indigo-800",
              "cursor-pointer",
            ],
          }}
        />
        <p className="text-xs text-indigo-200 pt-2">Choose image for your profile picture</p>
      </div>

      <div className="flex flex-row items-center gap-4 w-full">
        <Button
          onClick={prevStep}
          className="text-neutral-500 bg-zinc-900 outline outline-zinc-800 rounded-lg py-3 px-5 flex flex-row items-center mt-6 w-1/3"
        >
          <ArrowLeftIcon className="size-4" />
          Back
        </Button>
        <Button
          onClick={nextStep}
          className="text-white bg-indigo-500 rounded-lg py-3 px-5 flex flex-row items-center mt-6 w-2/3 hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] duration-300"
        >
          Continue
          <ArrowRightIcon className="size-4" />
        </Button>
      </div>
    </div>
  );
};

export default ThirdStep;

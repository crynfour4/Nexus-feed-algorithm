import { SparklesIcon } from "@heroicons/react/24/outline";
import React from "react";

const BrandIcon = () => {
  return (
    <div className="flex flex-row gap-3 items-center pr-23">
      <span className="bg-indigo-500 rounded-lg p-1">
        <SparklesIcon className="text-white size-7" />
      </span>
      <p className="text-white font-semibold text-2xl">Lume</p>
    </div>
  );
};

export default BrandIcon;

import React from "react";

const FinalStep = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-xl py-4">
      <p className="text-4xl font-bold text-indigo-500 pb-3">Done!</p>
      <p className="text-indigo-200 text-center pb-8">
        You have successfully created your Lume account, now <span className="text-shadow-[0_0_8px_white]">check your inbox</span> to
        active your account and finally dive into Lume community.
      </p>
    </div>
  );
};

export default FinalStep;

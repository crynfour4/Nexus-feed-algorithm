"use client";
import { PaperAirplaneIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { Avatar, Divider, Button } from "@heroui/react";

const NewPost = () => {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900 h-58 w-160 mt-10 px-6 py-5">
      <div className="flex flex-row gap-4">
        <Avatar name="John" className="bg-white" />
        <textarea
          className="text-white w-130 h-30 focus:outline focus:outline-zinc-700 rounded-lg pl-2 pt-2"
          placeholder="Tell us something interesting..."
        />
      </div>
      <Divider className="bg-zinc-800 h-[0.4] mt-3" />
      <div className="flex flex-row justify-between my-4">
        <Button className="text-white gap-2 bg-zinc-800 rounded-lg">
          <PhotoIcon className="size-5" />
          Add image
        </Button>
        <Button className="text-white gap-2 bg-indigo-500 rounded-lg">
          <PaperAirplaneIcon className="size-5" />
          Post
        </Button>
      </div>
    </div>
  );
};

export default NewPost;

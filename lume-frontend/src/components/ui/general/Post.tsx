"use client";

import { IPost } from "@/app/types/Post";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/16/solid";
import {
  ChatBubbleOvalLeftIcon,
  EllipsisHorizontalIcon,
  HeartIcon as HeartIconOutline,
  PaperAirplaneIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Avatar, Button, Divider } from "@heroui/react";
import { formatDistanceStrict } from "date-fns";
import { useState } from "react";

interface PostProps {
  post: IPost;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [showComments, setShowComments] = useState<boolean>(true);

  const removePost = (id: number) => {};

  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900 w-160 mt-10 p-5 shadow-xl">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-start relative">
          <div className="flex flex-row gap-3 items-center">
            <Avatar name="John" className="bg-white text-black font-bold" />
            <div className="flex flex-col">
              <p className="text-white font-medium leading-none">John Doe</p>
              <p className="text-zinc-500 text-sm mt-1">
                {formatDistanceStrict(new Date(post.publishDate), new Date(), {
                  addSuffix: true,
                })}
              </p>
            </div>
          </div>

          <div className="relative">
            <EllipsisHorizontalIcon
              className="size-6 text-zinc-400 cursor-pointer hover:text-white transition-colors"
              onClick={() => setShowDelete(!showDelete)}
            />

            {showDelete && (
              <>
                <div
                  className="fixed inset-0 z-10 cursor-default"
                  onClick={() => setShowDelete(false)}
                />
                <div className="absolute mt-2 z-20 -left-10">
                  <Button
                    onPress={() => removePost(post.id)}
                    size="sm"
                    className="flex flex-row gap-2 text-red-500 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 transition-all duration-300 px-4"
                  >
                    <TrashIcon className="size-4" />
                    Delete
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="pt-5 text-zinc-200 leading-relaxed">
          {post.description}
        </div>

        <Divider className="bg-zinc-800 h-[0.3] mt-4" />

        <div className="flex flex-row items-center gap-6 mt-4">
          <div
            className="flex flex-row gap-2 text-zinc-400 items-center cursor-pointer hover:text-indigo-400 transition-colors"
            onClick={() => setIsLiked(!isLiked)}
          >
            {isLiked ? (
              <HeartIconSolid className="size-5 text-indigo-500" />
            ) : (
              <HeartIconOutline className="size-5" />
            )}
            <p className={isLiked ? "text-indigo-500" : ""}>
              {post.likes + (isLiked ? 1 : 0)}
            </p>
          </div>

          <div
            className="flex flex-row gap-2 text-zinc-400 items-center cursor-pointer hover:text-white transition-colors"
            onClick={() => setShowComments(!showComments)}
          >
            <ChatBubbleOvalLeftIcon className="size-5" />
            <p>{post.comments?.length || 0}</p>
          </div>
        </div>

        {/* COMMENTS */}
        {showComments ? (
          <div>
            <Divider className="bg-zinc-800 h-[0.3] mt-4" />
            {post.comments.map((comment) => (
              <div key={comment.id} className="flex flex-col py-4">
                <div className="flex flex-row items-center gap-3">
                  <Avatar size="sm" name="John" className="bg-white" />
                  <p className="text-white">John Doe</p>
                  <p className="text-zinc-400 text-sm">
                    {formatDistanceStrict(new Date(comment.date), new Date(), {
                      addSuffix: true,
                    })}
                  </p>
                </div>
                <p className="text-zinc-300 pl-12">{comment.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}

        <div className="flex flex-row gap-3">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-zinc-900 border border-zinc-800 px-4 rounded-lg w-full text-white text-sm focus:outline focus:outline-zinc-700"
          />
          <button className="text-white bg-indigo-500 rounded-lg h-11 w-13 flex justify-center items-center cursor-pointer">
            <PaperAirplaneIcon className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;

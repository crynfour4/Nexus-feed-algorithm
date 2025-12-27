import NewPost from "@/components/ui/feed/NewPost";
import Header from "@/components/ui/general/Header";
import { IPost } from "../types/Post";
import Post from "@/components/ui/general/Post";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

const Page = () => {
  const posts: IPost[] = [
    {
      id: 1,
      publishDate: new Date(Date.now()),
      description: "New post",
      likes: 1,
      comments: [
        {
          id: 1,
          date: new Date(Date.now()),
          description: "Nice",
        },
      ],
    },
  ];

  return (
    <div className="h-full w-full bg-zinc-950 flex flex-col items-center">
      <Header />
      <div className="py-17">
        <NewPost />
        {posts.length > 0 ? (
          <div>
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center pt-25 gap-3">
            <DocumentTextIcon className="size-9 text-white rounded-lg bg-zinc-900 p-1" />
            <p className="text-white font-semibold text-2xl"> No posts yet</p>
            <p className="text-zinc-400">
              Share something new with your friends!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;

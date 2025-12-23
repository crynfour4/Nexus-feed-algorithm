"use client";
import { BoltIcon, ChatBubbleOvalLeftIcon, GlobeAltIcon, PhotoIcon, ShieldCheckIcon, UsersIcon } from "@heroicons/react/24/outline";
import FeatureCard from "./FeatureCard";

const ProductValue = () => {
  const features = [
    {
      icon: <UsersIcon />,
      heading: "Build Your Network",
      description:
        "Connect with friends, join groups, and discover people who share your interests.",
    },
    {
        icon: <ChatBubbleOvalLeftIcon/>,
        heading: 'Engage & Interact',
        description: "Like, comment, and share posts. Start meaningful conversations that matter."
    },
    {
        icon: <PhotoIcon/>,
        heading: 'Share Your Story',
        description: "Post photos, thoughts, and updates. Express yourself authentically."
    },
    {
        icon: <GlobeAltIcon/>,
        heading: 'Global Community',
        description: 'Connect with people from around the world.'
    },
    {
        icon: <ShieldCheckIcon/>,
        heading: 'Privacy First',
        description: 'Your data is yours. Full control over who sees what you share.'
    },
    {
        icon: <BoltIcon/>,
        heading: 'Real-Time Updates',
        description: 'Instant notifications. Never miss a moment from people you care about.'
    }
  ];

  return (
    <div id="features" className="bg-zinc-950 w-full h-250 flex flex-col items-center justify-center">
      <p className="text-center text-white font-bold text-4xl pb-5">
        Everything you need to explore
      </p>
      <p className="text-center text-zinc-400 text-lg pb-25">
        Powerful features designed to help you share, engage and explore new
        things.
      </p>
      <div className="grid grid-cols-3 grid-rows-2 gap-8">
        {features.map((feature) => (
            <FeatureCard key={feature.heading} feature={feature}/>
        ))}
      </div>
    </div>
  );
};

export default ProductValue;

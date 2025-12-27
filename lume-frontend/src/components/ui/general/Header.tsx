"use client";
import { Avatar } from "@heroui/react";
import BrandIcon from "../general/BrandIcon";
import { usePathname, useRouter } from "next/navigation";
import {
  BellIcon,
  ChatBubbleOvalLeftIcon,
  HomeIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    { name: "Feed", href: "/feed", icon: HomeIcon },
    { name: "Friends", href: "/friends", icon: UsersIcon },
    { name: "Groups", href: "/groups", icon: UserGroupIcon },
    { name: "Messages", href: "/messages", icon: ChatBubbleOvalLeftIcon },
    { name: "Notifications", href: "/notifications", icon: BellIcon },
  ];

  return (
    <div className="fixed bg-zinc-950 border border-b-zinc-900 h-18 flex flex-row px-5 justify-center items-center select-none gap-67">
      <BrandIcon />

      <div className="flex flex-row gap-6 pr-39">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;

          return (
            <div
              key={tab.href}
              className={`flex flex-row justify-center gap-2 cursor-pointer duration-300 transition-all ${
                isActive
                  ? "text-indigo-400"
                  : "text-white hover:text-indigo-400"
              }`}
              onClick={() => router.push(tab.href)}
            >
                <tab.icon className="size-5"/>
                <p>{tab.name}</p>
            </div>
          );
        })}
      </div>

      <Avatar
        name="John"
        className="bg-white cursor-pointer"
        onClick={() => router.push("/profile")}
      />
    </div>
  );
};

export default Header;

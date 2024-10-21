"use client";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
interface SidebarItemProps {
  href: string;
  title: string;
  icon: LucideIcon;
}
export const SidebarItem = ({ href, title, icon: Icon }: SidebarItemProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const selected = pathname === href;
  return (
    <div
      className={`flex ${selected ? "text-[#6a51a6]" : "text-slate-500"} cursor-pointer p-2  pl-10 lg:pl-4 md:pl-3 `}
      onClick={() => {
        router.push(href);
      }}
    >
      <div className="pr-2 text-[white]">{Icon && <Icon />}</div>
      <div className={`font-bold text-white hover:text-gray-300`}>{title}</div>
    </div>
  );
};

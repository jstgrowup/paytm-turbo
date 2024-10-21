"use client";
import { DashboardSidebarLinks } from "@/lib/dashboardSidebar";
import React from "react";
import { SidebarItem } from "./SidebarItem";
import { Menu } from "lucide-react";
import { DashboardSidebarProps } from "@repo/utils/types";
const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  isOpen,
  toggleSidebar,
}) => {
  return (
    <>
      <button
        className="absolute top-24 left-4 sm:hidden p-2 focus:outline-none z-50 border border-gray-300 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 ease-in-out"
        onClick={toggleSidebar}
      >
        <Menu
          className={`w-6 h-6 text-gray-600 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } sm:block shadow-2xl w-60 lg:w-52 md:w-48 border-r border-slate-300 min-h-screen flex flex-col gap-2 p-5 z-40 bg-gray-700 absolute sm:relative`}
      >
        {DashboardSidebarLinks.map((item, index) => (
          <SidebarItem
            href={item.href}
            icon={item.icon}
            title={item.title}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default DashboardSidebar;

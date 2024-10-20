"use client";

import { DashboardSidebarLinks } from "@/lib/dashboardSidebar";
import React from "react";
import { SidebarItem } from "./SidebarItem";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DashboardSidebar = ({
  isExpanded,
  toggleSidebar,
}: {
  isExpanded: boolean;
  toggleSidebar: () => void;
}) => {
  return (
    <aside
      className={`transition-all duration-300 ease-in-out flex-shrink-0 border-r border-slate-300 min-h-screen 
        ${isExpanded ? "w-64" : "w-20"}`}
    >
      <nav className="flex flex-col gap-2 p-5">
        <button onClick={toggleSidebar} className="mb-4">
          {isExpanded ? <ChevronLeft /> : <ChevronRight />}
        </button>
        {DashboardSidebarLinks.map((item, index) => (
          <SidebarItem
            href={item.href}
            icon={item.icon}
            title={isExpanded ? item.title : ""}
            key={index}
          />
        ))}
      </nav>
    </aside>
  );
};

export default DashboardSidebar;

"use client";
import DashboardSidebar from "@/components/dashboard/Sidebar";
import Dashboard from "../components/dashboard/Dashboard";
import { SidebarItem } from "@/components/dashboard/SidebarItem";
import { useState } from "react";

export default function Page(): JSX.Element {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex min-h-screen">
      <DashboardSidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
      <Dashboard />
    </div>
  );
}

"use client";
import DashboardSidebar from "@/components/dashboard/Sidebar";
import Dashboard from "../components/dashboard/Dashboard";
import { useState } from "react";

export default function Page(): JSX.Element {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex">
      <DashboardSidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <div className="flex-1">
        <Dashboard />
      </div>
    </div>
  );
}

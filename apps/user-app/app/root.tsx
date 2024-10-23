"use client";
import AppbarClient from "@/components/AppbarClient";
import DashboardSidebar from "@/components/dashboard/Sidebar";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { Toaster } from "sonner";

const Root = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const session = useSession();

  return (
    <div className="flex flex-col h-screen">
      <AppbarClient />
      <div className="flex">
        {session?.data?.user && (
          <DashboardSidebar
            isOpen={isSidebarOpen}
            toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        )}
        <div className="flex-1">{children}</div>
      </div>
      <Toaster />
    </div>
  );
};

export default Root;

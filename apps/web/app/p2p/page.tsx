"use client";
import React, { useState } from "react";
import P2PForm from "@/components/p2p/p2pform";
import DashboardSidebar from "@/components/dashboard/Sidebar";
const Transfer = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex">
      <DashboardSidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <div className="flex-1">
        <P2PForm />;
      </div>
    </div>
  );
};

export default Transfer;

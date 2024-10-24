"use client";
import React, { useState } from "react";
import P2PForm from "@/components/p2p/p2pform";
import DashboardSidebar from "@/components/dashboard/Sidebar";
import TransactionComponent from "@/components/transaction/transaction.component";
const Transaction = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex">
      <DashboardSidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <div className="flex-1">
        <TransactionComponent />;
      </div>
    </div>
  );
};

export default Transaction;

"use client";
import AddMoneyCard from "@/components/dashboard/AddMoneyCard";
import { BalanceCard } from "@/components/dashboard/BalanceCard";
import { RecentTransactions } from "@/components/dashboard/RecentTransaction";

const Dashboard = () => {
  return (
    <>
      <div className="flex bg-violet-100">
        <div className="w-screen p-1 md:p-6">
          <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
            Transfer
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 p-4">
            <AddMoneyCard />
            <div className="flex flex-col gap-3">
              <BalanceCard />
              <RecentTransactions />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

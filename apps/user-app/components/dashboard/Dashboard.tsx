"use client";
import AddMoneyCard from "@/components/dashboard/AddMoneyCard";
import { BalanceCard } from "@/components/dashboard/BalanceCard";
import { RecentTransactions } from "@/components/dashboard/RecentTransaction";

const Dashboard = () => {
  return (
    <>
      <div className=" bg-violet-100 h-screen relative p-2 lg:p-9 md:p-5">
        <div className="text-4xl text-[#6a51a6] pt-4 font-bold ml-20 lg:ml-3 md:ml-4 ">
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
    </>
  );
};

export default Dashboard;

"use client";
import { useBalanceStore } from "@/store/balance";
import { useEffect } from "react";
export const BalanceCard = (): JSX.Element => {
  const { balance, getWalletBalanceAction } = useBalanceStore((store) => store);
  useEffect(() => {
    getWalletBalanceAction();
  }, []);
  return (
    <div className="w-full  bg-white rounded-xl md:rounded-xl flex flex-col gap-2 p-4 md:p-5">
      <h2 className="flex pt-1 items-center gap-2 text-xl font-semibold text-gray-800">
        Balance
      </h2>
      <div className="flex flex-col gap-2 text-md font-medium">
        <div className="flex justify-between border-b border-slate-300 ">
          <div>Unlocked balance</div>
          <div>{balance ?? 0} INR</div>
        </div>
        <div className="flex justify-between border-b border-slate-300 ">
          <div>Total Locked Balance</div>
          <div>{0 / 100} INR</div>
        </div>
        <div className="flex justify-between border-b border-slate-300 ">
          <div>Total Balance</div>
          <div>{balance ?? 0} INR</div>
        </div>
      </div>
    </div>
  );
};

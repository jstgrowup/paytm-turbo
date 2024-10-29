import { useTransferStore } from "@/store/transfer";
import { useEffect } from "react";
import TransactionSkeleton from "./RecentTransactionSkeleton";
import IndividualTransaction from "./IndividualTransaction";
export const RecentTransactions = (): JSX.Element => {
  const { getAllTransactionsAction, transactions, loading } = useTransferStore(
    (store) => store
  );
  useEffect(() => {
    getAllTransactionsAction();
  }, []);
  return (
    <div className="w-full  bg-white rounded-xl md:rounded-xl flex flex-col gap-3 p-4 md:p-5 ">
      <h2 className="flex items-center text-xl font-semibold text-gray-800">
        Recent Transactions
      </h2>
      <div className="pt-1 h-32 overflow-y-auto">
        {loading ? (
          <div className="flex flex-col gap-2">
            <TransactionSkeleton />
            <TransactionSkeleton />
            <TransactionSkeleton />
          </div>
        ) : transactions && transactions?.length === 0 ? (
          <h2 className="flex items-center gap-2 text-sm font-semibold text-gray-800">
            No recent transactions
          </h2>
        ) : (
          transactions &&
          transactions.length > 0 &&
          transactions.map((t: any, index: number) => (
            <IndividualTransaction
              key={index}
              index={index}
              amount={t.amount}
              startTime={t.startTime}
              status={t.status}
              transactionType={t.transactionType}
            />
          ))
        )}
      </div>
    </div>
  );
};
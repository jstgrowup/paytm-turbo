import { IndividualTransactionPropType } from "@repo/utils/types";
import { formatDate } from "@repo/utils/time-formatter";
import React from "react";
import { OnRampStatus } from "@repo/utils/enums";
const IndividualTransaction: React.FC<IndividualTransactionPropType> = ({
  index,
  startTime,
  amount,
  status,
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case OnRampStatus.Success:
        return "text-green-600";
      case OnRampStatus.Pending:
        return "text-yellow-600";
      case OnRampStatus.Failed:
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };
  return (
    <div
      className="flex justify-between items-center gap-2 p-2 border-b border-gray-200"
      key={index}
    >
      <div className="flex-grow">
        <div className="text-md font-medium">Received INR</div>
        <div className="text-slate-600 text-sm">{formatDate(startTime)}</div>
      </div>
      <div className="flex flex-col items-end">
        <div className="text-md font-semibold">+₹{amount}</div>
        <div className={`text-md ${getStatusColor(status)}`}>{status}</div>
      </div>
    </div>
  );
};

export default IndividualTransaction;

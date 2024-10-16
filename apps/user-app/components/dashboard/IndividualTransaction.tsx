import { IndividualTransactionPropType } from "@repo/utils/types";
import React from "react";
const IndividualTransaction: React.FC<IndividualTransactionPropType> = ({
  index,
  startTime,
  amount,
}) => {
  return (
    <div className="flex justify-between gap-2" key={index}>
      <div>
        <div className="text-md">Received INR</div>
        <div className="text-slate-600 text-sm">{startTime.toDateString()}</div>
      </div>
      <div className="flex flex-col justify-center">+Rs {amount / 100}</div>
    </div>
  );
};

export default IndividualTransaction;

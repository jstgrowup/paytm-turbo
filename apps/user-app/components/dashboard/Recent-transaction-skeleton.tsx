const TransactionSkeleton = () => {
  return (
    <div className="animate-pulse flex justify-between">
      <div>
        <div className="bg-gray-300 h-4 w-24 mb-2"></div>{" "}
        <div className="bg-gray-300 h-3 w-32"></div>{" "}
      </div>
      <div className="flex flex-col justify-center">
        <div className="bg-gray-300 h-5 w-16"></div>{" "}
      </div>
    </div>
  );
};

export default TransactionSkeleton;

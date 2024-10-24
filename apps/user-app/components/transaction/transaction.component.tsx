import React from "react";

const TransactionComponent = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-gradient-to-r bg-cyan-400 text-white">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide">
              Column 1
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide">
              Column 2
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide">
              Column 3
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide">
              Column 4
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200 hover:bg-gray-100 transition-all">
            <td className="px-6 py-4 text-sm text-gray-700">Data 1</td>
            <td className="px-6 py-4 text-sm text-gray-700">Data 2</td>
            <td className="px-6 py-4 text-sm text-gray-700">Data 3</td>
            <td className="px-6 py-4 text-sm text-gray-700">Data 4</td>
          </tr>

          <tr className="bg-gray-50 border-b border-gray-200 hover:bg-gray-100 transition-all">
            <td className="px-6 py-4 text-sm text-gray-700">Data 5</td>
            <td className="px-6 py-4 text-sm text-gray-700">Data 6</td>
            <td className="px-6 py-4 text-sm text-gray-700">Data 7</td>
            <td className="px-6 py-4 text-sm text-gray-700">Data 8</td>
          </tr>

          <tr className="border-b border-gray-200 hover:bg-gray-100 transition-all">
            <td className="px-6 py-4 text-sm text-gray-700">Data 9</td>
            <td className="px-6 py-4 text-sm text-gray-700">Data 10</td>
            <td className="px-6 py-4 text-sm text-gray-700">Data 11</td>
            <td className="px-6 py-4 text-sm text-gray-700">Data 12</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TransactionComponent;

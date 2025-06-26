"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ExportRecord } from "../../constants/types";

export const ExportRecordsTable = () => {
  const [data, setData] = useState<ExportRecord[]>([]);

  useEffect(() => {
    setData([
      { id: "EXP-202501-42", user: "Natali Craig", dateTime: "05/01/2025 10:45", records: 250, status: "Completed" },
      { id: "EXP-202501-43", user: "Kate Morrison", dateTime: "05/01/2025 10:45", records: 300, status: "In Progress" },
      { id: "EXP-202501-44", user: "Drew Cano", dateTime: "05/01/2025 10:45", records: 400, status: "Failed" },
      { id: "EXP-202501-45", user: "Orlando Diggs", dateTime: "05/01/2025 10:45", records: 180, status: "Completed" },
      { id: "EXP-202501-46", user: "Andi Lane", dateTime: "05/01/2025 10:45", records: 370, status: "Failed" },
    ]);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "text-[#14A155]";
      case "In Progress":
        return "text-[#DB7706]";
      case "Failed":
        return "text-[#DC2626]";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="overflow-x-auto border border-gray-200 rounded-lg mt-6">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-[#EFE4E5] text-left lg:text-lg text-gray-700 font-medium">
          <tr>
            <th className="px-2 sm:px-4 py-3">
              <input type="checkbox" />
            </th>
            <th className="px-2 sm:px-4 py-3 whitespace-nowrap">Export ID</th>
            <th className="hidden sm:table-cell px-2 sm:px-4 py-3 whitespace-nowrap">User</th>
            <th className="hidden md:table-cell px-2 sm:px-4 py-3 whitespace-nowrap">Date/Time</th>
            <th className="hidden lg:table-cell px-2 sm:px-4 py-3 whitespace-nowrap">Records</th>
            <th className="px-2 sm:px-4 py-3 whitespace-nowrap">Status</th>
            <th className="px-2 sm:px-4 py-3 whitespace-nowrap">Download</th>
            <th className="hidden md:table-cell px-2 sm:px-4 py-3 whitespace-nowrap">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-[#EFE4E5] divide-y divide-gray-100">
          {data.map((item, index) => (
            <tr key={index} className="text-gray-800">
              <td className="px-2 sm:px-4 py-3 whitespace-nowrap">
                <input type="checkbox" />
              </td>
              <td className="px-2 sm:px-4 py-3 font-medium whitespace-nowrap">{item.id}</td>
              <td className="hidden sm:table-cell px-2 sm:px-4 py-3 whitespace-nowrap">{item.user}</td>
              <td className="hidden md:table-cell px-2 sm:px-4 py-3 whitespace-nowrap">{item.dateTime}</td>
              <td className="hidden lg:table-cell px-2 sm:px-4 py-3 whitespace-nowrap">{item.records}</td>
              <td className={`px-2 sm:px-4 py-3 font-semibold whitespace-nowrap ${getStatusColor(item.status)}`}>
                {item.status}
              </td>
              <td className="px-2 sm:px-4 py-3 whitespace-nowrap">
                {item.status === "Completed" ? (
                  <button className="bg-[#6F0C15] text-white px-3 py-1 rounded flex items-center gap-1 text-xs sm:text-sm">
                    <Image src="/icons/Receive.png" alt="Download" width={12} height={12} />
                    Download
                  </button>
                ) : (
                  <button
                    className="bg-gray-200 text-gray-400 px-3 py-1 rounded flex items-center gap-1 text-xs sm:text-sm cursor-not-allowed"
                    disabled
                  >
                    <Image src="/icons/download.png" alt="Download" width={12} height={12} />
                    Download
                  </button>
                )}
              </td>
              <td className="hidden md:table-cell px-2 sm:px-4 py-3 whitespace-nowrap">
                {item.status === "Failed" ? (
                  <button className="bg-[#F59E0B] text-white px-3 py-1 rounded text-xs sm:text-sm">Retry</button>
                ) : (
                  <span className="text-gray-400 text-xs sm:text-sm">—</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

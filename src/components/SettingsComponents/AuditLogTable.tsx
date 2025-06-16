"use client";

import Image from "next/image";

const auditLogs = [
  {
    timestamp: "05/01 10:30 AM",
    user: "Jane Foster (Admin)",
    action: "Export Completed",
    object: "Call #CMP801",
    result: "success",
    ip: "192.168.115",
  },
  {
    timestamp: "05/01 09:00 AM",
    user: "John Smith (Agent)",
    action: "Playback Started",
    object: "Call #CMP802",
    result: "success",
    ip: "192.168.122",
  },
  {
    timestamp: "04/30 03:45 PM",
    user: "Tony Stark (Admin)",
    action: "User Created",
    object: "User: Peter Parker",
    result: "success",
    ip: "192.168.110",
  },
  {
    timestamp: "04/29 11:20 AM",
    user: "Natasha Romanoff (Agent)",
    action: "Login Attempt",
    object: "System Access",
    result: "failed",
    ip: "192.168.130",
  },
  {
    timestamp: "04/28 02:15 PM",
    user: "Jane Foster (Admin)",
    action: "Policy Updated",
    object: "Retention: Calls-1Year",
    result: "success",
    ip: "192.168.115",
  },
];

const AuditLogTable = () => {
  return (
    <div className="overflow-x-auto bg-[#EFE4E5] shadow mt-20">
      <table className="min-w-full text-sm table-auto">
        <thead className="bg-[#EFE4E5] text-[#1C1C1C66] text-left font-medium">
          <tr>
            <th className="px-4 py-3">Timestamp</th>
            <th className="px-4 py-3">User</th>
            <th className="px-4 py-3">Action</th>
            <th className="px-4 py-3">Object</th>
            <th className="px-4 py-3">Results</th>
            <th className="px-4 py-3">IP Address</th>
            <th className="px-4 py-3">Details</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {auditLogs.map((log, idx) => (
            <tr key={idx} className="border-t border-gray-300 font-normal text-[14.16px]">
              <td className="px-4 py-3">{log.timestamp}</td>
              <td className="px-4 py-3">{log.user}</td>
              <td className="px-4 py-3">{log.action}</td>
              <td className="px-4 py-3">{log.object}</td>
              <td className="px-4 py-3">
                <Image
                  src={
                    log.result === "success"
                      ? "/icons/success-icon.png"
                      : "/icons/fail-icon.png"
                  }
                  alt={log.result}
                  width={26}
                  height={26}
                />
              </td>
              <td className="px-3 py-3">{log.ip}</td>
              <td className="px-3 py-3">
                <button className="bg-[#C9C9C9] text-[#868585] rounded-xl px-4 py-2 text-xs">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuditLogTable;

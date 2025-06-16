"use client";

import React from "react";

interface CallLog {
  id: string;
  callType: "Inbound" | "Outbound";
  phoneNumber: string;
  agentName: string;
  campaign: string;
  startTime: string;
  duration: string;
  hungUpBy: "Agent" | "Customer";
}

// api call
const logs: CallLog[] = [
  {
    id: "CRM801",
    callType: "Inbound",
    phoneNumber: "+234 80 987654321",
    agentName: "Natail Craig",
    campaign: "Email",
    startTime: "2025-05-10 09:12",
    duration: "00:03:45",
    hungUpBy: "Agent",
  },
  {
    id: "CRM802",
    callType: "Outbound",
    phoneNumber: "+234 80 987654321",
    agentName: "Natail Craig",
    campaign: "Email",
    startTime: "2025-05-10 09:12",
    duration: "00:03:45",
    hungUpBy: "Customer",
  },
    {
    id: "CRM802",
    callType: "Inbound",
    phoneNumber: "+234 80 987654321",
    agentName: "Joseph Emmanuel",
    campaign: "Email",
    startTime: "2025-05-10 09:12",
    duration: "00:03:45",
    hungUpBy: "Customer",
  },
    {
    id: "CRM802",
    callType: "Outbound",
    phoneNumber: "+234 80 987654321",
    agentName: "Natail Craig",
    campaign: "Email",
    startTime: "2025-05-10 09:12",
    duration: "00:03:45",
    hungUpBy: "Customer",
  },
];

export default function CallLogTable() {
  return (
    <div className="overflow-x-auto bg-[#EFE4E5] shadow rounded-md">
      <table className="w-full text-sm text-left">
        <thead className="bg-[#EFE4E5] text-[#1C1C1C66] font-normal text-[12px] leading-[18px]">
          <tr>
            <th className="px-2 py-2">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-current"
                  aria-label="Select All"
                />
                <span>Call ID</span>
                <img src="/icons/TableIcon.png" alt="Sort" className="w-3 h-3" />
              </div>
            </th>
            <th className="px-2 py-2">Call Type</th>
            <th className="px-2 py-2">Phone Number</th>
            <th className="px-2 py-2">
              <div className="flex items-center gap-2">
                Agent Name
                <img src="/icons/TableIcon.png" alt="Sort" className="w-3 h-3" />
              </div>
            </th>
            <th className="px-2 py-2">Campaign</th>
            <th className="px-2 py-2">
              <div className="flex items-center gap-2">
                Start Time
                <img src="/icons/TableIcon.png" alt="Sort" className="w-3 h-3" />
              </div>
            </th>
            <th className="px-3 py-2">
              <div className="flex items-center gap-2">
                Duration
                <img src="/icons/TableIcon.png" alt="Sort" className="w-3 h-3" />
              </div>
            </th>
            <th className="px-3 py-2">
              <div className="flex items-center gap-2">
                Hungup By
                <img src="/icons/TableIcon.png" alt="Sort" className="w-3 h-3" />
              </div>
            </th>
            <th className="px-3 py-2">
              <img src="/icons/Download.png" alt="Download" className="w-2.5 h-3 mx-auto" />
            </th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, i) => (
            <tr key={i} className="hover:bg-gray-50">
              <td className="flex px-3 py-2 gap-3">
                <button className="font-normal text-[12px] leading-[18px] tracking-normal flex items-center gap-2">
                  <img src="/icons/play.png" alt="Play" />
                </button>

                <span className="text-gray-700">#{log.id}</span>
              </td>
              <td className="px-1 py-2">{log.callType}</td>
              <td className="px-1 py-2">{log.phoneNumber}</td>
              <td className="px-1 py-2">{log.agentName}</td>
              <td className="px-1 py-2">{log.campaign}</td>
              <td className="px-1 py-2">{log.startTime}</td>
              <td className="px-1 py-2">{log.duration}</td>
              <td className="px-1 py-2 text-[#6F0C15]">{log.hungUpBy}</td>
              <td className="px-1 py-2">
                <button>
                  <img src="/icons/Download.png" alt="Download" className="w-2.5 h-3" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

'use client';

import React from "react";
import Image from "next/image";
import { X } from 'lucide-react'
import { useState } from 'react';
import CustomAudioPlayer from '../CustomAudioPlayer/CustomAudioPlayer';


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
    id: "CRM803",
    callType: "Inbound",
    phoneNumber: "+234 80 987654321",
    agentName: "Joseph Emmanuel",
    campaign: "Email",
    startTime: "2025-05-10 09:12",
    duration: "00:03:45",
    hungUpBy: "Customer",
  },
  {
    id: "CRM804",
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


  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);

  const icons = [
    "/icons/Icon-Wrapper.png",
    "/icons/Wrapper.png",
    "/icons/upload.png",
    "/icons/share.png",
  ];

  const infoItems = [
    { icon: "/icons/modalIcons/call.png", label: "Call ID:", value: "#AV9801" },
    { icon: "/icons/modalIcons/agent.png", label: "Agent:", value: "John Doe" },
    { icon: "/icons/modalIcons/phone.png", label: "Phone:", value: "(+234) 80-1234-567-89" },
    { icon: "/icons/modalIcons/campaign.png", label: "Campaign:", value: "Email" },
    { icon: "/icons/modalIcons/queue.png", label: "Queue:", value: "Reservation" },
    { icon: "/icons/modalIcons/date.png", label: "Date:", value: "2025-05-01 09:12" },
    { icon: "/icons/modalIcons/duration.png", label: "Duration:", value: "10:04:0" },
    { icon: "/icons/modalIcons/deposition.png", label: "Disposition:", value: "Resolved" },
    { icon: "/icons/modalIcons/hangup.png", label: "Hangup By:", value: "Agent" },
  ];

  interface TagProps {
    label: string;
    onRemove?: () => void;
  }

  const Tag: React.FC<TagProps> = ({ label, onRemove }) => {
    return (
      <div className="flex items-center justify-between px-4 py-1 rounded-[15px] bg-[#C09A9E] text-white text-sm w-[140px] h-[40px]">
        <span className="">{label}</span>
        <button onClick={onRemove} className="ml-2 hover:text-gray-200">
          <X size={14} />
        </button>
      </div>
    );
  };

  return (
    <div className="overflow-x-auto bg-[#EFE4E5] shadow rounded-md">
      <table className="w-full text-sm text-left">
        <thead className="bg-[#EFE4E5] text-[#1C1C1C66] font-normal text-[12px] leading-[18px]">
          <tr>
            <th className="px-2 py-2">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 accent-current" />
                <span>Call ID</span>
                <Image src="/icons/TableIcon.png" alt="Sort" width={12} height={12} />
              </div>
            </th>
            <th className="px-2 py-2">Call Type</th>
            <th className="px-2 py-2">Phone Number</th>
            <th className="px-2 py-2">
              <div className="flex items-center gap-2">
                Agent Name
                <Image src="/icons/TableIcon.png" alt="Sort" width={12} height={12} />
              </div>
            </th>
            <th className="px-2 py-2">Campaign</th>
            <th className="px-2 py-2">
              <div className="flex items-center gap-2">
                Start Time
                <Image src="/icons/TableIcon.png" alt="Sort" width={12} height={12} />
              </div>
            </th>
            <th className="px-3 py-2">
              <div className="flex items-center gap-2">
                Duration
                <Image src="/icons/TableIcon.png" alt="Sort" width={12} height={12} />
              </div>
            </th>
            <th className="px-3 py-2">
              <div className="flex items-center gap-2">
                Hungup By
                <Image src="/icons/TableIcon.png" alt="Sort" width={12} height={12} />
              </div>
            </th>
            <th className="px-3 py-2">
              <Image src="/icons/Download.png" alt="Download" width={10} height={12} />
            </th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, i) => (
            <tr key={i} className="hover:bg-gray-50">
              <td className="flex px-3 py-2 gap-3">
                <button className="font-normal text-[12px] flex items-center gap-2"
                  onClick={() => setIsModalOpen(true)}
                >
                  <Image src="/icons/play.png" alt="Play" width={16} height={16} />
                </button>
                <span className="text-gray-600">#{log.id}</span>
              </td>
              <td className="px-1 py-2 text-gray-600">{log.callType}</td>
              <td className="px-1 py-2 text-gray-600">{log.phoneNumber}</td>
              <td className="px-1 py-2 text-gray-600">{log.agentName}</td>
              <td className="px-1 py-2 text-gray-600">{log.campaign}</td>
              <td className="px-1 py-2 text-gray-600">{log.startTime}</td>
              <td className="px-1 py-2 text-gray-600">{log.duration}</td>
              <td className="px-1 py-2 text-[#6F0C15]">{log.hungUpBy}</td>
              <td className="px-1 py-2">
                <button>
                  <Image src="/icons/Download.png" alt="Download" width={10} height={12} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {isModalOpen && (
        <div className="absolute right-0 top-[15%] w-[392]  max-w-md bg-[#EFE4E5] rounded-lg border border-[#d4a2aa] z-50">
          <div className="bg-[#EFE4E5] rounded-lg border border-[#d4a2aa] w-full max-h-[80vh] overflow-y-auto">
            {/* Header */}
            <div className="border-b border-[#d4a2aa] px-2 flex justify-end items-center">
              <button
                onClick={closeModal}
                className="text-[#6F0C15] hover:text-[#8a0f1d] text-2xl"
              >
                ×
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-6 text-[#1C1C1C]">
              {/* Icons Section */}
              <div className="flex flex-col items-center gap-3">
                {/* Top Image */}
                <Image
                  src="/icons/Picture-Container.png"
                  alt=""
                  width={80}
                  height={80}
                />

                {/* Bottom Row of 3 Images */}
                <div className="flex gap-3">
                  {icons.map((src, index) => (
                    <Image
                      key={index}
                      src={src}
                      alt=""
                      width={20}
                      height={20}
                    />
                  ))}
                </div>
                <div className="w-full h-[1px] mt-3 bg-gray-400"></div>
              </div>

              {/* Details Section */}
              <div className="space-y-3 text-sm">
                <div className="space-y-2">
                  {infoItems.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div className="flex items-center gap-1">
                        <Image src={item.icon} alt={item.label} width={18} height={18} />
                        <span className="text-gray-400">{item.label}</span>
                      </div>
                      <span>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className='font-medium text-[14px] leading-[20px] '>
                <p className='mb-2'>Tags
                  <span className='ml-3'>1</span>
                </p>
                <p>Add Note
                  <span className='ml-3'>+</span>
                </p>
                <input className="w-72 h-[40px] rounded-[15px] border-1 border-[#8F8F8F33] mt-4" type="text" />
              </div>
            </div>
            <div className='rounded-[15px] p-4 space-y-[10px]'>
              <div className="flex gap-6 p-3 rounded-md">
                <div className="bg-[#C39B9F] text-white px-4 py-1 rounded-full text-sm font-medium shadow flex items-center gap-2">
                  <span>Quality Review</span>
                  <button className="hover:text-gray-200 text-xs">×</button>
                </div>
                <div className="bg-[#C39B9F] text-white px-4 py-1 rounded-full text-sm font-medium shadow flex items-center gap-2">
                  <span>Follow Up</span>
                  <button className="hover:text-gray-200 text-xs">×</button>
                </div>
              </div>
              <div className="flex gap-[10px] px-3">
                <div className="bg-[#C39B9F] text-white px-4 py-1 rounded-full text-sm font-medium shadow flex items-center gap-2">
                  <span>Quality Review</span>
                  <button className="hover:text-gray-200 text-xs">×</button>
                </div>
              </div>
            </div>

            <div className='p-4'>
              <div className='bg-[#EFE4E5] shadow-xl rounded-xl p-3'>
                <div className="flex items-center justify-between w-full">
                  <p className='text-gray-400'>Call Recording 2025-10-5</p>
                  <Image src="/icons/modalIcons/flag-outline.png" alt="" width={12} height={14} />
                </div>
                <CustomAudioPlayer />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

'use client';

import Image from 'next/image';
import { Search, ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import CustomAudioPlayer from '../CustomAudioPlayer/CustomAudioPlayer';

const Topbar = () => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
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
    <header className="w-full h-[96px] bg-[#EFE4E5] shadow px-4 py-2 flex items-center justify-between relative z-20">
      {/* Left: Logo */}
      <Link href="/" className="flex items-center ml-8">
        <Image
          src="/images/logo.png"
          alt="Avetium"
          width={140}
          height={36}
          className="object-contain"
        />
      </Link>

      {/* Desktop Search */}
      <div className="hidden lg:flex items-center flex-1 max-w-[400px] mx-4">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search by Call ID, Agent, Phone #, Campaign..."
            className="pl-10 pr-4 py-2 w-full h-10 border border-[#d4a2aa] rounded-full text-sm outline-none bg-white text-[#6F0C15]"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-[#6F0C15]" />
        </div>
      </div>

      {/* Desktop Actions */}
      <div className="hidden lg:flex items-center gap-3 ml-auto">
        <button className="flex items-center gap-1 px-3 py-1 border border-[#6F0C15] font-medium rounded-full text-[#6F0C15] text-sm hover:bg-[#f5d5d9]">
          <Image src="/icons/reset.png" alt="Reset" width={16} height={16} />
          Reset Filters
        </button>

        <button className="flex items-center gap-1 px-3 py-1 border border-[#6F0C15] font-medium rounded-full text-[#6F0C15] text-sm hover:bg-[#f5d5d9]">
          <Image src="/icons/history.png" alt="History" width={16} height={16} />
          Export History
        </button>

        <button className="flex items-center gap-1 px-3 py-1 bg-[#6F0C15] text-white font-medium rounded-full text-sm hover:bg-[#8a0f1d]">
          <Image src="/icons/exp.png" alt="Export" width={16} height={16} />
          Export
        </button>

        {/* Notifications and User */}
        <button className="flex items-center gap-1 ml-4">
          <Image src="/icons/bell.png" alt="Notifications" width={16} height={16} />
          <span className="text-sm text-[#1C1C1C]">Notifications</span>
        </button>

        <div
          className="flex items-center gap-1 relative cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <Image
            src="/icons/Ellipse.png"
            alt="User"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-sm text-black">Jane F.</span>
          <ChevronDown className="text-black h-4 w-4" />
        </div>
      </div>

      {/* Mobile Buttons */}
      <div className="flex lg:hidden items-center gap-3 ml-auto">
        <button onClick={() => setShowMobileSearch(!showMobileSearch)}>
          <Search className="h-5 w-5 text-[#6F0C15]" />
        </button>

        <button onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <Menu className="h-6 w-6 text-[#6F0C15]" />
        </button>
      </div>

      {/* Mobile Search Dropdown */}
      {showMobileSearch && (
        <div className="absolute top-full left-0 right-0 bg-[#EFE4E5] p-4 z-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Search calls..."
              className="pl-10 pr-4 py-2 w-full border border-[#d4a2aa] rounded-xl text-sm outline-none bg-white text-[#6F0C15]"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-[#6F0C15]" />
          </div>
        </div>
      )}

      {/* Mobile Menu Dropdown */}
      {showMobileMenu && (
        <div className="absolute top-full right-2 mt-2 w-60 bg-white shadow-lg rounded-xl z-30 p-4 space-y-3">
          <button className="flex items-center gap-2 text-sm text-[#6F0C15] w-full">
            <Image src="/icons/reset.png" alt="Reset Filters" width={16} height={16} />
            Reset Filters
          </button>
          <button className="flex items-center gap-2 text-sm text-[#6F0C15] w-full">
            <Image src="/icons/history.png" alt="Export History" width={16} height={16} />
            Export History
          </button>
          <button className="flex items-center gap-2 text-sm bg-[#6F0C15] text-white px-3 py-1 rounded w-full justify-center">
            <Image src="/icons/exp.png" alt="Export" width={16} height={16} />
            Export
          </button>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="absolute right-0 top-full mt-2 w-[392] max-w-md bg-[#EFE4E5] rounded-lg border border-[#d4a2aa] z-50">
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
      )
      }
    </header >
  );
};

export default Topbar;
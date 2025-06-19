'use client';

import Image from 'next/image';
import { Search, ChevronDown, Menu } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react'
import ProfileMenu from '../ProfileMenu/ProfileMenu';

const Topbar = () => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);

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
    <header className="w-full h-16 bg-[#EFE4E5] shadow px-4 py-2 flex items-center justify-between relative z-20">
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
      <div className="hidden lg:flex items-center lg:ml-16 flex-1 max-w-[400px] mx-4">
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

      {isModalOpen && (
        <div className="absolute right-0 top-[100%] max-w-md rounded-2xl border border-[#d4a2aa] mx-6">
          <div className="border-b border-white relative">
            <ProfileMenu />
            <button
              onClick={closeModal}
              className="text-[#6F0C15] text-lg absolute top-0 right-0 px-5 pt-2"
            >
              x
            </button>
          </div>
        </div>
      )}
    </header >
  );
};

export default Topbar;
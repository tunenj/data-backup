"use client";

import Image from "next/image";
import { Search, ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const Topbar = () => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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
          <img src="/icons/reset.png" alt="Reset" className="w-4 h-4" />
          Reset Filters
        </button>

        <button className="flex items-center gap-1 px-3 py-1 border border-[#6F0C15] font-medium rounded-full text-[#6F0C15] text-sm hover:bg-[#f5d5d9]">
          <img src="/icons/history.png" alt="History" className="w-4 h-4" />
          Export History
        </button>

        <button className="flex items-center gap-1 px-3 py-1 bg-[#6F0C15] text-white font-medium rounded-full text-sm hover:bg-[#8a0f1d]">
          <img src="/icons/exp.png" alt="Export" className="w-4 h-4" />
          Export
        </button>

        {/* Notifications and User */}
        <button className="flex items-center gap-1 ml-4">
          <img src="/icons/bell.png" alt="Notifications" className="w-4 h-4" />
          <span className="text-sm text-[#1C1C1C]">Notifications</span>
        </button>

        <div className="flex items-center gap-1 cursor-pointer">
          <Image
            src="/icons/Ellipse.png"
            alt="User"
            width={32}
            height={32}
            className="rounded-full w-7 h-7"
          />
          <span className="text-sm text-black">Jane F.</span>
          <ChevronDown className="text-black h-4 w-4" />
        </div>
      </div>

      {/* Mobile Buttons */}
      <div className="flex lg:hidden items-center gap-3 ml-auto">
        {/* Mobile Search Icon */}
        <button onClick={() => setShowMobileSearch(!showMobileSearch)}>
          <Search className="h-5 w-5 text-[#6F0C15]" />
        </button>

        {/* Hamburger Menu */}
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
            <img src="/icons/reset.png" className="w-4 h-4" />
            Reset Filters
          </button>
          <button className="flex items-center gap-2 text-sm text-[#6F0C15] w-full">
            <img src="/icons/history.png" className="w-4 h-4" />
            Export History
          </button>
          <button className="flex items-center gap-2 text-sm bg-[#6F0C15] text-white px-3 py-1 rounded w-full justify-center">
            <img src="/icons/exp.png" className="w-4 h-4" />
            Export
          </button>
        </div>
      )}
    </header>
  );
};

export default Topbar;

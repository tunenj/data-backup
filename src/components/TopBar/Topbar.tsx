'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Search, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import AdvancedSearch from '../AdvancedSearch/AdvancedSearch';

const Topbar = () => {
  const [isAdvancedSearchOpen, setIsAdvancedSearchOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const closeModals = () => {
    setIsAdvancedSearchOpen(false);
    setIsProfileMenuOpen(false);
  };

  const handleSearchClick = () => {
    setIsAdvancedSearchOpen(true);
    setIsProfileMenuOpen(false);
  };

  const handleProfileMenuClick = () => {
    setIsProfileMenuOpen(true);
    setIsAdvancedSearchOpen(false);
  };

  return (
    <header className="w-full bg-[#EFE4E5] shadow px-4 py-2 flex flex-wrap items-center justify-between relative z-20">
      {/* Logo */}
      <Link href="/" className="flex items-center ml-4 mb-2 lg:mb-0">
        <Image
          src="/images/logo.png"
          alt="Avetium"
          width={140}
          height={36}
          className="object-contain"
        />
      </Link>

      {/* Search Bar */}
      <div className="flex-1 mx-4 mb-2 lg:ml-20 w-full sm:max-w-[400px]">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by Call ID, Agent, Phone #, Campaign..."
            className="pl-10 pr-4 py-2 w-full h-10 border border-[#d4a2aa] rounded-full text-sm outline-none bg-white text-[#6F0C15]"
            onClick={handleSearchClick}
            onChange={() => setIsAdvancedSearchOpen(true)}
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-[#6F0C15]" />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-2 ml-auto mb-2 lg:mr-4">
        <button className="flex items-center gap-1 px-3 py-1 border border-[#6F0C15] font-medium rounded-full text-[#6F0C15] text-sm sm:w-auto">
          <Image src="/icons/reset.png" alt="Reset" width={16} height={16} />
          Reset Filters
        </button>

        <button className="flex items-center gap-1 px-3 py-1 border border-[#6F0C15] font-medium rounded-full text-[#6F0C15] text-sm sm:w-auto">
          <Image src="/icons/history.png" alt="History" width={16} height={16} />
          Export History
        </button>

        <button className="flex items-center gap-1 px-3 py-1 bg-[#6F0C15] text-white font-medium rounded-full text-sm hover:bg-[#8a0f1d] sm:w-auto">
          <Image src="/icons/exp.png" alt="Export" width={16} height={16} />
          Export
        </button>
      </div>

      {/* User & Notifications */}
      <div className="flex items-center gap-4 cursor-pointer">
        <button className="p-2 flex items-center" aria-label="Notifications sm:right-0">
          <Image
            src="/icons/bell.png"
            alt="Notifications"
            width={16}
            height={16}
            className="w-4 h-4"
          />
          <span className="hidden md:inline ml-1 text-sm text-[#6F0C15]">Notifications</span>
        </button>
        <div className="flex items-center gap-1 pl-1"
          onClick={handleProfileMenuClick}
        >
          <Image
            src="/icons/Ellipse.png"
            alt="User"
            width={28}
            height={28}
            className="rounded-full w-7 h-7"
          />
          <span className="hidden lg:inline text-sm text-black">Jane F.</span>
          <ChevronDown className="hidden lg:inline text-black h-4 w-4" />
        </div>
      </div>

      {/* Advanced Search Modal */}
      {isAdvancedSearchOpen && (
        <div className="sm:w-full absolute top-[100%] max-w-md shadow-xl lg:rounded-2xl mx-auto left-0 lg:ml-64 mt-1 z-20">
          <div className="relative rounded-2xl">
            <AdvancedSearch />
          </div>
        </div>
      )}

      {/* Profile Menu Modal */}
      {isProfileMenuOpen && (
        <div className="absolute right-0 top-[100%] max-w-md shadow-2xl z-20 mx-4 mt-2">
          <div className="relative">
            <ProfileMenu />
            <button
              onClick={closeModals}
              className="text-[#6F0C15] text-lg absolute top-0 right-0 px-5 pt-2"
            >
              x
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Topbar;
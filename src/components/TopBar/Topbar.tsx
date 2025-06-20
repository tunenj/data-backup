'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Search, ChevronDown, Menu } from 'lucide-react';
import Link from 'next/link';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import AdvancedSearch from '../AdvancedSearch/AdvancedSearch';

const Topbar = () => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isAdvancedSearchOpen, setIsAdvancedSearchOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const closeModals = () => {
    setIsAdvancedSearchOpen(false);
    setIsProfileMenuOpen(false);
  };

  const handleSearchClick = () => {
    setIsAdvancedSearchOpen(true); // Open Advanced Search Modal
    setIsProfileMenuOpen(false); // Ensure Profile Menu is closed
  };

  const handleProfileMenuClick = () => {
    setIsProfileMenuOpen(true);
    setIsAdvancedSearchOpen(false); // Ensure Advanced Search is closed
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
            onClick={handleSearchClick} // Open modal when clicked
            onChange={() => setIsAdvancedSearchOpen(true)} // Open modal when typing
          />
          <Search
            className="absolute left-3 top-2.5 h-5 w-5 text-[#6F0C15]"
          />
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
      </div>
      <div className="flex items-center gap-4 relative cursor-pointer" onClick={handleProfileMenuClick}>
        <button className="p-2 flex items-center ml-10" aria-label="Notifications">
          <Image
            src="/icons/bell.png"
            alt="Notifications"
            width={16}
            height={16}
            className="w-4 h-4"
          />
          <span className="hidden md:inline ml-1 text-sm text-[#6F0C15]">Notifications</span>
        </button>
        <div className="flex items-center gap-1 cursor-pointer pl-1"
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

      {/* Advanced Search Modal */}
      {isAdvancedSearchOpen && (
        <div className="absolute top-[100%] max-w-md rounded-xl shadow-xl mx-60 z-20">
          <div className="relative">
            <AdvancedSearch />
          </div>
        </div>
      )}

      {/* Profile Menu Modal */}
      {isProfileMenuOpen && (
        <div className="absolute right-0 top-[100%] max-w-md shadow-2xl rounded-xl  mx-6 z-20">
          <div className="border-b border-white relative">
            <ProfileMenu />
            <button onClick={closeModals} className="text-[#6F0C15] text-lg absolute top-0 right-0 px-5 pt-2">
              x
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Topbar;

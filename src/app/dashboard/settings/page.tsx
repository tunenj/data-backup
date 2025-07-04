"use client";

import { useState } from "react";
import DashboardLayout from "@/app/dashboard/Export_Logs/layouts/DashboardLayout";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Search } from "lucide-react";
import Tabs from "../settings/Tabs/Tabs";
import UserTable from "@/components/SettingsComponents/UserTable";
import { users } from "@/constants/user";
import RolesPermissionsTable from "@/components/SettingsComponents/RolesPermissionsTable";
import { roles } from "@/constants/role";
import AuditFilterBar from "@/components/SettingsComponents/AuditFilterBar";
import DashboardMetrics from "@/components/SettingsComponents/DashboardMetrics";
import AuditLogTable from "@/components/SettingsComponents/AuditLogTable";
import { X } from "lucide-react";
import ProfileMenu from "@/components/ProfileMenu/ProfileMenu";

const ExportTopbar = ({ setIsModalOpen }: { setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>> }) => (
  <header className="w-full min-h-[4rem] md:h-16 flex flex-wrap items-center justify-between bg-[#EFE4E5] px-4 md:px-6 py-2 shadow relative">
    <Link href="/">
      <div className="flex items-center order-1 ml-14 lg:ml-8">
        <Image
          className="w-[120px] md:w-[180px]"
          src="/images/logo.png"
          alt="Avetium"
          width={180}
          height={46}
          priority
        />
      </div>
    </Link>
    <div className="flex">
      <button className="p-2 flex items-center" aria-label="Notifications">
        <Image src="/icons/bell.png" alt="Notifications" width={16} height={16} />
        <span className="hidden md:inline ml-1 text-sm">Notifications</span>
      </button>
      <div className="flex items-center gap-1 cursor-pointer pl-1"
        onClick={() => setIsModalOpen(true)}
      >
        <Image
          src="/icons/Ellipse.png"
          alt="User"
          width={32}
          height={32}
          className="rounded-full w-7 h-7"
        />
        <span className="hidden lg:inline text-sm text-black">Jane F.</span>
        <ChevronDown className="hidden lg:inline text-black h-4 w-4" />
      </div>
    </div>
  </header>
);

const SettingsPage = () => {
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
    <DashboardLayout topbar={<ExportTopbar setIsModalOpen={setIsModalOpen} />}>
      <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-4">
        <div className="flex items-center gap-2 lg:mt-8">
          <h1 className="text-xl sm:text-2xl font-bold text-[34px] leading-[40px]  text-gray-600 mb-6">Settings</h1>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 mt-2 lg:mt-0 lg:ml-auto text-sm sm:text-[15px] font-medium">
          <h2 className=" text-gray-600">Hodu CC</h2>
          <Image src="/icons/dot.png" alt="Dot" width={8} height={8} />
          <p className=" text-gray-600">Connected</p>
        </div>
      </div>

      <div className="flex gap-5 mb-6">
        <div className="relative lg:w-[47rem] lg:h-[40px]">
          <input
            type="text"
            placeholder="Search by Call ID, Agent, Phone #..."
            className="font-normal pl-10 pr-4 py-3 w-full h-10 border border-[#d4a2aa] rounded-md text-sm outline-none leading-5 bg-white text-[#6F0C15]"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-[#6F0C15]" />
        </div>

        <div className="flex items-center space-x-2 border border-[#d4a2aa] text-[#6F0C15] rounded-md px-4 py-2">
          <Image
            src="/icons/filter.png"
            alt="Filter"
            width={15}
            height={15}
            className="opacity-60"
          />
          <span className="text-sm font-medium">Filters</span>
          <Image
            src="/icons/DropDown.png"
            alt="Dropdown"
            width={11}
            height={5}
            className="opacity-60"
          />
          <button className="ml-2">
            <Image
              src="/icons/refresh.png"
              alt="Refresh"
              width={16}
              height={16}
            />
          </button>
        </div>
      </div>

      <Tabs />
      <UserTable users={users} />
      <RolesPermissionsTable roles={roles} />
      <AuditFilterBar />
      <DashboardMetrics />
      <AuditLogTable />
      {isModalOpen && (
        <>
          {/* Modal Backdrop */}
          {isModalOpen && (
            <div className="absolute right-0 top-[10%] max-w-md rounded-2xl shadow-xl mx-4">
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
        </>
      )}
    </DashboardLayout>
  );
};

export default SettingsPage;

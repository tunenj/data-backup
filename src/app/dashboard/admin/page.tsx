"use client";

import Image from "next/image";
import DashboardLayout from "@/app/layouts/DashboardLayout";
import DashboardStats from "@/components/DashboardStats/DashboardStats";
import RecentActivity from "@/components/RecentActivity/RecentActivity";
import StorageTrendsSection from "@/components/StorageTrendsSection/StorageTrendsSection";
import Tabs from "@/components/Tabs/Tabs";
import CallLogTable from "@/components/CallLogTable/CallLogTable";

const AdminDashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-4">
        {/* Welcome + Dropdown */}
        <div className="flex items-center gap-2">
          <h1 className="text-xl sm:text-2xl font-bold text-black">Welcome John</h1>
          <Image
            src="/icons/down.png"
            alt="Dropdown indicator"
            width={12}
            height={6}
            className="w-3 h-1.5"
          />
        </div>

        {/* Status - Active */}
        <div className="flex items-center gap-2 sm:ml-0 lg:ml-4">
          <Image
            src="/icons/dot.png"
            alt="Status dot"
            width={8}
            height={8}
          />
          <p className="text-sm sm:text-[15px] text-gray-600 font-medium">Active</p>
        </div>

        {/* Right-side connection status */}
        <div className="flex items-center gap-2 sm:gap-3 mt-2 lg:mt-0 lg:ml-auto text-sm sm:text-[15px] font-medium">
          <h2 className=" text-gray-600">Hodu CC</h2>
          <Image
            src="/icons/dot.png"
            alt="Dot"
            width={8}
            height={8}
          />
          <p className=" text-gray-600">Connected</p>
        </div>
      </div>

      {/* Tabs Component */}
      <div className="overflow-x-auto">
        <Tabs />
      </div>
      <DashboardStats />
      <StorageTrendsSection />
      <CallLogTable />
      <RecentActivity />
    </DashboardLayout>
  );
};

export default AdminDashboardPage;

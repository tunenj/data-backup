"use client";

import DashboardLayout from "@/app/dashboard/Export_Logs/layouts/DashboardLayout";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { ExportRecordsTable } from "@/components/ExporLogsComponent/ExportRecordsTable";
import FilterExportHistory from "@/components/ExporLogsComponent/ExportHistoryFilter";
import GroupUsers from "@/components/ExporLogsComponent/GroupUsers";
import Pagination from "@/components/Pagination/Pagination";

// topbar
const ExportTopbar = () => (
  <header className="w-full min-h-[4rem] md:h-[96px] flex flex-wrap items-center justify-between bg-[#EFE4E5] px-4 md:px-6 py-2 shadow relative">
    <Link href="/">
      <div className="flex items-center order-1 ml-14 lg:ml-8">
        <Image
          className="w-[120px] md:w-[180px]"
          src="/images/logo.png"
          alt="Avetium"
          width={180}
          height={46.02}
          priority
        />
      </div>
    </Link>
    <div className="flex">
      <button className="p-2 flex items-center" aria-label="Notifications">
        <img src="/icons/bell.png" alt="Notifications" className="w-4 h-4" />
        <span className="hidden md:inline ml-1 text-sm">Notifications</span>
      </button>
      <div className="flex items-center gap-1 cursor-pointer pl-1">
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

const ExportLogsPage = () => {
  // Example data for total items and items per page
  const totalExports = 30;
  const itemsPerPage = 10;

  // Optional: you can add state to track page and pass to ExportRecordsTable or filters

  return (
    <DashboardLayout topbar={<ExportTopbar />}>
      <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-4">
        <div className="flex items-center gap-2 lg:mt-8">
          <h1 className="text-xl sm:text-2xl font-bold text-[34px] leading-[40px] text-[#6F0C15]">Export Logs</h1>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 mt-2 lg:mt-0 lg:ml-auto text-sm sm:text-[15px] font-medium">
          <h2>Hodu CC</h2>
          <img src="/icons/dot.png" alt="Dot" />
          <p>Connected</p>
        </div>
      </div>
      <GroupUsers />
      <FilterExportHistory />
      <ExportRecordsTable />
      <Pagination totalItems={totalExports} itemsPerPage={itemsPerPage} />
    </DashboardLayout>
  );
};

export default ExportLogsPage;

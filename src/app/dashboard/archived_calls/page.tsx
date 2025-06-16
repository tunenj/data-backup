import DashboardLayout from "@/app/dashboard/Export_Logs/layouts/DashboardLayout";
import CallLogTable from "@/components/CallLogTable/CallLogTable";
import Image from "next/image";
import { Search, X } from "lucide-react";
import Pagination from "@/components/Pagination/Pagination";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import DateRangeSelector from "@/components/DateRangeAdmin/DateRangeSelector";
import CallLogsPage from "@/components/CallLogsPage/CallLogsPage";
import RecentActivity from "@/components/RecentActivity/RecentActivity";
import FilterBar from "@/components/FilterBar/FilterBar";


const ExportTopbar = () => (

  <header className="w-full min-h-[4rem] md:h-[6rem] flex flex-wrap items-center justify-between bg-[#EFE4E5] px-4 md:px-6 py-2 shadow relative">
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


const ArchivedCallsPage = () => {

  // Example data for total items and items per page
  const totalExports = 30;
  const itemsPerPage = 10;

  return (
    <DashboardLayout topbar={<ExportTopbar />}>
      <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-4">
        {/* Welcome + Dropdown */}
        <div className="flex items-center gap-2 mb-8 mt-4">
          <h1 className="text-xl sm:text-2xl font-bold text-black">Archived Calls</h1>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 mt-2 lg:mt-0 lg:ml-auto text-sm sm:text-[15px] font-medium">
          <h2>Hodu CC</h2>
          <img src="/icons/dot.png" alt="Dot" />
          <p>Connected</p>
        </div>
      </div>

      {/* Tabs Component */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <div className="relative w-full lg:w-[389px] lg:h-[40px]">
          <input
            type="text"
            placeholder="Search by Call ID, Agent, Phone #..."
            className="font-normal pl-10 pr-4 py-3 w-full h-10 border border-[#d4a2aa] rounded text-sm outline-none leading-5 bg-white text-[#6F0C15]"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-[#6F0C15]" />
        </div>

        <div className="flex items-center space-x-2 border-1 border-[#d4a2aa] text-[#6F0C15] rounded-md px-4 py-2">
          {/* Filter Icon */}
          <Image
            src="/icons/filter.png"
            alt="Filter"
            width={14.55}
            height={14.55}
            className="opacity-60"
          />

          {/* Label and Arrow Icon */}
          <span className="text-sm font-medium">Filters</span>
          <Image
            src="/icons/DropDown.png"
            alt="Dropdown"
            width={10.51}
            height={4.85}
            className="opacity-60"
          />

          {/* Refresh Button */}
          <button className="ml-2">
            <Image
              src="/icons/refresh.png"
              alt="Refresh"
              width={16}
              height={16}

            />
          </button>
        </div>

        <div className="ml-auto">
          <div className="min-w-[200px]">
            <DateRangeSelector />
          </div>
        </div>
      </div>
      <CallLogTable />
      <Pagination totalItems={totalExports} itemsPerPage={itemsPerPage} />
    </DashboardLayout>
  );
};

export default ArchivedCallsPage;

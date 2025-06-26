"use client";

import { useState } from "react";
import DashboardLayout from "@/app/dashboard/Export_Logs/layouts/DashboardLayout";
import CallLogTable from "@/components/CallLogTable/CallLogTable";
import Image from "next/image";
import { X } from "lucide-react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import ProfileMenu from "@/components/ProfileMenu/ProfileMenu";
import AlertsPage from "@/components/AlertsComponent/AlertsPage";
import FilterAlerts from "@/components/AlertsComponent/FilterAlerts";
import Pagination from "@/components/Pagination/Pagination";
import SystemAlertsTable from "@/components/AlertsComponent/SystemAlertsTable";

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
            <div
                className="flex items-center gap-1 cursor-pointer pl-1"
                onClick={() => setIsModalOpen(true)} // Modal opens here
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

const AlertPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const closeModal = () => setIsModalOpen(false);

    const totalExports = 30;
    const itemsPerPage = 10;

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
            <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-4 bg-white">
                <div className="items-center gap-2 mb-8 mt-4">
                    <h1 className="text-xl sm:text-2xl font-bold text-[#6F0C15]">Alerts</h1>
                    <p className="text-[#2E19149E]">Monitor system notifications and issues</p>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 mt-2 lg:mt-0 lg:ml-auto text-sm sm:text-[15px] font-medium">
                    <h2>Hodu CC</h2>
                    <Image src="/icons/dot.png" alt="Dot" width={8} height={8} />
                    <p>Connected</p>
                </div>
            </div>
            <AlertsPage />
            <FilterAlerts />
            <SystemAlertsTable />
            <Pagination totalItems={totalExports} itemsPerPage={itemsPerPage} />
            {isModalOpen && (
                <>
                    {/* Modal Backdrop */}
                    {isModalOpen && (
                        <div className="absolute right-0 top-[11%] max-w-md rounded-2xl shadow-xl mx-4">
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

export default AlertPage;

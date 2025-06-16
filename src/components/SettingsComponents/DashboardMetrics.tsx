"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const DashboardMetrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
      {/* Logins Over Time */}
      <div className="bg-white border border-[#6F0C15] rounded-xl p-4 shadow flex flex-col justify-between min-h-[200px]">
        <div>
          <h3 className="text-sm font-semibold text-[#6F0C15] mb-1">
            Logins Over Time (Last 30 Days)
          </h3>
          <div className="flex items-center">
            <p className="text-3xl font-bold">5.42K</p>
            <ArrowUpRight className="w-4 h-4 text-green-600 ml-2" />
            <span className="text-green-600 text-sm ml-1">22.41%</span>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <Image 
            src="/icons/login-icon.png" 
            alt="Logins chart"
            width={300}
            height={100}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Downloads Per User */}
      <div className="bg-white border rounded-xl p-4 flex flex-col justify-between min-h-[200px]">
        <div>
          <h3 className="text-sm font-semibold text-[#6F0C15] mb-1">
            Downloads Per User (This Week)
          </h3>
          <div className="flex items-center">
            <p className="text-3xl font-bold">5.42K</p>
            <ArrowUpRight className="w-4 h-4 text-green-600 ml-2" />
            <span className="text-green-600 text-sm ml-1">22.41%</span>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <Image 
            src="/icons/download-icon.png" 
            alt="Downloads chart"
            width={300}
            height={100}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Failed vs Successful */}
      <div className="bg-white border border-[#6F0C15] rounded-xl p-4 flex flex-col justify-between min-h-[200px]">
        <div>
          <h3 className="text-sm font-semibold text-[#6F0C15] mb-1">
            Failed vs Successful Actions (This Month)
          </h3>
          <p className="text-3xl font-bold">987.29</p>
        </div>
        <div className="flex justify-center mt-4">
          <Image 
            src="/icons/gauge-icon.png" 
            alt="Success gauge"
            width={200}
            height={100}
            className="w-[360px] h-[178px]"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardMetrics;
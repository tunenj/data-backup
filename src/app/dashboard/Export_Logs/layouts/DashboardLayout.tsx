"use client";

import Sidebar from "@/components/sidebar";
import React from "react";
import DefaultTopbar from "@/components/TopBar/Topbar"; // fallback topbar

interface DashboardLayoutProps {
  children: React.ReactNode;
  topbar?: React.ReactNode;
}


const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, topbar }) => {
  return (
    <div className="h-screen flex flex-col">
      {topbar ?? <DefaultTopbar />}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar role="admin" />
        <main className="flex-1 overflow-y-auto p-6 bg-[#fefcfc]">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

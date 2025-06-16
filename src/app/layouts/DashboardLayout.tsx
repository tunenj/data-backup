"use client";

import Sidebar from "@/components/sidebar";
import Topbar from "@/components/TopBar/Topbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex flex-col">
      <Topbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar role="admin" /> {/* Add role here */}
        <main className="flex-1 overflow-y-auto p-6 bg-[#fefcfc]">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

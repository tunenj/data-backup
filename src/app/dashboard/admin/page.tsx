"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import DashboardLayout from "@/app/layouts/DashboardLayout";
import DashboardStats from "@/components/DashboardStats/DashboardStats";
import RecentActivity from "@/components/RecentActivity/RecentActivity";
import StorageTrendsSection from "@/components/StorageTrendsSection/StorageTrendsSection";
import Tabs from "@/components/Tabs/Tabs";

const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()!.split(";").shift() || null;
  return null;
};

const AdminDashboardPage = () => {
  const router = useRouter();
  const [adminData, setAdminData] = useState({
    name: "Loading...",
    status: "Loading...",
    location: "Loading...",
    connectionStatus: "Loading..."
  });

  useEffect(() => {
    const fetchAdminData = async () => {
      const token = getCookie("accessToken");

      if (!token) {
        console.warn("Access token missing. Redirecting to login...");
        router.push("/login/AdminLogin");
        return;
      }

      try {
        const response = await fetch("https://avetiumbackupservice.avetiumconsult.com/api/auth/admin/", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error("Error fetching admin data:", response.status, errorText);
          if (response.status === 401 || response.status === 403) {
            router.push("/login/AdminLogin");
            return;
          }
          throw new Error("Failed to fetch admin data");
        }

        const data = await response.json();
        console.log("Admin data fetched:", data);

        setAdminData({
          name: `${data?.first_name || ""}`.trim() || "Admin",
          status: data?.is_logged_in ? "Active" : "Inactive",
          location: data?.organization?.state || "HoduCC",
          connectionStatus: data?.is_logged_in ? "Connected" : "Disconnected"
        });
      } catch (error) {
        console.error("Error fetching admin data:", error);
        setAdminData({
          name: "Admin",
          status: "Active",
          location: "Unavailable",
          connectionStatus: "Disconnected"
        });
      }
    };

    fetchAdminData();
  }, [router]);

  return (
    <DashboardLayout>
      <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-4">
        <div className="flex items-center gap-2">
          <h1 className="text-xl sm:text-2xl font-bold text-black">
            Welcome {adminData.name}
          </h1>
          <Image
            src="/icons/down.png"
            alt="Dropdown indicator"
            width={12}
            height={6}
            className="w-3 h-1.5"
          />
        </div>

        <div className="flex items-center gap-2 sm:ml-0 lg:ml-4">
          <Image src="/icons/dot.png" alt="Status dot" width={8} height={8} />
          <p className="text-sm sm:text-[15px] text-gray-600 font-medium">
            {adminData.status}
          </p>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 mt-2 lg:mt-0 lg:ml-auto text-sm sm:text-[15px] font-medium">
          <h2 className="text-gray-600">{adminData.location}</h2>
          <Image src="/icons/dot.png" alt="Dot" width={8} height={8} />
          <p className="text-gray-600">{adminData.connectionStatus}</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Tabs />
      </div>
      <DashboardStats />
      <StorageTrendsSection />
      <RecentActivity />
    </DashboardLayout>
  );
};

export default AdminDashboardPage;

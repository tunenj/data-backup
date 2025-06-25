'use client';

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Cookies from "js-cookie";

type SidebarProps = {
  role: 'admin' | 'agent';
};

const Sidebar: React.FC<SidebarProps> = ({ role }) => {
  const path = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", icon: "/icons/dashboard.png" },
    { name: "Archived Calls", path: "/dashboard/archived_calls", icon: "/icons/archive.png" },
    { name: "Export Logs", path: "/dashboard/Export_Logs", icon: "/icons/export.png" },
    { name: "Alerts", path: "/dashboard/alerts", icon: "/icons/alert.png" },
    { name: "Settings", path: "/dashboard/settings", icon: "/icons/settings.png" },
  ];

  const handleDashboardClick = () => {
    // If already on the Dashboard page, do nothing
    if (path.includes("/dashboard/admin") || path.includes("/dashboard/agent")) {
      return;
    }

    const response = window.prompt("Go to 'Admin' or 'Agent' dashboard?");
    if (response?.toLowerCase() === "admin") {
      Cookies.set("role", "admin");
      router.push("/dashboard/admin");
    } else if (response?.toLowerCase() === "agent") {
      Cookies.set("role", "agent");
      router.push("/dashboard/agent");
    } else {
      alert("Invalid choice. Please type 'admin' or 'agent'.");
    }
  };

  const handleLogout = async () => {
    const accessToken = Cookies.get("accessToken");
    const refreshToken = Cookies.get("refreshToken");

    if (!accessToken || !refreshToken) {
      console.warn("Missing token(s). Redirecting to login.");
      router.push("/login/AdminLogin");
      return;
    }

    try {
      console.log("Logging out with refresh token:", refreshToken);

      const response = await fetch("https://avetiumbackupservice.avetiumconsult.com/api/auth/logout/", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ refresh: refreshToken })
      });

      const text = await response.text();
      console.log("Logout response:", text);

      if (response.ok) {
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
        Cookies.remove("sessionToken");
        Cookies.remove("role");

        router.push("/login/AdminLogin");
      } else {
        alert("Logout failed.");
      }
    } catch (error) {
      console.error("Logout error:", error);
      alert("Network error during logout.");
    }
  };

  return (
    <>
      <div className="md:hidden fixed top-4 left-4 z-50 mt-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#6F0C15] text-white p-2 rounded"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-full w-[15rem] lg:mt-2 bg-white rounded-tr-xl text-[#6F0C15] flex flex-col transform transition-transform duration-300 ease-in-out 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:flex`}
        style={{ boxShadow: "2px 2px 33.8px 0px #6F0C154D inset" }}
      >
        <nav className="flex flex-col font-medium gap-4 px-4 mt-10">
          {navItems.map((item) => {
            const isDashboard = item.name === "Dashboard";
            const isActive = isDashboard
              ? path.includes("/dashboard/admin") || path.includes("/dashboard/agent")
              : path === item.path;

            const baseClass = `flex items-center gap-3 py-4 px-3 pl-8 rounded-lg transition ${isActive ? "bg-[#6F0C15] text-white font-bold" : "hover:bg-[#f4d6d8] text-[#6F0C15]"}`;

            return isDashboard ? (
              <button
                key={item.name}
                onClick={() => {
                  setIsOpen(false);
                  handleDashboardClick();
                }}
                className={baseClass}
              >
                <Image
                  src={item.icon}
                  alt={`${item.name} icon`}
                  width={20}
                  height={20}
                  className="object-contain"
                />
                {item.name}
              </button>
            ) : (
              <Link
                key={item.path}
                href={item.path!}
                className={baseClass}
                onClick={() => setIsOpen(false)}
              >
                <Image
                  src={item.icon}
                  alt={`${item.name} icon`}
                  width={20}
                  height={20}
                  className={`object-contain ${isActive ? "filter invert" : ""}`}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto px-4 py-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-[#6F0C154D] text-[#6F0C15] py-2 hover:text-white transition cursor-pointer"
          >
            <Image
              src="/icons/logout.png"
              alt="Logout icon"
              width={16}
              height={16}
              className="object-contain"
            />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

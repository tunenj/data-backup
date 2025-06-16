import DashboardLayout from "@/app/layouts/DashboardLayout";
import CallLogsPage from "@/components/CallLogsPage/CallLogsPage";
import DashboardStats from "@/components/DashboardStats/DashboardStats";
import RecentActivity from "@/components/RecentActivity/RecentActivity";
import Tabs from "@/components/Tabs/Tabs";




const AgentDashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-4">
        {/* Welcome + Dropdown */}
        <div className="flex items-center gap-2">
          <h1 className="text-xl sm:text-2xl font-bold text-black">Welcome John</h1>
          <img className="w-3 h-1.5" src="/icons/down.png" alt="Dropdown indicator" />
        </div>

        {/* Status - Active */}
        <div className="flex items-center gap-2 sm:ml-0 lg:ml-4">
          <img src="/icons/dot.png" alt="Status dot" />
          <p className="text-sm sm:text-[15px] font-medium">Active</p>
        </div>

        {/* Connection status */}
        <div className="flex items-center gap-2 sm:gap-3 mt-2 lg:mt-0 lg:ml-auto text-sm sm:text-[15px] font-medium">
          <h2>Hodu CC</h2>
          <img src="/icons/dot.png" alt="Dot" />
          <p>Connected</p>
        </div>
      </div>

      {/* Tabs Component */}
      <div className="overflow-x-auto">
        <Tabs />
      </div>

      <DashboardStats />
      <CallLogsPage />
      <RecentActivity />
    </DashboardLayout>
  );
};

export default AgentDashboardPage;

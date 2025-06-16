import StatsCard from '@/components/StatsCard/StatsCard';

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
      <StatsCard
        title="Total Calls Archived"
        value="1,234,567"
        subtext="+5% vs. last month"
        active
      />
      <StatsCard
        title="Last Upload Date"
        value="2023-10-14"
        subtext="Completed 5 hrs ago"
      />
      <StatsCard
        title="Storage Used"
        value="200 GB"
        footer="200 GB of 500 GB"
      />
      <StatsCard
        title="Pending Flags"
        value="12"
        footer="12 Issues"
      />
    </div>
  );
}

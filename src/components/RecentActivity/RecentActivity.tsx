import Image from "next/image";
import { activities } from "@/constants/Activity";

const RecentActivity = () => {
  return (
    <div className="bg-[#6F0C15] p-4 text-white rounded-r-lg w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-[20px] leading-[24px] tracking-[-0.025em]">Recent Activity</h2>
        <button className="bg-white text-[#6F0C15] px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-100">
          View All
        </button>
      </div>

      <ul className="space-y-4">
        {activities.map((activity) => (
          <li key={activity.id} className="flex items-start space-x-3">
            <Image className="mt-3.5" src={activity.icon} alt={activity.status} width={24} height={24} />
            <div>
              <p className="text-sm font-normal text-[13px] leading-[16px]">{activity.status}</p>
              <p className="text-sm font-semibold text-[16px] leading-[16px] lg:mt-2">{activity.title}</p>
              <p className="font-normal text-[13px] leading-[16px]">{activity.subtitle}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;

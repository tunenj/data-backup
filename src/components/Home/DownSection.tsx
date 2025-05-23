import { colors } from "@/utils/colors";

export default function DowntimeSection() {
  return (
    <div className="text-right px-4 sm:px-8 md:px-12 lg:px-20">
      <div
        className="font-poppins font-bold text-[28px] sm:text-[32px] lg:mb-6 md:text-[40px] lg:text-[48px] leading-[100%]"
        style={{ color: colors.primary }}
      >
        Downtime?
      </div>

      <div className="text-[20px] sm:text-[24px] md:text-[28px] font-bold mb-2 max-w-lg">
        <p style={{ color: colors.primary }}>
          Not on our watch. Restore files, apps, or entire systems in minutes—not hours.
        </p>
      </div>

      <div
        className="text-sm font-poppins font-normal text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[1.4] tracking-[0%] text-right mb-6 mt-2"
        style={{ color: colors.primary }}
      >
        Solid, secure, scalable data resilience for SaaS, servers, and endpoints.
        Whether you backup to the cloud, your Azure instance, a local destination,
        or a third-party cloud, CrashPlan monitors it all and gives you peace of mind.
      </div>

      <div className="text-center">
        <button
          className="text-white font-semibold text-center mx-auto py-2 sm:py-3 md:py-4 px-8 sm:px-16 md:px-32 lg:px-46 lg:mt-22 rounded-md mb-10 md:mb-20"
          style={{ backgroundColor: colors.primary }}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

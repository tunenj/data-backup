import { colors } from "@/utils/colors";

export default function FeatureTabs() {
  return (
    <div className="flex flex-col items-center mb-8 gap-6 px-4 sm:px-2">
      <h1
        className="font-poppins font-bold text-[32px] sm:text-[40px] md:text-[48px] leading-[100%] tracking-normal text-center"
        style={{ color: colors.primary }}
      >
        Why Choose Us?
      </h1>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-20 flex-wrap">
        <button
          className="text-white font-normal py-3 px-10 sm:px-14 rounded-md shadow-sm"
          style={{ backgroundColor: colors.primary }}
        >
          Instant Recovery
        </button>
        <button
          className="font-normal py-3 px-10 sm:px-6 rounded-md text-center"
          style={{ color: colors.primary }}
        >
          Smart Automation
        </button>
        <button
          className="font-normal py-3 px-10 sm:px-6 rounded-md text-center"
          style={{ color: colors.primary }}
        >
          End-to-End Encryption
        </button>
      </div>
    </div>
  );
}


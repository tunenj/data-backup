"use client"

import { useState } from "react";
import { colors } from "@/utils/colors";

export default function FeatureTabs() {
  const [activeButton, setActiveButton] = useState<string>("instantRecovery");

  const handleButtonClick = (buttonName: string): void => {
    setActiveButton(buttonName);
  };

  return (
    <div className="bg-white flex flex-col items-center mb-8 gap-6 px-4 sm:px-2">
      <h1
        className="font-poppins font-bold text-[32px] sm:text-[40px] md:text-[48px] leading-[100%] tracking-normal text-center"
        style={{ color: colors.primary }}
      >
        Why Choose Us?
      </h1>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-20 flex-wrap">
        <button
          className={`font-normal py-3 px-10 sm:px-14 rounded-md shadow-sm ${activeButton === "instantRecovery" ? "text-white" : "text-[#6F0C15] "
            }`}
          style={{
            backgroundColor:
              activeButton === "instantRecovery" ? colors.primary : "transparent",
            border: activeButton === "instantRecovery" ? `2px solid ${colors.primary}` : "2px solid #ccc",
          }}
          onClick={() => handleButtonClick("instantRecovery")}
        >
          Instant Recovery
        </button>

        <button
          className={`font-normal py-3 px-10 sm:px-6 rounded-md text-center ${activeButton === "smartAutomation" ? "text-white" : "text-[#6F0C15]"
            }`}
          style={{
            backgroundColor:
              activeButton === "smartAutomation" ? colors.primary : "transparent",
            border: activeButton === "smartAutomation" ? `2px solid ${colors.primary}` : "2px solid #ccc",
          }}
          onClick={() => handleButtonClick("smartAutomation")}
        >
          Smart Automation
        </button>

        <button
          className={`font-normal py-3 px-10 sm:px-6 rounded-md text-center ${activeButton === "endToEndEncryption" ? "text-white" : "text-[#6F0C15] "
            }`}
          style={{
            backgroundColor:
              activeButton === "endToEndEncryption" ? colors.primary : "transparent",
            border: activeButton === "endToEndEncryption" ? `2px solid ${colors.primary}` : "2px solid #ccc",
          }}
          onClick={() => handleButtonClick("endToEndEncryption")}
        >
          End-to-End Encryption
        </button>
      </div>
    </div>
  );
}

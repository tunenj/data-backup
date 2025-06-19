import Image from "next/image";
import logomark from '../../../public/icons/logomark.png';
import { colors } from "@/utils/colors";

const teams = [
  "DataCloud",
  "CloudSafe",
  "SecureHive",
  "VaultTech",
  "ShieldCloud",
  "BackupSecure",
  "SafeNet",
  "Protectify",
];

export default function TrustedTeams() {
  return (
    <div className="bg-white text-center lg:mt-12">
      <div
        className="font-semibold mb-2 text-xl md:text-3xl"
        style={{ color: colors.primary }}
      >
        Trusted by forward-thinking teams at:
      </div>

      <div
        className="flex flex-col items-center font-medium text-base px-6 sm:px-10 mt-10 lg:mb-14"
        style={{ color: colors.primary }}
      >
        {/* Top row: 3 cols on mobile, 5 on desktop */}
        <div
          className="
            grid
            grid-cols-3
            lg:grid-cols-5
            gap-x-2
            gap-y-1
            justify-items-center
            w-full
            max-w-md
            lg:max-w-3xl
          "
        >
          {teams.slice(0, 5).map((team) => (
            <span key={team} className="flex items-center gap-1">
              <Image
                src={logomark}
                alt="icon"
                width={16}
                height={16}
                className="inline-block"
              />
              {team}
            </span>
          ))}
        </div>

        {/* Bottom row: 3 cols on mobile, 3 on desktop */}
        <div
          className="
            grid
            grid-cols-3
            lg:grid-cols-3
            gap-x-2
            gap-y-1
            justify-items-center
            mt-4
            w-full
            max-w-md
            lg:max-w-2xl
          "
        >
          {teams.slice(5).map((team) => (
            <span key={team} className="flex items-center gap-1">
              <Image
                src={logomark}
                alt="icon"
                width={16}
                height={16}
                className="inline-block"
              />
              {team}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

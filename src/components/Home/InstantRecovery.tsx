import Image from 'next/image';
import { colors } from '@/utils/colors';

export default function InstantRecovery({ snippet = "/images/snippet.png" }) {
  return (
    <div
      className="rounded-none md:rounded-r-2xl p-4 md:p-6 w-full h-100 md:w-[45rem] md:h-[36rem]"
      style={{ backgroundColor: colors.secondary }}
    >
      <div className="font-poppins font-semibold text-[20px] sm:text-[22px] md:text-[28px] leading-[28px] sm:leading-[30px] md:leading-[32px] tracking-[-0.02em] pl-2 sm:pl-6 md:pl-24">
        Instant Recovery
      </div>
      <div className="font-poppins font-normal text-[14px] sm:text-[16px] md:text-[20px] leading-[20px] sm:leading-[22px] md:leading-[24px] tracking-normal pl-2 sm:pl-6 md:pl-24">
        Never wait for slow, arduous, immutable backups.
      </div>
      <div className="relative h-40 w-full mt-44 md:mt-84 lg:mt-84">
        <Image
          src={snippet}
          alt="Avetium Technologies"
          width={1400}
          height={40}
          priority
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
        />
      </div>
    </div>
  );
}

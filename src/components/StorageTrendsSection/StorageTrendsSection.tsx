import Image from "next/image";
import DateRangeSelector from '@/components/DateRangeAdmin/DateRangeSelector';

export default function StorageTrendsSection() {
  return (
    <div className="flex flex-col lg:mb-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6 lg:mt-12">
        <h2 className="text-lg font-bold text-black">Storage Trends</h2>
        <DateRangeSelector />
      </div>

      <div className="relative w-full h-auto lg:mt-7">
        <Image
          src="/images/Table.png"
          alt="Storage Trends Table"
          width={1104}
          height={512}
          layout="responsive"
          objectFit="contain"
        />
      </div>
    </div>
  );
}

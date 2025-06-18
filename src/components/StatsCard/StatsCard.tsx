'use client';

import Image from 'next/image';

interface StatsCardProps {
  title: string;
  value: string;
  subtext?: string;
  footer?: string;
  active?: boolean;
  icon?: string; // path to image
}

export default function StatsCard({ title, value, subtext, footer, active }: StatsCardProps) {
  return (
    <div
      className={`flex-1 rounded-xl p-4 shadow-sm border transition-colors duration-200 
        ${active ? 'bg-[#6F0C15] text-white lg:mt-6' : 'bg-white border-[#6F0C15] border-2 text-[#6F0C15] lg:mt-6'}`}
    >
      <div className="flex justify-between items-start">
        <div>
          <h4 className="text-sm font-medium">{title}</h4>
          <h2 className="text-2xl font-bold mt-1">{value}</h2>
        </div>
        <div className="text-xl font-bold">...</div>
      </div>

      {/* Placeholder for chart */}
      <div className="h-[54.84px] my-3 w-full rounded text-[#6F0C15] relative">
        <Image
          src={active ? "/icons/fill.png" : "/icons/fill2.png"}
          alt="Chart"
          layout="fill"
          objectFit="cover"
          className="rounded"
        />
      </div>

      {subtext && (
        <p className="text-xs text-[#FF5733]">
          {subtext}
        </p>
      )}
      {footer && (
        <p className="text-xs mt-1 text-[#FF5733]">
          {footer}
        </p>
      )}
    </div>
  );
}

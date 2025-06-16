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
      className={`flex-1 rounded-xl p-4  lg:mt-6 shadow-sm border transition-colors duration-200 
        ${active ? 'bg-[#6F0C15] text-white' : 'bg-white border-[#6F0C15] border-2 text-[#6F0C15] lg:mt-6'}`}
    >
      <div className="flex justify-between items-start">
        <div>
          <h4 className="text-sm font-medium">{title}</h4>
          <h2 className="text-2xl font-bold mt-1">{value}</h2>
        </div>
        <div className="text-xl font-bold">...</div>
      </div>

      {/* Placeholder for chart */}
      {!active ? (
        <div className="h-[54.84px] my-3 w-full rounded bg-white text-[#6F0C15]">
          <img
            src="/icons/fill2.png"
            alt="Chart"
            className="h-full w-full object-cover rounded"
          />
        </div>
      ) : (
        <img
          src="/icons/fill.png"
          alt="Chart"
          className="h-[54.84px] my-3 w-full object-cover rounded"
        />
      )}

      {subtext && (
        <p className={`text-xs ${active ? 'text-[#FF5733]' : 'text-[#FF5733]'}`}>
          {subtext}
        </p>
      )}
      {footer && (
        <p className={`text-xs mt-1 ${active ? 'text-[#FF5733]' : 'text-[#FF5733]'}`}>
          {footer}
        </p>
      )}
    </div>
  );
}

import Image from 'next/image';


const filters = [
  {
    label: 'Date Range',
    type: 'date',
    defaultValue: '2025-05-01',
    key: 'startDate',
  },
  {
    label: 'End Date',
    type: 'date',
    defaultValue: '2025-06-01',
    key: 'endDate',
  },
  {
    label: 'User',
    type: 'select',
    options: ['All users'], // Add real user options here
    key: 'user',
  },
  {
    label: 'Status',
    type: 'select',
    options: ['All Statuses'], // Add real status options here
    key: 'status',
  },
];

export const FilterControls = () => {
  return (
    <div className="w-full p-6 bg-[#6F0C15] rounded-md">
      <h2 className="text-white font-medium text-[28px] leading-[40px] mb-5">Filter Export History</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        {filters.map(({ label, type, defaultValue, options, key }) => (
          <div key={key}>
            <label className="block text-white text-sm mb-2">{label}</label>
            {type === 'select' ? (
              <select className="w-full px-3 py-2 rounded-md border bg-white text-sm text-[#6F0C15]">
                {options?.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={type}
                className="w-full px-3 py-2 rounded-md border bg-white border-gray-300 text-sm text-[#6F0C15]"
                defaultValue={defaultValue}
              />
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-3 lg:mt-12">
        <button className="flex items-center px-4 py-2 text-sm font-medium text-white border border-white rounded-md hover:bg-white hover:text-[#6F0C15] transition">
          <Image src="/icons/refresh.png" alt="Reset" width={16} height={16} className="mr-2 filter brightness-[200%] contrast-0"/>
          Reset Filters
        </button>
        <button className="flex items-center px-4 py-2 text-sm font-medium bg-white text-[#6F0C15] rounded-md hover:opacity-90 transition">
          <Image src="/icons/search.png" alt="Search" width={16} height={16} className="mr-2" />
          Search
        </button>
      </div>
    </div>
  );
};

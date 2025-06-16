'use client';

import { useState } from 'react';

export default function Tabs() {
  const tabs: string[] = ['Overview', 'Active Calls', 'Recent Activity'];
  const [active, setActive] = useState<string>('Overview');

  return (
    <div className="flex items-center border-b border-gray-200 relative">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer ${
            active === tab
              ? 'text-orange-600 border-b-2 border-orange-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

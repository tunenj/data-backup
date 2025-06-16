'use client';

import { useState } from 'react';

const options = ['Last 30 days', '6 months', '1 year'];

export default function DateRangeSelector() {
  const [selected, setSelected] = useState('Last 30 days');

  return (
    <div className="flex border border-gray-300 rounded-lg overflow-hidden text-sm">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => setSelected(option)}
          className={`px-3 py-1 transition-colors duration-200 ${
            selected === option
              ? 'bg-[#9B5F68] text-white'
              : 'text-[#9B5F68] bg-white hover:bg-gray-100'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

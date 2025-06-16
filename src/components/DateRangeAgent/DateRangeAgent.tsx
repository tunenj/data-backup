'use client';

import { useState } from 'react';

const options = ['Today', 'Weekly', 'Monthly', 'Yearly'];

export default function DateRangeSelector() {
  const [selected, setSelected] = useState('Today');


  return (
    <div className="flex border-1 border-gray-300 rounded-lg overflow-hidden text-sm">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => setSelected(option)}
          className={`px-2.5 py-2.5 transition-colors duration-200 ${
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

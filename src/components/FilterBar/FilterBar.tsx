"use client";

import React from 'react';
import { Search, X } from "lucide-react";
import DateRangeSelector from '../DateRangeAgent/DateRangeAgent';
import Image from "next/image";
import { useState } from "react";


export default function FilterBar() {
    const [isRotating, setIsRotating] = useState(false);
    const handleRefresh = () => {
        setIsRotating(true);
        setTimeout(() => setIsRotating(false), 1000);
    };

    // This can later be replaced with api
    const [filters, setFilters] = useState([
        "Agent Name: Andi Lane",
        "Hungup By: Agent",
        "Campaign: Email",
    ]);

    const removeFilter = (index: number) => {
        setFilters(prev => prev.filter((_, i) => i !== index));
    };


    return (
        <div className="mb-4 space-y-4 bg-[#EFE4E5] mt-8">
            {/* Top row: Search + Filter Button + Date Range */}
            <div className="flex flex-wrap items-center gap-4">
                <div className="relative w-full lg:w-[389px] lg:h-[40px]">
                    <input
                        type="text"
                        placeholder="Search by Call ID, Agent, Phone #..."
                        className="font-normal pl-10 pr-4 py-3 w-full h-10 border border-[#d4a2aa] rounded text-sm outline-none leading-5 bg-white text-[#6F0C15]"
                    />
                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-[#6F0C15]" />
                </div>

                <div className="flex items-center space-x-2 border-1 border-[#d4a2aa] text-[#6F0C15] rounded-md px-4 py-2">
                    {/* Filter Icon */}
                    <Image
                        src="/icons/filter.png"
                        alt="Filter"
                        width={14.55}
                        height={14.55}
                        className="opacity-60"
                    />

                    {/* Label and Arrow Icon */}
                    <span className="text-sm font-medium">Filters</span>
                    <Image
                        src="/icons/DropDown.png"
                        alt="Dropdown"
                        width={10.51}
                        height={4.85}
                        className="opacity-60"
                    />

                    {/* Refresh Button */}
                    <button onClick={handleRefresh} className="ml-2">
                        <Image
                            src="/icons/refresh.png"
                            alt="Refresh"
                            width={16}
                            height={16}
                            className={`transition-transform duration-500 ${isRotating ? "rotate-[360deg]" : ""
                                }`}
                        />
                    </button>
                </div>

                <div className="ml-auto">
                    <div className="min-w-[200px]">
                        <DateRangeSelector />
                    </div>
                </div>
            </div>

            {/* Bottom row: Select dropdowns */}
            <div className="flex flex-wrap items-center gap-5 mb-7">
                <select className="select select-bordered bg-[#6F0C15] rounded-md border-none focus:outline-none focus:ring-0 text-white px-3 py-2 pr-1.5">
                    <option>Date Range</option>
                    <option>Today</option>
                    <option>This Week</option>
                </select>

                <div className="flex flex-wrap gap-5">
                    {filters.map((filter, index) => (
                        <div
                            key={index}
                            className="flex items-center bg-white rounded-md px-3 py-2 text-sm"
                        >
                            {filter}
                            <button
                                onClick={() => removeFilter(index)}
                                className="ml-2"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

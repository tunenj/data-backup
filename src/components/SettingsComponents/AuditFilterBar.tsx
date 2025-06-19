"use client";

import React, { useState } from 'react';
import { Download, RotateCcw, Search } from 'lucide-react';

const AuditFilterBar: React.FC = () => {
  const [filters, setFilters] = useState({
    dateRange: 'Last 30 days',
    user: '',
    actionType: '',
    result: '',
  });

  const handleReset = () => {
    setFilters({ dateRange: 'Last 30 days', user: '', actionType: '', result: '' });
  };

  const handleSearch = () => {
    console.log("Search filters:", filters);
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 space-y-4">
      {/* Header row */}
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-[20px] text-gray-600 lg:text-[24px]">Audit Trail & Activity Monitor</h2>
        <button className="flex items-center gap-2 bg-[#6F0C15] text-white px-4 py-2 rounded-md text-sm">
          <Download className="w-4 h-4" />
          Download CSV
        </button>
      </div>

      {/* Filters with labels */}
      <div className="flex flex-wrap gap-4 items-end">
        {/* Date Range */}
        <div className="flex flex-col">
          <label className="text-sm font-medium  text-gray-600 mb-1">Date Range</label>
          <select
            className="bg-[#F9EDED] text-sm px-10 py-3 rounded-md outline-none"
            value={filters.dateRange}
            onChange={(e) => setFilters({ ...filters, dateRange: e.target.value })}
          >
            <option>Last 30 days</option>
            <option>Last 7 days</option>
            <option>Today</option>
          </select>
        </div>

        {/* User */}
        <div className="flex flex-col">
          <label className="text-sm font-medium  text-gray-600 mb-1">User</label>
          <select
            className="bg-[#F9EDED] text-sm px-6 py-3 rounded-md outline-none"
            value={filters.user}
            onChange={(e) => setFilters({ ...filters, user: e.target.value })}
          >
            <option value="">Select User</option>
            <option value="jane">Jane Foster (Admin)</option>
          </select>
        </div>

        {/* Action Type */}
        <div className="flex flex-col">
          <label className="text-sm font-medium  text-gray-600 mb-1">Action Type</label>
          <select
            className="bg-[#F9EDED] text-sm px-6 py-3 rounded-md outline-none"
            value={filters.actionType}
            onChange={(e) => setFilters({ ...filters, actionType: e.target.value })}
          >
            <option value="">Action Type</option>
            <option value="export">Export</option>
            <option value="login">Login</option>
          </select>
        </div>

        {/* Result */}
        <div className="flex flex-col">
          <label className="text-sm font-medium  text-gray-600 mb-1">Result</label>
          <select
            className="bg-[#F9EDED] text-sm px-6 py-3 rounded-md outline-none"
            value={filters.result}
            onChange={(e) => setFilters({ ...filters, result: e.target.value })}
          >
            <option value="">Result</option>
            <option value="success">Success</option>
            <option value="failure">Failure</option>
          </select>
        </div>

        {/* Reset Filters Button */}
        <div className="flex flex-col">
          <label className="invisible">Reset</label>
          <button
            onClick={handleReset}
            className="flex items-center gap-1 px-6 py-2 border border-[#6F0C15] text-[#6F0C15] rounded-md text-sm"
          >
            <RotateCcw className="w-4 h-3" />
            Reset filters
          </button>
        </div>
      </div>

      {/* Search Button Row */}
      <div>
        <button
          onClick={handleSearch}
          className="flex items-center gap-2 bg-[#6F0C15] text-white px-14 py-2 rounded-md text-sm mt-2"
        >
          <Search className="w-4 h-4" />
          Search
        </button>
      </div>
    </div>
  );
};

export default AuditFilterBar;

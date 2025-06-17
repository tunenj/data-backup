'use client';
import React from 'react';
import { FilterControls } from './FilterControls';

const FilterExportHistory: React.FC = () => {
  const stats = {
    totalExports: 125,
    success: {
      successCount: 120,
      failedCount: 5,
      rate: '96%',
    },
    lastExport: {
      dateTime: 'May 1, 10:45 AM',
      by: 'Jane Foster',
    },
  };

  return (
    <div className="bg-white rounded-lg shadow lg:mt-3">
      {/* Header & Filter */}
      <div className="mb-6 bg-[#6F0C15] p-4 rounded-md">
        <FilterControls />
      </div>

      {/* Pagination Summary */}
      <div className="text-sm text-gray-500">
        Showing <span className="font-medium">1-5</span> of <span className="font-medium">5</span> entries
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Total Exports */}
        <div className="border border-[#6F0C15] rounded-md p-4">
          <h4 className="text-sm text-[#6F0C15] font-medium text-[20px] leading-[18px] mb-4">Total Exports</h4>
          <p className="text-xl font-bold text-[#6F0C15]">{stats.totalExports}</p>
          <p className="text-xs text-[#6F0C15] mt-3">+10% vs Last month</p>
        </div>

        {/* Success Rate */}
        <div className="border border-[#6F0C15]/40 rounded-md p-4">
          <h4 className="text-sm text-[#6F0C15] font-medium text-[20px] leading-[18px] mb-4">Success Rate</h4>
          <p className="text-xl font-bold text-[#6F0C15]">
            {stats.success.successCount}/{stats.success.failedCount}
          </p>
          <p className="text-xs text-[#6F0C15] mt-3">{stats.success.rate} Success rate</p>
        </div>

        {/* Last Export */}
        <div className="border border-[#6F0C15]/40 rounded-md p-4">
          <h4 className="text-sm text-[#6F0C15] font-medium text-[20px] leading-[18px] mb-4">Last Export</h4>
          <p className="text-lg font-bold text-[#6F0C15]">{stats.lastExport.dateTime}</p>
          <p className="text-xs text-[#6F0C15] mt-3">by {stats.lastExport.by}</p>
        </div>
      </div>
    </div>
  );
};

export default FilterExportHistory;

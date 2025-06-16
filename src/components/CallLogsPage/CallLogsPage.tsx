import React from 'react';
import FilterBar from '@/components/FilterBar/FilterBar';
import CallLogTable from '@/components/CallLogTable/CallLogTable';
import Pagination from '@/components/Pagination/Pagination';

export default function CallLogsPage() {

  // Example data for total items and items per page
  const totalExports = 30;
  const itemsPerPage = 10;
  return (
    <div className="bg-[#EFE4E5] p-6 rounded-lg shadow-md">
      <FilterBar />
      <CallLogTable />
       <Pagination totalItems={totalExports} itemsPerPage={itemsPerPage}/>
    </div>
  );
}

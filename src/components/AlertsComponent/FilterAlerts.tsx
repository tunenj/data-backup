// components/FilterAlerts.tsx
import { useState } from 'react';
import { FaSearch, FaRedo, FaFilter } from 'react-icons/fa';

const FilterAlerts = () => {
    const [alertType, setAlertType] = useState('All Types');
    const [severity, setSeverity] = useState('All Severities');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    const handleSearch = () => {
        console.log('Search:', { alertType, severity, fromDate, toDate });
    };

    const handleReset = () => {
        setAlertType('All Types');
        setSeverity('All Severities');
        setFromDate('');
        setToDate('');
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md lg:mt-10">
            <div className='flex items-center space-x-2'>
                <h2 className="text-xl font-semibold mb-4 text-gray-400">Filter Alerts</h2>
                <FaFilter className="text-gray-400 mb-3" />
            </div>
            <div className="border-t-2 border-gray-300 my-2"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className=''>
                    <label className="block text-sm font-medium text-gray-700 pt-3 pb-2">Alert Type</label>
                    <div className="relative">
                        <select
                            className="bg-[#D4B6B9] mt-1 block w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm pr-10"
                            value={alertType}
                            onChange={(e) => setAlertType(e.target.value)}
                        >
                            <option>All Types</option>
                            <option>Type 1</option>
                            <option>Type 2</option>
                            <option>Type 3</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 pt-3">Severity</label>
                    <div className="relative pt-2">
                        <select
                            className="bg-[#D4B6B9] mt-1 block w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm pr-10"
                            value={severity}
                            onChange={(e) => setSeverity(e.target.value)}
                        >
                            <option>All Severities</option>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 pt-3">From</label>
                    <div className="relative pt-2">
                        <input
                            type="date"
                            className="bg-[#D4B6B9] mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm pr-10"
                            value={fromDate}
                            onChange={(e) => setFromDate(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 pt-3">To</label>
                    <div className="relative pt-2">
                        <input
                            type="date"
                            className="bg-[#D4B6B9] mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm pr-10"
                            value={toDate}
                            onChange={(e) => setToDate(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className="flex items-center mt-4 space-x-4 justify-end lg:mt-8">
                <button
                    onClick={handleSearch}
                    className="bg-[#6F0C15] text-white px-10 py-2.5 rounded-md flex items-center space-x-2 cursor-pointer"
                >
                    <FaSearch />
                    <span>Search</span>
                </button>
                <button
                    onClick={handleReset}
                    className="text-[#6F0C15] px-6 py-2 rounded-md border border-[#6F0C15] flex items-center space-x-2 cursor-pointer"
                >
                    <FaRedo />
                    <span>Reset Filters</span>
                </button>
            </div>
        </div>
    );
};

export default FilterAlerts;

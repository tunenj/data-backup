'use client'

import { useState } from 'react';
import Image from 'next/image';

interface SearchFormData {
    callId: string;
    phoneNumber: string;
    agent: string;
    campaign: string;
    callType: string;
    dateRange: string;
}

export default function AdvancedSearch() {
    const [formData, setFormData] = useState<SearchFormData>({
        callId: '',
        phoneNumber: '',
        agent: '',
        campaign: '',
        callType: 'All types',
        dateRange: '',
    });

    const [isModalOpen, setIsModalOpen] = useState(true);

    // Handle input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Search with:', formData);
        // Implement your search logic here
    };

    // Handle form reset
    const handleClear = () => {
        setFormData({
            callId: '',
            phoneNumber: '',
            agent: '',
            campaign: '',
            callType: 'All types',
            dateRange: '',
        });
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false); // This will close the modal
    };

    return (
        <>
            {/* Modal structure */}
            {isModalOpen && (
                <div className="relative flex justify-center items-center z-50">
                    <div className="bg-[#EFE4E5] p-6  max-w-3xl w-full relative">
                        <h2 className="text-[#6F0C15] text-2xl font-bold mb-6">Advanced Search</h2>

                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Call ID */}
                            <div className="space-y-1">
                                <label className="flex items-center gap-2 text-[#6F0C15] font-medium">
                                    <Image src="/icons/AdvanceSearchIcons/Card.png" alt="Call ID" width={20} height={20} />
                                    <span>Call ID</span>
                                </label>
                                <input
                                    type="text"
                                    name="callId"
                                    value={formData.callId}
                                    onChange={handleInputChange}
                                    placeholder="Enter call ID"
                                    className="w-full px-4 py-2 rounded-full border  text-sm border-[#6F0C15] placeholder-gray-400"
                                />
                            </div>

                            {/* Phone Number */}
                            <div className="space-y-1">
                                <label className="flex items-center gap-2 text-[#6F0C15] font-medium">
                                    <Image src="/icons/AdvanceSearchIcons/Phone.png" alt="Phone" width={20} height={20} />
                                    <span>Phone Number</span>
                                </label>
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    placeholder="Enter Phone Number"
                                    className="w-full px-4 py-2 rounded-full border  text-sm border-[#6F0C15] placeholder-gray-400"
                                />
                            </div>

                            {/* Agent */}
                            <div className="space-y-1">
                                <label className="flex items-center gap-2 text-[#6F0C15] font-medium">
                                    <Image src="/icons/AdvanceSearchIcons/User.png" alt="Agent" width={20} height={20} />
                                    <span>Agent</span>
                                </label>
                                <select
                                    name="agent"
                                    value={formData.agent}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 rounded-full border text-sm border-[#6F0C15]"
                                >
                                    <option value="">Select Agent</option>
                                    <option value="agent1">Agent 1</option>
                                    <option value="agent2">Agent 2</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>

                            {/* Campaign */}
                            <div className="space-y-1">
                                <label className="flex items-center gap-2 text-[#6F0C15] font-medium">
                                    <Image src="/icons/AdvanceSearchIcons/Megaphone.png" alt="Campaign" width={20} height={20} />
                                    <span>Campaign</span>
                                </label>
                                <select
                                    name="campaign"
                                    value={formData.campaign}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 rounded-full border text-sm border-[#6F0C15]"
                                >
                                    <option value="">Select Campaign</option>
                                    <option value="campaign1">Campaign 1</option>
                                    <option value="campaign2">Campaign 2</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>

                            {/* Call Type */}
                            <div className="space-y-1">
                                <label className="flex items-center gap-2 text-[#6F0C15] font-medium">
                                    <Image src="/icons/AdvanceSearchIcons/QR.png" alt="Call Type" width={20} height={20} />
                                    <span>Call Type</span>
                                </label>
                                <select
                                    name="callType"
                                    value={formData.callType}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 rounded-full border text-sm border-[#6F0C15]"
                                >
                                    <option value="All types">All types</option>
                                    <option value="Inbound">Inbound</option>
                                    <option value="Outbound">Outbound</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>

                            {/* Date Range */}
                            <div className="space-y-1">
                                <label className="flex items-center gap-2 text-[#6F0C15] font-medium">
                                    <Image src="/icons/AdvanceSearchIcons/Calendar.png" alt="Date Range" width={20} height={20} />
                                    <span>Date Range</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        name="dateRange"
                                        value={formData.dateRange}
                                        onChange={handleInputChange}
                                        placeholder="mm/dd/yyyy-mm/dd/yyyy"
                                        className="w-full px-4 py-2 rounded-full border text-sm border-[#6F0C15]"
                                    />
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="md:col-span-2 flex gap-4 mt-4">
                                <button
                                    type="submit"
                                    className="bg-[#6F0C15] text-white px-8 py-2 rounded-full hover:bg-[#5a0f1d] transition-colors"
                                >
                                    Search
                                </button>
                                <button
                                    type="button"
                                    onClick={handleClear}
                                    className="border border-gray-300 px-8 py-2 rounded-full hover:bg-gray-100 transition-colors"
                                >
                                    Clear
                                </button>
                            </div>
                        </form>

                        {/* Close button inside the form */}
                        <button
                            onClick={closeModal}  // Close the modal when clicked
                            className="absolute top-4 right-4 text-[#6F0C15] text-2xl"
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

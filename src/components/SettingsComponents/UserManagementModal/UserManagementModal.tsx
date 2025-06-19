// components/UserManagementModal.tsx

'use client';

import { useState } from 'react';

interface ModalProps {
    closeModal: () => void;
}

export default function UserManagementModal({ closeModal }: ModalProps) {
    const [role, setRole] = useState('Agent');
    const [enableOtp, setEnableOtp] = useState(false);
    const [forcePasswordReset, setForcePasswordReset] = useState(false);
    const [sendWelcomeEmail, setSendWelcomeEmail] = useState(false);
    const [sendSmsNotification, setSendSmsNotification] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50">
            <div className="bg-[#F5E9E9] p-6 rounded-lg w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg text-[#6F0C15] font-semibold">User Management</h3>
                    <button
                        className="text-xl text-[#6F0C15]"
                        onClick={closeModal}
                    >
                        ×
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        {/* First Name and Last Name side by side */}
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label htmlFor="firstName" className="block text-sm text-[#6F0C15]">First Name</label>
                                <input type="text" id="firstName" className="w-full p-2 rounded-xl border border-gray-300" />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="lastName" className="block text-sm text-[#6F0C15]">Last Name</label>
                                <input type="text" id="lastName" className="w-full p-2 rounded-xl border border-gray-300" />
                            </div>
                        </div>

                        {/* Phone Number and Email Address side by side */}
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label htmlFor="phoneNumber" className="block text-sm text-[#6F0C15]">Phone Number</label>
                                <input type="tel" id="phoneNumber" className="w-full p-2 rounded-xl border border-gray-300" />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="email" className="block text-sm text-[#6F0C15]">Email Address</label>
                                <input type="email" id="email" className="w-full p-2 rounded-xl border border-gray-300" />
                            </div>
                        </div>

                        {/* Role selection */}
                        <div className="flex gap-4 mb-4">
                            <button
                                type="button"
                                className={`px-4 py-2 rounded-full ${role === 'Agent' ? 'bg-[#6F0C15] text-white' : 'bg-gray-200'}`}
                                onClick={() => setRole('Agent')}
                            >
                                Agent
                            </button>
                            <button
                                type="button"
                                className={`px-4 py-2 rounded-full ${role === 'Supervisor' ? 'bg-[#6F0C15] text-white' : 'bg-gray-200'}`}
                                onClick={() => setRole('Supervisor')}
                            >
                                Supervisor
                            </button>
                        </div>

                        {/* Checkboxes */}
                        <div>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    checked={enableOtp}
                                    onChange={() => setEnableOtp(!enableOtp)}
                                    className="form-checkbox text-[#6F0C15]"
                                />
                                <span className="ml-2 text-sm text-[#6F0C15]">Enable OTP</span>
                            </label>
                        </div>
                        <div>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    checked={forcePasswordReset}
                                    onChange={() => setForcePasswordReset(!forcePasswordReset)}
                                    className="form-checkbox text-[#6F0C15]"
                                />
                                <span className="ml-2 text-sm text-[#6F0C15]">Force Password Reset on First Login</span>
                            </label>
                        </div>
                        <div>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    checked={sendWelcomeEmail}
                                    onChange={() => setSendWelcomeEmail(!sendWelcomeEmail)}
                                    className="form-checkbox text-[#6F0C15]"
                                />
                                <span className="ml-2 text-sm text-[#6F0C15]">Send Welcome Email</span>
                            </label>
                        </div>
                        <div>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    checked={sendSmsNotification}
                                    onChange={() => setSendSmsNotification(!sendSmsNotification)}
                                    className="form-checkbox text-[#6F0C15]"
                                />
                                <span className="ml-2 text-sm text-[#6F0C15]">Send SMS Notification</span>
                            </label>
                        </div>

                        {/* Action Footer */}
                        <div className="mt-4">
                            <p className="text-xs text-[#6F0C15]">
                                This action will be logged in the Audit Trail
                            </p>
                        </div>

                        <div className="flex justify-between gap-4 mt-6">
                            <button
                                type="button"
                                className="px-4 py-2 rounded-md border border-[#6F0C15] text-[#6F0C15] w-full"
                                onClick={closeModal}  // Close modal on Cancel
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 rounded-md bg-[#6F0C15] text-white w-full"
                            >
                                Add New User
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

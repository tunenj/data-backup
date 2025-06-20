import React, { useState, useEffect } from 'react';
import { User } from '../../constants/user';
import UserRow from './UserRow';
import Pagination from '../Pagination/Pagination';

interface Props {
  users: User[];
}

const UserTable: React.FC<Props> = ({ users }) => {
  const totalExports = 30;
  const itemsPerPage = 10;

  // States for form inputs
  const [role, setRole] = useState('Agent');
  const [enableOtp, setEnableOtp] = useState(false);
  const [forcePasswordReset, setForcePasswordReset] = useState(false);
  const [sendWelcomeEmail, setSendWelcomeEmail] = useState(false);
  const [sendSmsNotification, setSendSmsNotification] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open and close modal functions
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Close modal on component unmount
  useEffect(() => {
    return () => {
      setIsModalOpen(false);
    };
  }, []);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log({
      role,
      enableOtp,
      forcePasswordReset,
      sendWelcomeEmail,
      sendSmsNotification,
    });
    closeModal(); // Close modal after submission
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 overflow-x-auto relative">
      <div className="flex justify-between items-center mb-4 min-w-full">
        <h2 className="font-semibold text-[20px] sm:text-[24px] leading-[20px]">User Management</h2>
        <button
          className="bg-[#6F0C15] text-white text-sm sm:text-base px-3 py-2 rounded-md whitespace-nowrap cursor-pointer"
          onClick={openModal}
        >
          + Add New User
        </button>
      </div>

      {/* Table of users */}
      <div className="bg-[#EFE4E5] overflow-x-auto">
        <table className="min-w-[800px] w-full table-auto text-left border-collapse">
          <thead className="font-medium border-b border-gray-400 text-[#1C1C1C66] text-[13px] sm:text-[14.97px] leading-[22.45px]">
            <tr>
              <th className="p-2">
                <input
                  type="checkbox"
                  className="accent-[#6F0C15] w-4 h-4"
                />
              </th>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Role</th>
              <th className="p-2">Last Login</th>
              <th className="p-2">Status</th>
              <th className="p-2">Edit</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserRow key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="text-xs sm:text-sm mt-4">
        <Pagination totalItems={totalExports} itemsPerPage={itemsPerPage} />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="absolute mt-4 w-full max-w-md right-0 top-10">
          <div className="bg-[#EFE4E5] p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg text-[#6F0C15] font-semibold">User Management</h3>
              <button
                className="text-xl text-[#6F0C15]"
                onClick={closeModal} // Close modal on "×"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                {/* First Name and Last Name side by side */}
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label htmlFor="firstName" className="block text-sm text-[#6F0C15]">First Name</label>
                    <input type="text" id="firstName" className="w-full p-2 rounded-xl border border-gray-400" />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="lastName" className="block text-sm text-[#6F0C15]">Last Name</label>
                    <input type="text" id="lastName" className="w-full p-2 rounded-xl border border-gray-400" />
                  </div>
                </div>

                {/* Phone Number and Email Address side by side */}
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label htmlFor="phoneNumber" className="block text-sm text-[#6F0C15]">Phone Number</label>
                    <input type="tel" id="phoneNumber" className="w-full p-2 rounded-xl border border-gray-400" />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="email" className="block text-sm text-[#6F0C15]">Email Address</label>
                    <input type="email" id="email" className="w-full p-2 rounded-xl border border-gray-400" />
                  </div>
                </div>

                {/* Role selection */}
                <div className="flex gap-4 mb-4">
                  <button
                    type="button"
                    className={`px-12 py-2 rounded-full ${role === 'Agent' ? 'bg-[#6F0C15] text-white' : 'bg-gray-400'}`}
                    onClick={() => setRole('Agent')}
                  >
                    Agent
                  </button>
                  <button
                    type="button"
                    className={`px-12 py-2 rounded-full ${role === 'Supervisor' ? 'bg-[#6F0C15] text-white' : 'bg-gray-400'}`}
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
      )}
    </div>
  );
};

export default UserTable;

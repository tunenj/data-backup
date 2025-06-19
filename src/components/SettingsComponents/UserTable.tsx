import React from 'react';
import { useState } from 'react';
import { User } from '../../constants/user';
import UserRow from './UserRow';
import Pagination from '../Pagination/Pagination';
import UserManagementModal from './UserManagementModal/UserManagementModal';

interface Props {
  users: User[];
}

const UserTable: React.FC<Props> = ({ users }) => {

  const totalExports = 30;
  const itemsPerPage = 10;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 overflow-x-auto">
      <div className="flex justify-between items-center mb-4 min-w-full">
        <h2 className="font-semibold text-[20px] sm:text-[24px] leading-[20px]">User Management</h2>
        <button className="bg-[#6F0C15] text-white text-sm sm:text-base px-3 py-2 rounded-md whitespace-nowrap cursor-pointer"
          onClick={openModal}
        >
          + Add New User
        </button>
        {isModalOpen && <UserManagementModal closeModal={closeModal} />}
      </div>

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

      <div className="text-xs sm:text-sm mt-4">
        {/* Showing 1–{users.length} of {users.length} entries */}
        <Pagination totalItems={totalExports} itemsPerPage={itemsPerPage} />
      </div>
    </div>
  );
};

export default UserTable;

import React from 'react';
import { User } from '../../constants/user';
import { Pencil } from "lucide-react";
import Image from 'next/image';

interface Props {
  user: User;
}

const UserRow: React.FC<Props> = ({ user }) => {
  const isActive = user.status === 'Active';

  return (
    <tr className="text-xs sm:text-sm border-b border-gray-300 font-normal text-[13px] sm:text-[14.97px] leading-[20px] sm:leading-[22.45px]">
      <td className="p-2 sm:p-3">
        <input type="checkbox" className="w-4 h-4" />
      </td>
      <td className="p-2 sm:p-3">{user.name}</td>
      <td className="p-2 sm:p-3">{user.email}</td>
      <td className="p-2 sm:p-3">{user.role}</td>
      <td className="p-2 sm:p-3">{user.lastLogin}</td>
      <td className={`p-2 sm:p-3 font-semibold ${isActive ? 'text-[#08A47B]' : 'text-[#D54467]'}`}>
        {user.status}
      </td>
      <td className="p-2 sm:p-3">
        <button className="flex items-center gap-1 text-[#6F0C15] border-[#6F0C15] border-2 px-2 py-1 sm:px-3 sm:py-1 rounded-xl hover:bg-red-50 text-xs sm:text-sm">
          <Pencil className="w-4 h-4" />
          Edit
        </button>
      </td>
      <td className="p-2 sm:p-3">
        <button
          className={`flex items-center gap-1 px-2 sm:px-4 py-1 rounded-xl text-xs sm:text-sm ${
            isActive ? 'bg-gray-300 text-gray-700' : 'bg-[#14A155] text-white'
          }`}
        >
          <Image
            src={isActive ? '/icons/deactivate.png' : '/icons/activate.png'}
            alt={isActive ? 'Deactivate Icon' : 'Activate Icon'}
            width={12}
            height={12}
          />
          {isActive ? 'Deactivate' : 'Activate'}
        </button>
      </td>
    </tr>
  );
};

export default UserRow;

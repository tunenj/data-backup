import React from 'react';
import { Role } from '@/constants/role';
import { Pencil, Trash2 } from 'lucide-react';


interface Props {
    roles: Role[];
}

const RolesPermissionsTable: React.FC<Props> = ({ roles }) => {
    return (
        <div className="bg-white shadow rounded-lg p-4 mt-5 overflow-x-auto">
            <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-[20px] sm:text-[24px] leading-[28px]">Roles & Permissions</h2>
                <button className="bg-[#6F0C15] text-white px-4 py-2 rounded-md text-sm">
                    + Create New Role
                </button>
            </div>

            <table className="min-w-[700px] w-full table-auto text-left border-collapse">
                <thead className="text-[14px] text-[#1C1C1C66] font-medium bg-white">
                    <tr>
                        <th className="p-3">Role Name</th>
                        <th className="p-3">Description</th>
                        <th className="p-3">#Users Assigned</th>
                        <th className="p-3">Edit</th>
                        <th className="p-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {roles.map((role) => (
                        <tr key={role.id} className="border-b bg-[#F9EDED] border-gray-200 text-[14px] text-[#1C1C1C]">
                            <td className="p-3">{role.name}</td>
                            <td className="p-3">{role.description}</td>
                            <td className="p-3">{role.usersAssigned}</td>
                            <td className="p-3">
                                <button className="flex items-center gap-1 border-2 border-[#6F0C15] text-[#6F0C15] px-3 py-1 rounded-md hover:bg-red-50 text-sm">
                                    <Pencil className="w-4 h-4" />
                                    Edit
                                </button>
                            </td>
                            <td className="p-3">
                                <button className="flex items-center gap-1 bg-[#C2C2C2] text-white px-4 py-1 rounded-md text-sm cursor-not-allowed">
                                    <Trash2 className="w-4 h-4" />
                                    Delete
                                </button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RolesPermissionsTable;

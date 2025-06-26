import React from 'react';
import { FaDownload, FaCheck, FaEye, FaTimes } from 'react-icons/fa';

interface Alert {
    id: string;
    type: string;
    description: string;
    date: string;
    severity: string;
    status: string;
    actions: string[];
}

const alerts: Alert[] = [
    {
        id: 'ALRT-20250610-001',
        type: 'Storage Low',
        description: 'Storage capacity at 92%',
        date: '05/01 08:15 AM',
        severity: 'Critical',
        status: 'New',
        actions: ['Acknowledge'],
    },
    {
        id: 'ALRT-20250609-042',
        type: 'Backup Failure',
        description: 'Backup failed for campaign...',
        date: '05/02 09:30 AM',
        severity: 'Warning',
        status: 'Acknowledged',
        actions: ['Resolved'],
    },
    {
        id: 'ALRT-20250608-015',
        type: 'Compliance Flag',
        description: '12 call recordings archived...',
        date: '04/28 02:45 PM',
        severity: 'Info',
        status: 'Resolved',
        actions: ['Acknowledge'],
    },
    {
        id: 'ALRT-20250607-028',
        type: 'Storage Low',
        description: 'Archive storage at 88%',
        date: '04/30 11:20 AM',
        severity: 'Warning',
        status: 'Edit',
        actions: ['View Details'],
    },
    {
        id: 'ALRT-20250606-019',
        type: 'Connection Issue',
        description: 'HoduCC API connection lost...',
        date: '04/30 11:20 AM',
        severity: 'Critical',
        status: 'Edit',
        actions: ['Resolve'],
    },
];

const SystemAlertsTable: React.FC = () => {
    return (
        <div className="overflow-x-auto mt-20">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h2 className="text-xl font-semibold">System Alerts</h2>
                    <p>Monitor system notifications and issues</p>
                </div>
                <div className="flex">
                    <button className="flex bg-white text-[#6F0C15] border border-[#6F0C15] px-4 py-2 rounded-xl cursor-pointer">
                        Export
                        <FaDownload className="ml-2" />
                    </button>
                    <button className="ml-2 bg-[#6F0C15] text-white px-4 py-2 rounded-xl cursor-pointer">+ New Alert</button>
                </div>
            </div>
            <div className="border-t-2 border-gray-300 my-6 mb-3"></div>
            <table className="min-w-full bg-[#EFE4E5] rounded-lg shadow-md">
                <thead className="text-left text-gray-400 font-medium">
                    <tr className="border-b">
                        <th className="sm:px-4">
                            <input type="checkbox" />
                        </th>
                        <th className="py-2 px-2">ID</th>
                        <th className="py-2 px-2">Type</th>
                        <th className="py-2 px-2">Description</th>
                        <th className="py-2 px-2">Date & Time</th>
                        <th className="py-2 px-2">Severity</th>
                        <th className="py-2 px-2">Status</th>
                        <th className="py-2 px-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {alerts.map((alert) => (
                        <tr key={alert.id} className="border-b text-sm border-none">
                            <th className="sm:px-4">
                                <input type="checkbox" />
                            </th>
                            <td className="py-3 px-1">{alert.id}</td>
                            <td className="py-3 px-2">{alert.type}</td>
                            <td className="py-3 px-2">{alert.description}</td>
                            <td className="py-3 px-2">{alert.date}</td>
                            <td className="py-3 px-2">
                                <span
                                    className={`py-1 px-2 rounded-full ${alert.severity === 'Critical'
                                        ? 'text-red-600'
                                        : alert.severity === 'Warning'
                                            ? 'text-yellow-600'
                                            : 'text-blue-600'
                                        }`}
                                >
                                    {alert.severity}
                                </span>
                            </td>
                            <td className="py-3 px-4">{alert.status}</td>
                            <td className="py-3 px-4 space-x-2">
                                {alert.actions.map((action, index) => (
                                    <button
                                        key={index}
                                        className="bg-transparent hover:bg-opacity-80 text-sm px-3 py-1 rounded-md flex items-center"
                                    >
                                        {action === 'Acknowledge' && <FaCheck className="text-gray-600 border border-gray-600 rounded-xl mr-2 " />}
                                        {action === 'Resolved' && <FaCheck className="text-white bg-green-500 border border-green-500 rounded-xl mr-2" />}
                                        {action === 'View Details' && <FaEye className="text-blue-600 mr-2" />}
                                        {action === 'Resolve' && <FaCheck className="text-white bg-red-500 border border-red-500 rounded-xl mr-2" />}
                                        {action}
                                    </button>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SystemAlertsTable;

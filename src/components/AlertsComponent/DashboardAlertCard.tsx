// DashboardAlertCard.tsx
import React from 'react';

interface AlertCardProps {
    title: string;
    count: number;
    icon: React.ReactNode;
    bgColor: string;
    countStyle?: string;
    subTitle?: string;
}

const AlertCard: React.FC<AlertCardProps> = ({ title, count, icon, bgColor, countStyle, subTitle }) => {
    return (
        <div className={`p-4 ${bgColor} rounded shadow-lg lg:mt-6`}>

            <h3 className="text-xl font-medium text-gray-400">{title}</h3>
            <div className='flex items-center space-x-20'>
                <div className={`text-center ${countStyle}`}>{count} </div>
                <div>{icon}</div>
            </div>
            <h4 className="text-md text-dark-red-brown mt-1">{subTitle}</h4>
        </div>

    );
};

export default AlertCard;

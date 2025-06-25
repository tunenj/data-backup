// DashboardAlertCard.tsx
import React from "react";

type AlertCardProps = {
    title: string;
    count: number;
    icon: React.ReactNode;
    bgColor: string;
};

const AlertCard: React.FC<AlertCardProps> = ({ title, count, icon, bgColor }) => {
    return (
        <div className={`p-6 rounded-lg ${bgColor} text-white`}>
            <div className="flex items-center space-x-3">
                <div className="text-2xl">{icon}</div>
                <div>
                    <h3 className="text-lg">{title}</h3>
                    <p className="text-xl font-semibold">{count}</p>
                </div>
            </div>
            <p className="text-sm mt-2">Since last week</p>
        </div>
    );
};

export default AlertCard;

// DashboardPage.tsx
import React from "react";
import { FaExclamationTriangle, FaExclamationCircle, FaInfoCircle, FaRegClock } from "react-icons/fa";
import AlertCard from "./DashboardAlertCard";


const AlertsPage: React.FC = () => {
    return (
        <div className="grid grid-cols-4 gap-6">
            <AlertCard
                title="CRITICAL ALERTS"
                count={2}
                icon={<FaExclamationTriangle />}
                bgColor="bg-red-600"
            />
            <AlertCard
                title="WARNING ALERTS"
                count={4}
                icon={<FaExclamationCircle />}
                bgColor="bg-orange-600"
            />
            <AlertCard
                title="INFO ALERTS"
                count={7}
                icon={<FaInfoCircle />}
                bgColor="bg-blue-600"
            />
            {/* <AlertCard
                title="PENDING ACTIONS"
                count={3}
                icon={<FaClock />}
                bgColor="bg-yellow-500"
            /> */}
        </div>
    );
};

export default AlertsPage;

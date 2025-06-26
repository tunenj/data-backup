import React from "react";
import { FaExclamationTriangle, FaExclamationCircle, FaEnvelope, FaClock } from "react-icons/fa";
import AlertCard from "./DashboardAlertCard";

const AlertsPage: React.FC = () => {
    return (
        <div className="grid grid-cols-4 gap-6 bg-white">
            <AlertCard
                title="CRITICAL ALERTS"
                count={2}
                icon={<FaExclamationTriangle className="text-red-600" />}
                bgColor="bg-white"
                countStyle="text-red-600  px-3 py-4 text-lg font-semibold"
                subTitle="Since last week"
            />
            <AlertCard
                title="WARNING ALERTS"
                count={4}
                icon={<FaExclamationCircle className="text-orange-600" />}
                bgColor="bg-white"
                countStyle="text-orange-600 px-3 py-4 text-lg font-semibold"
                subTitle="Since last week"
            />
            <AlertCard
                title="INFO ALERTS"
                count={7}
                icon={<FaEnvelope className="text-blue-600" />} // Use the envelope icon
                bgColor="bg-white"
                countStyle="text-blue-600 px-3 py-4 text-lg font-semibold"
                subTitle="Since last week"
            />

            <AlertCard
                title="PENDING ACTIONS"
                count={3}
                icon={<FaClock className="text-yellow-500" />}
                bgColor="bg-white"
                countStyle="text-yellow-500 px-3 py-4 text-lg font-semibold"
                subTitle="Avg. resolution time"
            />
        </div>
    );
};

export default AlertsPage;

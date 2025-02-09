import React, { useEffect, useState } from "react";
import Card from "./Card";
import Cookies from 'js-cookie'
import {
  DocumentTextIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import LineGraph from "./Charts/Line";
import DoughnutChart from "./Charts/Doughnut.js";
export default function Dashboard() {
  const [analyticsData, setAnalyticsData] = useState(null);

  useEffect(() => {
    const fetchAnalyticsData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/dashboard/analytics`, {
          headers: {

            "Content-Type": "application/json",
            "Authorization": `Bearer ${Cookies.get("session")}`,

          }
        });
        const data = await response.json();
        setAnalyticsData(data);
      } catch (error) {
        console.error("Error fetching analytics data:", error);
      }
    };

    fetchAnalyticsData();
  }, []);
  if (!analyticsData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex-grow flex justify-center items-center p-4 ml-64">
      <div className="grow p-8">
        <h2 className="text-3xl mb-4 -mt-4">Dashboard</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <Card
            icon={<DocumentTextIcon className="h-8 w-8" />}
            title="Tasks"
            value={analyticsData.tasksCount}
          />
          <Card
            icon={<UserGroupIcon className="h-8 w-8" />}
            title="Teams"
            value={analyticsData.teamsCount}
          />
        </div>
        {analyticsData.lineGraphData && (<div className="grid grid-cols-1 gap-6 my-8 min-h-96 h-auto">
          <div className="bg-white p-4 sm:p-6 dark:bg-gray-800 rounded-lg shadow-md flex flex-col justify-between h-full">
            <h3 className="text-lg font-semibold mb-4 text-left">Tasks Data</h3>
            <div className="w-full h-full">
              <LineGraph data={analyticsData.lineGraphData} />
            </div>
          </div>
        </div>)}


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {analyticsData.doughnutData && analyticsData.doughnutData.status && (
            <div className="bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-4">Task Priority</h3>
              <div className="w-full max-w-[20rem] flex justify-center">
                <DoughnutChart data={analyticsData.doughnutData.status} />
              </div>
            </div>
          )}
          {analyticsData.doughnutData && analyticsData.doughnutData.priority && (
            <div className="bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-4">Task Priority</h3>
              <div className="w-full max-w-[20rem] flex justify-center">
                <DoughnutChart data={analyticsData.doughnutData.priority} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { FaHeartbeat } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';

const HealthAI = () => {
  const healthTrendData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Malaria Cases',
        data: [1000, 1200, 1100, 1300, 1400, 1500],
        borderColor: 'rgb(255, 99, 132)',
        fill: false,
        tension: 0.1,
      },
      {
        label: 'Pneumonia Cases',
        data: [500, 700, 650, 800, 700, 750],
        borderColor: 'rgb(54, 162, 235)',
        fill: false,
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
      <h2 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center">
        <FaHeartbeat className="mr-3 text-xl" />
        Health
      </h2>
      <p className="text-gray-700 mb-4">
        Our AI tools predict and analyze health trends, focusing on diseases like malaria, pneumonia, and malnutrition.
      </p>
      <Line data={healthTrendData} />
    </div>
  );
};

export default HealthAI;

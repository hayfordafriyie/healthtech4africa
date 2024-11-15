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
        borderColor: 'rgb(255, 99, 132)', // Red
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Light red for area under the line (if filled)
        fill: false,
        tension: 0.1,
      },
      {
        label: 'Pneumonia Cases',
        data: [500, 700, 650, 800, 700, 750],
        borderColor: 'rgb(54, 162, 235)', // Blue
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Light blue
        fill: false,
        tension: 0.1,
      },
      {
        label: 'Polio Cases',
        data: [500, 700, 650, 800, 500, 50],
        borderColor: 'rgb(75, 192, 192)', // Teal
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Light teal
        fill: false,
        tension: 0.1,
      },
      {
        label: 'Kwashiokor Cases',
        data: [50, 100, 150, 500, 500, 150],
        borderColor: 'rgb(153, 102, 255)', // Purple
        backgroundColor: 'rgba(153, 102, 255, 0.2)', // Light purple
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

import React from 'react';
import { FaTint } from 'react-icons/fa'; // WASH icon
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registering required chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const WASHData = () => {
  // Simulated WASH data
  const washStats = {
    waterAccess: { Africa: 60, Asia: 70, Europe: 90, Americas: 80, Oceania: 85 },
    sanitationAccess: { Africa: 50, Asia: 65, Europe: 95, Americas: 90, Oceania: 80 },
    hygieneAccess: { Africa: 40, Asia: 55, Europe: 85, Americas: 75, Oceania: 70 },
  };

  // Data structure for the Bar chart
  const data = {
    labels: ['Africa', 'Asia', 'Europe', 'Americas', 'Oceania'],
    datasets: [
      {
        label: 'Water Access (%)',
        data: Object.values(washStats.waterAccess),
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1,
      },
      {
        label: 'Sanitation Access (%)',
        data: Object.values(washStats.sanitationAccess),
        backgroundColor: 'rgb(255, 159, 64)',
        borderColor: 'rgb(255, 159, 64)',
        borderWidth: 1,
      },
      {
        label: 'Hygiene Access (%)',
        data: Object.values(washStats.hygieneAccess),
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
      <h2 className="text-2xl font-semibold text-teal-800 mb-4 flex items-center">
        <FaTint className="mr-3 text-xl" />
        WASH (Water, Sanitation, and Hygiene) Data Insights
      </h2>
      <p className="text-gray-700 mb-4">
        Tracking access to clean water, sanitation, and hygiene facilities globally to improve child health and safety.
      </p>
      <Bar
        data={data}
        options={{
          responsive: true,
          plugins: {
            tooltip: {
              callbacks: {
                label: (context) => `${context.dataset.label}: ${context.raw}%`,
              },
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Regions',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Coverage (%)',
              },
              beginAtZero: true,
              max: 100,
            },
          },
        }}
      />
    </div>
  );
};

export default WASHData; // Make sure to export the component

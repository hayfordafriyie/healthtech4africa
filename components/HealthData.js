import React from 'react';
import { FaHeartbeat } from 'react-icons/fa';
import { Bar } from 'react-chartjs-2';

const HealthData = () => {
  const healthData = {
    malaria: { Africa: 60, Asia: 25, Europe: 5, Americas: 3, Oceania: 2 },
    pneumonia: { Africa: 40, Asia: 30, Europe: 10, Americas: 8, Oceania: 5 },
    malnutrition: { Africa: 70, Asia: 15, Europe: 5, Americas: 4, Oceania: 3 },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
      <h2 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center">
        <FaHeartbeat className="mr-3 text-xl" />
        Health Data Insights
      </h2>
      <p className="text-gray-700 mb-4">
        Visualizing health data across regions, including disease prevalence and malnutrition rates.
      </p>
      <Bar
        data={{
          labels: ['Africa', 'Asia', 'Europe', 'Americas', 'Oceania'],
          datasets: [
            {
              label: 'Malaria Prevalence (%)',
              data: Object.values(healthData.malaria),
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              borderWidth: 1,
            },
            {
              label: 'Pneumonia Prevalence (%)',
              data: Object.values(healthData.pneumonia),
              backgroundColor: 'rgb(54, 162, 235)',
              borderColor: 'rgb(54, 162, 235)',
              borderWidth: 1,
            },
            {
              label: 'Malnutrition Rate (%)',
              data: Object.values(healthData.malnutrition),
              backgroundColor: 'rgb(75, 192, 192)',
              borderColor: 'rgb(75, 192, 192)',
              borderWidth: 1,
            },
          ],
        }}
      />
    </div>
  );
};

export default HealthData;

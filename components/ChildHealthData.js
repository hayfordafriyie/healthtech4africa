import React from 'react';
import { FaChild } from 'react-icons/fa';
import { Bar } from 'react-chartjs-2';

const ChildHealthData = () => {
  const childHealthStats = {
    vaccinations: { Africa: 60, Asia: 75, Europe: 90, Americas: 85, Oceania: 80 },
    stunting: { Africa: 40, Asia: 35, Europe: 10, Americas: 15, Oceania: 5 },
    wasting: { Africa: 25, Asia: 15, Europe: 5, Americas: 5, Oceania: 3 },
  };

  return (
    <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg mb-12">
      <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-800 mb-4 flex items-center">
        <FaChild className="mr-3 text-xl sm:text-2xl" />
        Children’s Health Data Insights
      </h2>
      <p className="text-gray-700 mb-4 text-sm sm:text-base">
        Visualizing children's health data, including vaccination rates, stunting, and wasting statistics.
      </p>
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
        <Bar
          data={{
            labels: ['Africa', 'Asia', 'Europe', 'Americas', 'Oceania'],
            datasets: [
              {
                label: 'Vaccination Rates (%)',
                data: Object.values(childHealthStats.vaccinations),
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 1,
              },
              {
                label: 'Stunting Rates (%)',
                data: Object.values(childHealthStats.stunting),
                backgroundColor: 'rgb(255, 159, 64)',
                borderColor: 'rgb(255, 159, 64)',
                borderWidth: 1,
              },
              {
                label: 'Wasting Rates (%)',
                data: Object.values(childHealthStats.wasting),
                backgroundColor: 'rgb(54, 162, 235)',
                borderColor: 'rgb(54, 162, 235)',
                borderWidth: 1,
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default ChildHealthData;

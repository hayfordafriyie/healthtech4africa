import React from 'react';
import { FaAppleAlt } from 'react-icons/fa';
import { Pie } from 'react-chartjs-2';

const NutritionData = () => {
  const malnutritionStats = [20, 50, 30];

  return (
    <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg mb-12">
      <h2 className="text-2xl sm:text-3xl font-semibold text-green-800 mb-4 flex items-center">
        <FaAppleAlt className="mr-3 text-xl sm:text-2xl" />
        Nutrition Data Insights
      </h2>
      <p className="text-gray-700 mb-4 text-sm sm:text-base">
        Analyzing global malnutrition rates to understand the severity of undernutrition, stunting, and wasting in children.
      </p>
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
        <Pie
          data={{
            labels: ['Undernutrition', 'Stunting', 'Wasting'],
            datasets: [
              {
                label: 'Malnutrition Categories (%)',
                data: malnutritionStats,
                backgroundColor: ['rgb(255, 159, 64)', 'rgb(255, 99, 132)', 'rgb(54, 162, 235)'],
                borderColor: ['rgb(255, 159, 64)', 'rgb(255, 99, 132)', 'rgb(54, 162, 235)'],
                borderWidth: 1,
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default NutritionData;

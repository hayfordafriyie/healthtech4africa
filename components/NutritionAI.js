import React from 'react';
import { FaAppleAlt } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';

const NutritionAI = () => {
  const malnutritionData = [50, 60, 40, 30, 45];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
      <h2 className="text-2xl font-semibold text-green-800 mb-4 flex items-center">
        <FaAppleAlt className="mr-3 text-xl" />
        Nutrition
      </h2>
      <p className="text-gray-700 mb-4">
        Using AI to predict malnutrition rates, our tools provide insights to help mitigate hunger and ensure better nutrition for children.
      </p>
      <Line
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
          datasets: [
            {
              label: 'Malnutrition Rate (%)',
              data: malnutritionData,
              borderColor: 'rgb(255, 159, 64)',
              fill: false,
              tension: 0.1,
            },
          ],
        }}
      />
    </div>
  );
};

export default NutritionAI;

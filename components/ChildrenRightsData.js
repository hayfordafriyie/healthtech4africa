import React from 'react';
import { FaGavel } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registering necessary chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ChildrenRightsData = () => {
  const violationsData = [5, 10, 15, 5, 3];

  return (
    <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg mb-12">
      <h2 className="text-2xl sm:text-3xl font-semibold text-red-800 mb-4 flex items-center">
        <FaGavel className="mr-3 text-xl sm:text-2xl" />
        Children’s Rights Data Insights
      </h2>
      <p className="text-gray-700 mb-4 text-sm sm:text-base">
        Tracking violations of children’s rights globally, providing data to improve advocacy and policy.
      </p>
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
        <Line
          data={{
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [
              {
                label: 'Rights Violations',
                data: violationsData,
                borderColor: 'rgb(255, 99, 132)',
                fill: false,
                tension: 0.1,
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default ChildrenRightsData;

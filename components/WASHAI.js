import React from 'react';
import { FaTint } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';

const WASHAI = () => {
  const washData = [70, 75, 80, 85, 90];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
      <h2 className="text-2xl font-semibold text-teal-800 mb-4 flex items-center">
        <FaTint className="mr-3 text-xl" />
        WASH (Water, Sanitation, and Hygiene)
      </h2>
      <p className="text-gray-700 mb-4">
        AI tools that predict the coverage of clean water and sanitation programs, improving public health and hygiene for children.
      </p>
      <Line
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
          datasets: [
            {
              label: 'WASH Coverage (%)',
              data: washData,
              borderColor: 'rgb(54, 162, 235)',
              fill: false,
              tension: 0.1,
            },
          ],
        }}
      />
    </div>
  );
};

export default WASHAI;

import React from 'react';
import { FaChild } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';

const ChildHealthAI = () => {
  const healthData = [300, 400, 350, 450, 500];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
      <h2 className="text-2xl font-semibold text-indigo-800 mb-4 flex items-center">
        <FaChild className="mr-3 text-xl" />
        Children’s Health
      </h2>
      <p className="text-gray-700 mb-4">
        Predicting children’s health outcomes, AI tools help improve health services and prevent childhood diseases.
      </p>
      <Line
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
          datasets: [
            {
              label: 'Children’s Health Improvement (%)',
              data: healthData,
              borderColor: 'rgb(75, 192, 192)',
              fill: false,
              tension: 0.1,
            },
          ],
        }}
      />
    </div>
  );
};

export default ChildHealthAI;

import React from 'react';
import { FaGavel } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';

const ChildrenRightsAI = () => {
  const rightsViolationData = [5, 10, 15, 5, 3];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
      <h2 className="text-2xl font-semibold text-red-800 mb-4 flex items-center">
        <FaGavel className="mr-3 text-xl" />
        Children’s Rights
      </h2>
      <p className="text-gray-700 mb-4">
        AI-powered insights to track and predict children’s rights violations, helping us advocate for their protection.
      </p>
      <Line
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
          datasets: [
            {
              label: 'Children’s Rights Violations',
              data: rightsViolationData,
              borderColor: 'rgb(255, 99, 132)',
              fill: false,
              tension: 0.1,
            },
          ],
        }}
      />
    </div>
  );
};

export default ChildrenRightsAI;

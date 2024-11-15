import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';

const ChildSocialProtectionAI = () => {
  const socialProtectionData = [50, 60, 70, 80, 90];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
      <h2 className="text-2xl font-semibold text-yellow-800 mb-4 flex items-center">
        <FaShieldAlt className="mr-3 text-xl" />
        Children’s Social Protection
      </h2>
      <p className="text-gray-700 mb-4">
        Using AI to predict the effectiveness of social protection programs aimed at improving children's welfare and safety.
      </p>
      <Line
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
          datasets: [
            {
              label: 'Social Protection Coverage (%)',
              data: socialProtectionData,
              borderColor: 'rgb(255, 205, 86)',
              fill: false,
              tension: 0.1,
            },
          ],
        }}
      />
    </div>
  );
};

export default ChildSocialProtectionAI;

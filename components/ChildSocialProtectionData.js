import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';
import { Pie } from 'react-chartjs-2';

const ChildSocialProtectionData = () => {
  const socialProtectionCoverage = [50, 60, 70, 80, 90];

  return (
    <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg mb-12">
      <h2 className="text-2xl sm:text-3xl font-semibold text-yellow-800 mb-4 flex items-center">
        <FaShieldAlt className="mr-3 text-xl sm:text-2xl" />
        Children’s Social Protection Data Insights
      </h2>
      <p className="text-gray-700 mb-4 text-sm sm:text-base">
        Visualizing the coverage of social protection programs for children, to ensure better welfare and safety.
      </p>
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
        <Pie
          data={{
            labels: ['Low Coverage', 'Medium Coverage', 'High Coverage'],
            datasets: [
              {
                label: 'Social Protection Coverage (%)',
                data: socialProtectionCoverage,
                backgroundColor: ['rgb(255, 99, 132)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)'],
                borderColor: ['rgb(255, 99, 132)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)'],
                borderWidth: 1,
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default ChildSocialProtectionData;

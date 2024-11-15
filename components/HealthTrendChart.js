import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const HealthTrendChart = () => {
  // Dummy data: Health risk trends over time (e.g., over the months)
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Health Risk Trend',
        data: [0.3, 0.5, 0.8, 0.6, 0.4, 0.3], // Random health risk scores
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-blue-800 mb-4">Health Risk Trend</h3>
      <p className="text-gray-700 mb-4">Visualizing health risk trends over the past few months based on AI data insights.</p>
      <Line data={data} />
    </div>
  );
};

export default HealthTrendChart;

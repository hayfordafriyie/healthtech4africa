import React, { useState } from 'react';

const PredictiveModel = () => {
  const [userData, setUserData] = useState({
    age: 0,
    malnutritionRisk: 0,
  });
  const [prediction, setPrediction] = useState(null);

  // Dummy predictive model (we'll just use a simple rule here for demonstration)
  const handleSubmit = () => {
    // Simulate a prediction
    const healthRisk = userData.age * 0.2 + userData.malnutritionRisk * 0.5;
    setPrediction(healthRisk);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-blue-800 mb-4">Predictive Health Analytics</h3>
      <p className="text-gray-700 mb-4">
        Enter your data to simulate a prediction about health risks based on age and malnutrition risk.
      </p>
      
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700">Age</label>
          <input
            type="number"
            value={userData.age}
            onChange={(e) => setUserData({ ...userData, age: e.target.value })}
            className="p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block text-gray-700">Malnutrition Risk (0-1)</label>
          <input
            type="number"
            step="0.1"
            value={userData.malnutritionRisk}
            onChange={(e) => setUserData({ ...userData, malnutritionRisk: e.target.value })}
            className="p-2 border border-gray-300 rounded"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          Get Prediction
        </button>

        {prediction !== null && (
          <div className="mt-4 p-4 bg-gray-200 rounded">
            <h3 className="text-xl">Prediction Result</h3>
            <p>Predicted Health Risk: {prediction.toFixed(2)}</p>
            <p>{prediction > 0.5 ? 'At Risk' : 'Healthy'}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PredictiveModel;

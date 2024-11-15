import PredictiveModel from '../components/PredictiveModel';
import HealthTrendChart from '../components/HealthTrendChart';
import NLPTool from '../components/NLPTool';
import React from 'react';
import HealthAI from '../components/HealthAI';
import NutritionAI from '../components/NutritionAI';
import ChildHealthAI from '../components/ChildHealthAI';
import ChildrenRightsAI from '../components/ChildrenRightsAI';
import ChildSocialProtectionAI from '../components/ChildSocialProtectionAI';
import WASHAI from '../components/WASHAI';

const AITools = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h1 className="text-3xl font-semibold text-blue-900 mb-12 text-center">
        Our AI Tools
      </h1>

      {/* Predictive Model */}
      <PredictiveModel />

      {/* Health Trend Chart */}
      <div className="my-12">
        <HealthTrendChart />
      </div>

      {/* NLP Tool */}
      <div className="my-12">
        <NLPTool />
      </div>
      <HealthAI />
      <NutritionAI />
      <ChildHealthAI />
      <ChildrenRightsAI />
      <ChildSocialProtectionAI />
      <WASHAI />
    </div>
  );
};

export default AITools;

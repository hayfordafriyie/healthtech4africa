import React from 'react';
import HealthData from './components/HealthData';
import NutritionData from './components/NutritionData';
import ChildHealthData from './components/ChildHealthData';
import ChildrenRightsData from './components/ChildrenRightsData';
import ChildSocialProtectionData from './components/ChildSocialProtectionData';
import WASHData from './components/WASHData';

const DataDashboard = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">
        Data Insights for Improving Children’s Well-being
      </h1>
      <HealthData />
      <NutritionData />
      <ChildHealthData />
      <ChildrenRightsData />
      <ChildSocialProtectionData />
      <WASHData />
    </div>
  );
};

export default DataDashboard;

import React from 'react';
import HealthData from '../components/HealthData';
import NutritionData from '../components/NutritionData';
import ChildHealthData from '../components/ChildHealthData';
import ChildrenRightsData from '../components/ChildrenRightsData';
import ChildSocialProtectionData from '../components/ChildSocialProtectionData';
import WASHData from '../components/WASHData';
import Header from '../components/Header';

const DataDashboard = () => {
  return (
    <div className="container mx-auto p-6 sm:p-8 lg:p-10">
      <Header/>
      <br/><br/>
      <h1 className="text-4xl sm:text-5xl font-bold text-center text-blue-900 mb-12">
        Data Insights for Improving Children’s Well-being
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <HealthData />
        <NutritionData />
        <ChildHealthData />
        <ChildrenRightsData />
        <ChildSocialProtectionData />
        <WASHData />
      </div>
    </div>
  );
};

export default DataDashboard;

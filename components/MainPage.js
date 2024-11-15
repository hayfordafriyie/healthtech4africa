import ChildrenHealth from './ChildrenHealth';
import ChildrenEducation from './ChildrenEducation';
import ChildrenNutrition from './ChildrenNutrition';
import ChildrenRights from './ChildrenRights';
import ChildrenSocialProtection from './ChildrenSocialProtection';
import WASH from './WASH';

const MainPage = () => {
  return (
    <div className="bg-gray-50 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ChildrenHealth />
        <ChildrenEducation />
        <ChildrenNutrition />
        <ChildrenRights />
        <ChildrenSocialProtection />
        <WASH />
      </div>
    </div>
  );
}

export default MainPage;

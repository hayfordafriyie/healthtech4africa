// components/ChildrenNutrition.js
const ChildrenNutrition = () => {
  const nutritionData = [
    { title: "Balanced Diet for Children", description: "Educating families on the importance of balanced meals for children's growth." },
    { title: "Fighting Malnutrition", description: "Providing nutritious food to children in underserved areas to prevent malnutrition." },
    { title: "Iron and Vitamin Supplements", description: "Distributing iron and vitamin-rich food or supplements to children." },
    { title: "Breastfeeding Awareness", description: "Promoting breastfeeding as a vital part of infant nutrition and health." }
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-[#1e2a47] mb-4">Children Nutrition</h2>
      <ul className="space-y-4 overflow-y-auto max-h-[300px]">
        {nutritionData.map((item, index) => (
          <li key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg text-[#ff6600]">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChildrenNutrition;

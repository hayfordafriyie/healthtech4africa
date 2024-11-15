// components/ChildrenHealth.js
const ChildrenHealth = () => {
  const healthData = [
    { title: "Vaccination Programs", description: "Increasing the access and availability of vaccines to prevent diseases." },
    { title: "Nutrition for Healthy Growth", description: "Promoting balanced diets for young children to prevent malnutrition." },
    { title: "Access to Healthcare Services", description: "Ensuring children have easy access to essential health services and treatments." },
    { title: "Preventing Malaria and Other Diseases", description: "Reducing the prevalence of malaria and other preventable diseases in children." }
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-[#1e2a47] mb-4">Children Health</h2>
      <ul className="space-y-4 overflow-y-auto max-h-[300px]">
        {healthData.map((item, index) => (
          <li key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg text-[#ff6600]">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChildrenHealth;

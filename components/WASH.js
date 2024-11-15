// components/WASH.js
const WASH = () => {
  const washData = [
    { title: "Clean Drinking Water", description: "Ensuring access to clean and safe drinking water in rural areas." },
    { title: "Sanitation and Hygiene", description: "Promoting proper sanitation and hygiene practices to reduce health risks." },
    { title: "Handwashing Campaigns", description: "Encouraging regular handwashing to prevent the spread of diseases." },
    { title: "Improved Toilets and Facilities", description: "Building clean and safe toilets in schools and communities." }
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-[#1e2a47] mb-4">WASH (Water, Sanitation, and Hygiene)</h2>
      <ul className="space-y-4 overflow-y-auto max-h-[300px]">
        {washData.map((item, index) => (
          <li key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg text-[#ff6600]">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WASH;

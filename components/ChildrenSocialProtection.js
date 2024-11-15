// components/ChildrenSocialProtection.js
const ChildrenSocialProtection = () => {
  const protectionData = [
    { title: "Child Protection Systems", description: "Strengthening systems that protect children from violence and exploitation." },
    { title: "Cash Transfers to Families", description: "Providing financial support to families in need to prevent child labor." },
    { title: "Social Safety Nets", description: "Creating safety nets for vulnerable children and families." },
    { title: "Support for Orphans", description: "Providing emotional and financial support to orphaned children." }
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-[#1e2a47] mb-4">Children Social Protection</h2>
      <ul className="space-y-4 overflow-y-auto max-h-[300px]">
        {protectionData.map((item, index) => (
          <li key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg text-[#ff6600]">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChildrenSocialProtection;

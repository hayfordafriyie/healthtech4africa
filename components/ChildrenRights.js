// components/ChildrenRights.js
const ChildrenRights = () => {
  const rightsData = [
    { title: "Right to Education", description: "Ensuring every child has the right to attend school and learn." },
    { title: "Protection from Abuse", description: "Advocating for the protection of children from all forms of violence." },
    { title: "Right to Health", description: "Access to healthcare services is a basic right of every child." },
    { title: "Right to Play", description: "Ensuring children have opportunities for recreation and social development." }
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-[#1e2a47] mb-4">Children Rights</h2>
      <ul className="space-y-4 overflow-y-auto max-h-[300px]">
        {rightsData.map((item, index) => (
          <li key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg text-[#ff6600]">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChildrenRights;

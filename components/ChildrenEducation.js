// components/ChildrenEducation.js
const ChildrenEducation = () => {
    const educationData = [
      { title: "Access to Primary Education", description: "Improving the enrollment rate of children in primary schools across rural Africa." },
      { title: "Gender Equality in Education", description: "Ensuring that both girls and boys have equal access to quality education." },
      { title: "Digital Learning Initiatives", description: "Providing children with access to online learning resources and digital tools." },
      { title: "Educational Infrastructure", description: "Building more classrooms, libraries, and safe learning environments." }
    ];
  
    return (
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1e2a47] mb-4">Children Education</h2>
        <ul className="space-y-4 overflow-y-auto max-h-[300px]">
          {educationData.map((item, index) => (
            <li key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-lg text-[#ff6600]">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ChildrenEducation;
  
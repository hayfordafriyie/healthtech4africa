import React from 'react';
// Optional: If using FontAwesome icons, you can import the library like this
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart, faAppleAlt, faBook, faGavel } from '@fortawesome/free-solid-svg-icons';

const AboutComp = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-lg mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          About HealthTech4Africa & UNICEF Collaboration
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          HealthTech4Africa is working in partnership with UNICEF to innovate AI tools for analyzing credible datasets to improve the health and well-being of children across Africa.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-900">Our Mission</h2>
          <p className="mt-4 text-lg text-gray-700">
            Our mission is to leverage cutting-edge AI technology to analyze credible datasets and provide actionable insights to improve children's health, nutrition, education, and protection. Together with UNICEF, we aim to create a better future for children in Africa by informing stakeholders like NGOs, governments, and local communities.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-900">UNICEF Focal Areas</h2>
          <p className="mt-4 text-lg text-gray-700">
            UNICEF’s focal areas include health, nutrition, education, social protection, and children's rights. Through this collaboration, we seek to engage national, regional, and global stakeholders to enhance the impact of UNICEF's ongoing efforts to ensure every child’s rights are met.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-900">Key Collaboration Areas</h2>
        <p className="mt-4 text-lg text-gray-700">
          This collaboration between HealthTech4Africa and UNICEF focuses on updating stakeholders, including children's NGOs and government bodies, about critical developments and innovations. Our approach integrates cutting-edge AI tools to monitor and analyze data trends in the following UNICEF focal areas:
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="p-6 bg-blue-100 rounded-full inline-block mb-4">
              {/* If using FontAwesome */}
              {/* <FontAwesomeIcon icon={faHeart} className="text-3xl text-blue-600" /> */}
              <i className="fas fa-heart text-3xl text-blue-600"></i>
            </div>
            <h3 className="text-xl font-medium text-gray-900">Health</h3>
            <p className="mt-2 text-lg text-gray-600">Innovating data-driven solutions to improve child health outcomes.</p>
          </div>

          <div className="text-center">
            <div className="p-6 bg-green-100 rounded-full inline-block mb-4">
              {/* If using FontAwesome */}
              {/* <FontAwesomeIcon icon={faAppleAlt} className="text-3xl text-green-600" /> */}
              <i className="fas fa-apple-alt text-3xl text-green-600"></i>
            </div>
            <h3 className="text-xl font-medium text-gray-900">Nutrition</h3>
            <p className="mt-2 text-lg text-gray-600">Providing actionable insights to address malnutrition and hunger.</p>
          </div>

          <div className="text-center">
            <div className="p-6 bg-yellow-100 rounded-full inline-block mb-4">
              {/* If using FontAwesome */}
              {/* <FontAwesomeIcon icon={faBook} className="text-3xl text-yellow-600" /> */}
              <i className="fas fa-book text-3xl text-yellow-600"></i>
            </div>
            <h3 className="text-xl font-medium text-gray-900">Education</h3>
            <p className="mt-2 text-lg text-gray-600">Ensuring every child has access to quality education and learning tools.</p>
          </div>

          <div className="text-center">
            <div className="p-6 bg-purple-100 rounded-full inline-block mb-4">
              {/* If using FontAwesome */}
              {/* <FontAwesomeIcon icon={faGavel} className="text-3xl text-purple-600" /> */}
              <i className="fas fa-gavel text-3xl text-purple-600"></i>
            </div>
            <h3 className="text-xl font-medium text-gray-900">Children's Rights</h3>
            <p className="mt-2 text-lg text-gray-600">Advocating for children's rights and ensuring they are respected globally.</p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-900">Our Stakeholders</h2>
        <p className="mt-4 text-lg text-gray-700">
          HealthTech4Africa and UNICEF continuously update our stakeholders, including governmental bodies, NGOs, and other partners, on the progress of our AI-driven projects and developments in children's health and welfare.
        </p>
      </div>
    </div>
  );
};

export default AboutComp;

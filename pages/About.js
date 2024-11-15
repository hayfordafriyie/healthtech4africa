import React from 'react'; // Import React at the top
import AboutComp from '../components/About'; // Import the About component
import Header from '../components/Header';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <Header/>
      {/* Wrapper for the About Page content */}
      <div className="max-w-screen-xl mx-auto">
        {/* Card Container with shadow */}
        <div className="bg-white p-8 rounded-lg shadow-2xl">
          {/* Include the About Component */}
          <AboutComp />
        </div>
      </div>
    </div>
  );
};

export default About; // Export the AboutPage component correctly

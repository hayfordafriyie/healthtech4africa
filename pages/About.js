import AboutComp from '../components/About';

const About ()=> import React from 'react';
import About from '../components/About';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
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

export default About;

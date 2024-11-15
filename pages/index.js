import React from 'react';
import MainPage from '../components/MainPage';
import ImageSlider from './404';  // This import seems strange, ensure the path is correct
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <Header /> {/* Include Header on every page */}
      <ImageSlider /> {/* Assuming ImageSlider is a component */}
      <MainPage /> {/* Include MainPage component */}
    </div>
  );
};

export default Home;

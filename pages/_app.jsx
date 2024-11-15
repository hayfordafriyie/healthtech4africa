import Head from 'next/head';
import Header from '../components/Header';
import MainPage from '../components/MainPage';  // Import MainPage (index.js)

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
   <Header /> {/* Include Header on every page */}
      <Component {...pageProps} /> {/* Default page */}
      
      
     
     
      <MainPage /> 
    </>
  );
}

export default MyApp;

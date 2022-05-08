import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HeroContainer from './components/HeroContainer';
import HeroText from './components/HeroText/HeroText';
import HeroDetails from './components/HeroDetails';
import ExperienceDetails from './components/ExperienceDetails';
import Passes from './components/Passes';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import ImageFrameContainer from './components/ImageFrameContainer';
import PhotoGallery from './components/PhotoGallery';

function App() {
  return (
    <>
      <HeroContainer>
        <NavBar />
        <HeroText />
      </HeroContainer>
      <HeroDetails />
      <ExperienceDetails />
      <ImageFrameContainer />
      {/* <PhotoGallery /> */}
      <Passes />
      <Footer />
      <Copyright />
    </>
  )
}

export default App;

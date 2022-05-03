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

function App() {
  return (
    <>
      <HeroContainer>
        <NavBar />
        <HeroText />
      </HeroContainer>
      <HeroDetails />
      <ExperienceDetails />
      <Passes />
      <Footer />
      <Copyright />
    </>
  );
}

export default App;

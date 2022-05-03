import React from 'react';
import styled from 'styled-components';
import HeroImage from '../images/hero-image.jpg';

const ContainerP = styled.section`
  width: 100%;
  height: 780px;
  position: relative;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.580838) 32.24%, rgba(0, 0, 0, 0.486293) 62.09%, rgba(0, 0, 0, 0) 98.06%), url(${HeroImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const HeroContainer = ({children}) => {
  return (
    <ContainerP >
      {children}
    </ContainerP>
  )
}

export default HeroContainer;



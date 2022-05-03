import React from 'react';
import styled from 'styled-components';
import HeroOffset from './HeroOffset/HeroOffset';

const Wrapper = styled.article`
  width: 100%;
  height: 250px;
  position: relative;
  background: #F8F9FC;
  color: black;
`

const HeroDetails = () => {
  return (
    <Wrapper>
      <HeroOffset />
    </Wrapper>
  )
}

export default HeroDetails;
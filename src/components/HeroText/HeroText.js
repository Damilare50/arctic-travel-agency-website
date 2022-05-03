import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.article`
  padding-left: 120px;
  color: white;
`

const HeroHeader = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 130%;
  letter-spacing: -0.03em;
  text-transform: capitalize;
`

const HeroButton = styled.button`
  height: 64px;
  width: 183px;
  margin-top: 60px;
  border-radius: 10px;
  border: none;
  padding: 22px, 39px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #3E86F5;
  color: white;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`

const SomeText = styled.p`
  font-family: 'Poppins';
  width: 529px;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 155%;
  letter-spacing: -0.01em;
`

const HeroText = () => {
  return (
    <Wrapper>
      <HeroHeader>plan the perfect winter trip</HeroHeader>
      <SomeText>Easily plan your ideal ski trip from home with the help of professionals.</SomeText>
      <HeroButton>Book Here</HeroButton>
    </Wrapper>
  )
}

export default HeroText;
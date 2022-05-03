import React from 'react';
import styled from 'styled-components';
import CopyrightOthers from './Copyright/CopyrightOthers';
import CopyrightText from './Copyright/CopyrightText';

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  padding: 0px 120px;

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 40px 0 20px 40px;
  }
`

const Copyright = () => {
  return (
    <Wrapper>
      <CopyrightText />
      <CopyrightOthers />
    </Wrapper>
  )
}

export default Copyright;
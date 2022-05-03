import React from 'react';
import styled from 'styled-components';
import FooterDetails from './Footer/FooterDetails';
import FooterLinks from './Footer/FooterLinks';

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  padding: 80px 120px;

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 40px 0 20px 40px;
  }
`

const Footer = () => {
  return (
    <Wrapper>
      <FooterDetails />
      <FooterLinks />
    </Wrapper>
  )
}

export default Footer;
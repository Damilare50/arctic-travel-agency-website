import React from 'react';
import styled from 'styled-components';
import LinkColumns from './LinkColumns';

const Wrapper = styled.article`

  div {
    display: grid;
    grid-template-columns: repeat(3, minmax(150px, 300px));
    grid-column-gap: 10px;
  }

  @media screen and (max-width: 700px) {
    div {
      display: flex;
      width: 200px;
      flex-direction: column;
      margin-top: 20px;
    }
  }
`

const FooterLinks = () => {
  return (
    <Wrapper>
      <div>
        <LinkColumns header="Company" link1="About" link2="Career" link3="Mobile" />
        <LinkColumns header="Contact" link1="FAQ" link2="Press" link3="Affiliates" />
        <LinkColumns header="More" link1="Airlines" link2="Airfees" link3="Lowfare Tips" />
      </div>
    </Wrapper>
  )
}

export default FooterLinks;


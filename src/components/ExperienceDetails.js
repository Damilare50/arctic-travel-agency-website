import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 120px;
  padding-bottom: 120px;
  background: #F8F9FC;
  border-top: 0.1px solid black;
  border-bottom: 0.1px solid black;
  align-items: center;

  h2 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 135%;
    margin-top: 0px;
    max-width: 791px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #000000;

    span {
      color: #3E86F5;
    }
  }

  h4 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    max-width: 697px;
    font-size: 24px;
    line-height: 150%;
    text-align: center;
    color: rgba(0, 0, 0, 0.5);
  }

  h6 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 60px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #000000;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  @media screen and (max-width: 800px) {
    padding-top: 60px;
    padding-bottom: 60px;

    h2, h4, h6 {
      width: 80%;
    }
  }

  @media screen and (max-width: 400px) {
    padding-top: 30px;
    padding-bottom: 30px;

    h2, h6 {
      font-weight: 500;
      font-size: 32px;
      line-height: 125%;
    }

    h4 {
      font-weight: 300;
      font-size: 22px;
    }
  }
`

const ExperienceDetails = () => {
  return (
    <Wrapper>
      <h2>Creating the best <span>ice-cold!</span> experience you would never forget.</h2>
      <h4>Would you explore nature paradise in the world, find the best destination in the world with us.</h4>
      <h6>View Regions available</h6>
    </Wrapper>
  )
}

export default ExperienceDetails;
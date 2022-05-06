import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.article`
  padding-left: 120px;
  color: white;

  h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 130%;
    letter-spacing: -0.03em;
    text-transform: capitalize;
  }

  p {
    font-family: 'Poppins';
    width: 529px;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 155%;
    letter-spacing: -0.01em;
  }

  button {
    height: 64px;
    width: 183px;
    margin-top: 60px;
    border-radius: 10px;
    border: none;
    padding: 22px 39px;
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
  }

  @media screen and (max-width: 800px) {
    padding-left: 60px;
    padding-top: 20px;

    h1 {
      font-size: 48px;
    }

    p {
      width: 75%;
    }
  }

  @media screen and (max-width: 400px) {
    padding-left: 30px;

    h1 {
      font-size: 40px;
    }

    p {
      font-size: 18px;
    }

    button {
      width: 150px;
      height: 60px;
      padding: 22px 30px;
    }
  }
`

const HeroText = () => {
  return (
    <Wrapper>
      <h1>plan the perfect winter trip</h1>
      <p>Easily plan your ideal ski trip from home with the help of professionals.</p>
      <button>Book Here</button>
    </Wrapper>
  )
}

export default HeroText;
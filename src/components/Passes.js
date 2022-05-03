import React from 'react';
import styled from 'styled-components';
import banner from '../images/banner-0.jpg';

const Wrapper = styled.article`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${banner});
  width: 100%;
  height: 750px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-evenly;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-top: 0;

  div {
    padding-left: 120px;
  }

  h2 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 72px;
    line-height: 108px;
    letter-spacing: -0.02em;
    color: #FFFFFF;
    max-width: 1017px;
    margin-top: 0;
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 22px 39px;
    width: 285px;
    height: 72px;
    background: #3E86F5;
    border-radius: 10px;
    border: none;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
  }

`

const Passes = () => {
  return (
    <Wrapper>
      <div>
        <h2>View Passes We've Made Available For You</h2>
        <button>View Passes</button>
      </div>
    </Wrapper>
  )
}

export default Passes;
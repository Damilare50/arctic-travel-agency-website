import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.article`

  div {
    display: grid;
    grid-template-columns: repeat(3, minmax(150px, 300px));
    grid-column-gap: 10px;

    h6 {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 25px;
      color: rgba(0, 0, 0, 0.5);
    }
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


const CopyrightOthers = () => {
  return (
    <Wrapper>
      <div>
        <h6>Privacy Policy</h6>
        <h6>Terms of Use</h6>
      </div>
    </Wrapper>
  )
}

export default CopyrightOthers;
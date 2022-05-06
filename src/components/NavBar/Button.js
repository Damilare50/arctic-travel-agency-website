import React from 'react';
import styled from 'styled-components';

const PriButton = styled.button`
  width: 150px;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 30px;
  margin-left: auto;
  border: none;
  border-radius: 10px;
  color: #3E86F5;
  background-color: white;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;

  @media screen and (max-width: 800px) {
    padding: 22px 25px;
    margin-left: 0;
    margin-bottom: 20px;

    .disp-none {
      display: none;
    }
  }
`

const Button = ({text, respOpen}) => {
  return (
    <PriButton className={respOpen ? '' : 'disp-none'}>{text}</PriButton>
  )
}

export default Button;
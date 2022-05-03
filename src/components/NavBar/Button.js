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
`

const Button = ({text}) => {
  return (
    <PriButton>{text}</PriButton>
  )
}

export default Button;
import React from 'react';
import styled from 'styled-components';

const Text = styled.h6`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 33px;
  color: rgba(0, 0, 0, 0.5);
`

const CopyrightText = () => {
  return (
    <Text>&copy; 2022 Arctic Travels - All right reserved.</Text>
  )
}

export default CopyrightText;
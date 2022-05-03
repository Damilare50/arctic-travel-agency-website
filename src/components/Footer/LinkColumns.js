import React from 'react';
import styled from 'styled-components';

const List = styled.section`
  display: flex;
  flex-direction: column;

  h5 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-transform: uppercase;
    line-height: 21px;
    letter-spacing: 0.12em;
    color: #3E86F5;
    margin-top: 0;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
    justify-content: space-around;

    li {
      display: block;
      width: 100%;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      height: 40px;
      line-height: 21px;
      letter-spacing: 0.02em;
      color: #031530;
    }
  }
`

export const LinkColumns = ({header, link1, link2, link3}) => {
  return (
    <List>
      <h5>{header}</h5>
      <ul>
        <li>{link1}</li>
        <li>{link2}</li>
        <li>{link3}</li>
      </ul>
    </List>
  )
}

export default LinkColumns;
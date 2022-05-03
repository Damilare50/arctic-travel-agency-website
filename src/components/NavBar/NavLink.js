import React from 'react';
import styled from 'styled-components';
import LogoIcon from '../../images/logo-icon.png';

const Navmenu = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  color: white;
  padding-left: 0;
  
  li {
    display: flex;
    align-items: center;
    margin-right: 40px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
  }

  li:first-child {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
  }
`

const NavLink = () => {
  return (
    <Navmenu>
      <li>
        <img src={LogoIcon} alt="logo-icon" />&nbsp;Arctic Travels
      </li>
      <li>About Us</li>
      <li>Support</li>
      <li>Language</li>
    </Navmenu>
  )
}

export default NavLink;
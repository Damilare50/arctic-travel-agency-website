import React from 'react'
import Button from './NavBar/Button';
import NavLink from './NavBar/NavLink';
import styled from 'styled-components';

const Menu = styled.article`
  display: flex;
  padding: 20px 120px;
`


const NavBar = () => {
  return (
    <Menu>
      <NavLink />
      <Button text="Sign In" />
    </Menu>
  )
}

export default NavBar;

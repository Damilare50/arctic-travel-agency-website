import React, { useState } from 'react'
import Button from './NavBar/Button';
import NavLink from './NavBar/NavLink';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';

const Menu = styled.article`
  position: sticky;
  top: 0;
  display: flex;
  padding: 20px 120px;

  .hamburger {
    position: absolute;
    top: 20px;
    right: 10px;
    cursor: pointer;
    color: white;
    font-size: 30px;
    display: none;
  }

  @media screen and (max-width: 800px) {
    padding: 0px 20px;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.6);
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;

    .disp-none {
      display: none;
    }

    .hamburger {
      display: block;
    }
  }
`


const NavBar = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  const toggleNav = () => {
    setIsOpen(isOpen => !isOpen);
  }
  // console.log(isOpen);
  const closeNav = () => {
    setIsOpen(false);
  }

  return (
    <Menu>
      <NavLink onClick={closeNav} respOpen={isOpen} className={isOpen ? '' : 'disp-none'} />
      <Button onClick={closeNav} respOpen={isOpen} className={isOpen ? '' : 'disp-none'} text="Sign In" />
      <FiMenu onClick={toggleNav} className='hamburger' />
    </Menu>
  )
}

export default NavBar;

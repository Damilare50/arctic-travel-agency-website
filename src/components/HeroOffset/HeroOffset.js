import React from 'react';
import styled from 'styled-components';

import LocationIcon from '../../images/location-icon.png';
import CalendarIcon from '../../images/calender-logo.png';
import ArrowDown from '../../images/arrow-down.png';
import PlaneIcon from '../../images/book-trip-icon.png';
import { FiUser } from 'react-icons/fi'

const Wrapper = styled.article`
  left: 10%;
  margin-right: 10%;
  min-height: 140px;
  max-height: fit-content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: absolute;
  padding: 0 20px;
  top: -70px;
  background-color: white;
  box-shadow: 0px 134px 193px rgba(183, 183, 183, 0.07), 0px 16.7789px 24.1666px rgba(183, 183, 183, 0.035);
  border-radius: 16px;
  
  div {
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 10px 20px;

    img {
      margin-right: 5px;
    }

    p {
      margin: 5px 0;
      text-transform: uppercase;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 27px;
      color: #000000;
    }

    p:first-child {
      font-size: 16px;
      line-height: 24px;
      color: #929191;
      letter-spacing: 0.08em;
    }
  }

  @media screen and (max-width: 400px) {
    left: 0%;
    margin-right: 0;

    div {
      padding: 10px 10px;
    }
  }
`

const Button = styled.button`
  display: flex;
  flex-direction: row;
  width: 200px;
  height: 64px;
  justify-content: center;
  align-items: center;
  padding: 22px 39px;
  background: #3E86F5;
  border-radius: 10px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
`

const HeroOffset = () => {
  return (
    <Wrapper>
      <div>
        <p><img src={LocationIcon} alt="location-logo" /> location</p>
        <p>Iceland <img src={ArrowDown} alt="arrow-down" /></p>
      </div>
      <div>
        <p><FiUser /> persons</p>
        <p>4 Persons <img src={ArrowDown} alt="arrow-down" /></p>
      </div>
      <div>
        <p><img src={CalendarIcon} alt="calendar-logo" /> Check In</p>
        <p>12th January 2022 <img src={ArrowDown} alt="arrow-down" /></p>
      </div>
      <div>
        <p><img src={CalendarIcon} alt="calendar-logo" /> Check out</p>
        <p>18th January 2022 <img src={ArrowDown} alt="arrow-down" /></p>
      </div>
      <div>
        <Button>
          Sign Up &nbsp;<img src={PlaneIcon} alt="" />
        </Button>
      </div>
    </Wrapper>
  )
}

export default HeroOffset;
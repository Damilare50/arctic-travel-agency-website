import React from 'react';
import styled from 'styled-components';

import LocationIcon from '../../images/location-icon.png';
import CalendarIcon from '../../images/calender-logo.png';
import ArrowDown from '../../images/arrow-down.png';
import PlaneIcon from '../../images/book-trip-icon.png';
import { FiUser } from 'react-icons/fi'

const Wrapper = styled.article`
  /* width: 1200px; */
  max-width: calc(100% - 240px);
  height: 140px;
  max-height: fit-content;
  display: grid;
  margin: 0px 120px;
  position: absolute;
  padding: 0 20px;
  top: -70px;
  background-color: white;
  grid-template-columns: repeat(auto-fit, minmax(205px, 205px));
  grid-column-gap: 10px;
  box-shadow: 0px 134px 193px rgba(183, 183, 183, 0.07), 0px 16.7789px 24.1666px rgba(183, 183, 183, 0.035);
  border-radius: 16px;
  
  div {
    display: flex;
    flex-direction: column;
    margin: auto;
    /* padding: 20px 0; */

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
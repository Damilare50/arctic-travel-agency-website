import React from 'react';
import styled from 'styled-components';
import LogoIcon from '../../images/logo-icon-alt.png';
import FacebookIcon from '../../images/facebook-icon.png';
import InstagramIcon from '../../images/instagram-icon.png';
import TwitterIcon from '../../images/twitter-icon.png';

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: start;

  img.logo {
    margin-bottom: 10px;
  }

  div.details {
    display: flex;
    flex-direction: column;
    flex-basis: auto;

    h5 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    margin-top: 0;
    margin-bottom: 0;
    letter-spacing: -0.02em;
    color: #000000;
    }

    p {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 170%;
      width: 217.63px;
      color: rgba(0, 0, 0, 0.7);
    }
  }

  div.social {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 20px;

    img {
      width: 40px;
      height: 40px;
    }
  }
`

const FooterDetails = () => {
  return (
    <Wrapper>
      <img src={LogoIcon} alt="logo-icon" className='logo' />
      <div className='details'>
        <h5>Artic Travels</h5>
        <p>Book your trip in minutes, get full control for much longer.</p>
      </div>
      <div className='social'>
        <img src={FacebookIcon} alt="fb-icon" />
        <img src={InstagramIcon} alt="ig-icon" />
        <img src={TwitterIcon} alt="tl-icon" />
      </div>
    </Wrapper>
  )
}

export default FooterDetails;
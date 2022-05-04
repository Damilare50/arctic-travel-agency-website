import React from 'react';
import styled from 'styled-components';

const Img = styled.article`
  background: url(${props => props.url}), #3E86F5;
  margin-left: 40px;
  width: 484px;
  height: 711px;
  border-radius: 20px;
  margin-bottom: 20px;
  margin-right: 0;
  position: relative;
  transition-duration: 2s;

  div {
    display: none;
  }

  :hover {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.563442) 60.97%, rgba(0, 0, 0, 0.65) 100%), url(${props => props.hover}), #3E86F5;

    div {
      display: block;
      position: absolute;
      bottom: 40px;
      left: 25px;
      text-align: start;
      

      h5 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 42px;
        color: #FFFFFF;
      }

      p {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        color: rgba(255, 255, 255, 0.5);
      }

      button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 22px 39px;
        width: 436px;
        background: #3E86F5;
        border-radius: 10px;
        border: none;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #FFFFFF;
      }
    }
  }
`

const HoverImg = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.563442) 60.97%, rgba(0, 0, 0, 0.65) 100%), url(${props => props.bgImg}), #3E86F5;
  width: 484px;
  height: 711px;
  border-radius: 20px;
  margin-left: 40px;
  margin-bottom: 20px;
  position: relative;

  div {
    position: absolute;
    bottom: 40px;
    left: 25px;
    text-align: start;
    

    h5 {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 28px;
      line-height: 42px;
      color: #FFFFFF;
    }

    p {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 27px;
      color: rgba(255, 255, 255, 0.5);
    }

    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 22px 39px;
      width: 436px;
      background: #3E86F5;
      border-radius: 10px;
      border: none;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #FFFFFF;
    }
  }
`

const Image = ({hoverImg, url, bgImg}) => {
  if (bgImg) {
    return (
      <HoverImg bgImg={url}>
        <div>
          <h5>Winter landscape Chalet</h5>
          <p>Cambodia</p>
          <button>Book here</button>
        </div>
      </HoverImg>
    )
  }
  return (
    <Img hover={hoverImg} url={url} alt="gallery-image">
      <div>
        <h5>Winter landscape Chalet</h5>
        <p>Cambodia</p>
        <button>Book here</button>
      </div>
    </Img>
  )
}

export default Image;
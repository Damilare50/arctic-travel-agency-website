import React from 'react';
import styled from 'styled-components';
import ImagePiece from './ImageFrameContent/ImagePiece';
import Banner1 from '../images/mountain-resort-image.png';
import Banner2 from '../images/fuji-mountain.png';
import Banner3 from '../images/freezing-mountain.png';

const Wrapper = styled.article`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;


`

const ImageFrameContainer = () => {
  return (
    <Wrapper>
      <ImagePiece image={Banner1} text="Mountain Resort" />
      <ImagePiece image={Banner2} text="Fuji Mountain" />
      <ImagePiece image={Banner3} text="Freezing Winterlake" />
    </Wrapper>
  )
}

export default ImageFrameContainer;
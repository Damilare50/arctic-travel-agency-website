import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 33.3%;
  height: inherit;
`

const ImagePiece = ({image}) => {
  return (
    <Image src={image}/>
  )
}

export default ImagePiece;
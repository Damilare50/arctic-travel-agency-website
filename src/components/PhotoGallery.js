import React from 'react';
import styled from 'styled-components';
import Image from './PhotoGallery/Image';
import GalleryImg0 from '../images/gallery-img-0.png';
import GalleryImg1 from '../images/gallery-img-1.png';
import GalleryImg2 from '../images/gallery-img-2.png';
import GalleryImg3 from '../images/gallery-img-3.png';

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 50% 47%;
  padding: 85px 120px 85px 120px;


  section.first {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  h2 {
    text-align: start;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 65px;
    letter-spacing: -0.02em;
    color: #000000;
    margin-top: 0;
    margin-bottom: 70px;
  }
  
`

const PhotoGallery = () => {
  return (
    <Wrapper>
      <section className='first'>
        <h2>The best resorts to chill and relax</h2>
        <Image hoverImg={GalleryImg3} url={GalleryImg0} />
        <Image hoverImg={GalleryImg3} url={GalleryImg1} />
      </section>
      <section>
        <Image url={GalleryImg3} bgImg={true} />
        <Image hoverImg={GalleryImg3} url={GalleryImg2} />
      </section>
    </Wrapper>
  )
};

export default PhotoGallery;
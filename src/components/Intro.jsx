import React from 'react';
import styled from 'styled-components';

const VideoStyles = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  height: auto;
  width: auto;
  min-height: 100%;
  min-width: 100%;
  z-index: -999;
  background-color: black;
  display: flex;
  justify-content: center;  

  figure {
    margin: 0;
    position: relative;
  }

  video {
    transform: translateX(10rem);

    @media ${props => props.theme.size.lg} {
      height: 100vh;
      transform: translateX(0);
    }
  }
`;

const IntroText = styled.div`
  height: 150vh;
  min-height: 100%;
  min-width: 100%;
  background-size: cover;
  margin-top: 800px;
  p {
    color: white;
    margin: 0 2.5rem;
    font-size: 1.7rem;
    line-height: 3rem;
    @media ${props => props.theme.size.xl} {
      margin: 0 12.5rem;
      padding-left: 30rem;
      font-size: 2rem;
      line-height: 4rem;
    }
    @media ${props => props.theme.size.lg} {
      margin: 0 12.5rem;
      padding-left: 15rem;
      font-size: 2rem;
      line-height: 4rem;
    }
  }
`;

const Intro = () => {
  return (
    <>
      <VideoStyles>
        <video
          src="./intro.mp4"
          autoPlay={true}
          loop={true}
          muted={true}
        >
        </video>
      </VideoStyles>

      <IntroText>
        <p>
          What goes on inside plants? They may look still, but there’s actually a lot happening, if you look
          a little closer. The video playing right now shows mitochondria, the energy producers of the
          cell, whizzing around as they go about their very important business.
        </p>
      </IntroText>
    </>
  );
}

export default Intro;
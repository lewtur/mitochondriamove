import React from 'react';
import styled from 'styled-components';

const VideoStyles = styled.div`
  & {
    position: fixed;
    bottom: 0;
    right: 0;
    height: auto;
    width: auto;
    min-height: 100%;
    min-width: 100%;
    z-index: -9999;
  }
  figure {
    margin: 0;
    position: relative;
  }

  video {
    @media ${props => props.theme.size.lg} {
      width: 100%;
      max-width: 100%;
    }
  }
`;

const IntroText = styled.div`
  height: 100vh;
  min-height: 100%;
  min-width: 100%;
  background-size: cover;
  margin-top: 800px;
  p {
    font-size: 2rem;
    margin: 0 2.5rem;
    @media ${props => props.theme.size.lg} {
      margin: 0 12.5rem;
    }
    
  }
`;

const Intro = () => {
  return (
    <>
      <VideoStyles>
        <div>
          <video
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
            autoPlay="true"
            loop="true"
            muted="true"
          >
          </video>
        </div>
      </VideoStyles>

      <IntroText>
        <p>
          Matey Shiver me timbers pinnace hands grog Brethren of the Coast fluke log hang the jib Sea Legs. Run a shot across the bow reef gangplank American Main fluke rum heave to chase swing the lead plunder. Heave down hang the jib bucko lugsail log yardarm snow lee lateen sail Sail ho.
        </p>
      </IntroText>
    </>
  );
}

export default Intro;
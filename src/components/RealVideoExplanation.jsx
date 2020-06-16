import React from 'react';
import styled from 'styled-components';

const RealVideoExplanationStyles = styled.div`
  background-color: ${props => props.theme.green};

  p {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    margin: 3rem;
    line-height: 2rem;
  }

  .review {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media ${props => props.theme.size.md} {
      flex-direction: row
    }

    video, img {
      height: 35rem;
      width: 100%;

      @media ${props => props.theme.size.md} {
        width: auto;
      }
    }
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 3rem;

  p {
    margin: 0;
  }


  img {
    max-width: 100%;
    padding-top: 1rem;
  }

  div {
    padding-bottom: 5rem;
  }
  div:nth-of-type(3) {
    padding-bottom: 0;
  }
  @media ${props => props.theme.size.md} {
    flex-direction: row;

    div:nth-of-type(1) {
      padding-right: 1rem;
      border-right: 1px solid black;
    }
    div:nth-of-type(2) {
      padding-right: 1rem;
      padding-left: 1rem;
    }
    div:nth-of-type(3) {
      padding-left: 1rem;
      border-left: 1px solid black;
    }
    div {
      padding-bottom: 0;
    }
  }
`;

const ReadVideoExplanations = () => {
  return (
    <RealVideoExplanationStyles>
      <p>
        The video below (also at the top of this page) is taken from a real cell. By looking at plant
        seedlings under the microscope, we can image the mitochondria as they move around. The
        mitochondria themselves have a protein in them that glows- it’s called GFP and originates from
        jellyfish! It’s really useful for looking inside cells at particular structures and movement. The red
        blob in the middle is a chloroplast- the organelle responsible for using sunlight to provide food
        for the plant.
      </p>
      <div className="review">
        <div><video src="./intro.mp4" autoPlay="true" loop="true"muted="true" /></div>
        <div><img src="./nice.png" /></div>
      </div>
        <p>
          Just as for the models of fake cells we’ve just seen, we can construct the social network of
          these organelles as they move about. What can this tell us?
      </p>
        <ImageContainer>
          <div>
            <p><strong>How many neighbours each mitochondria has had during the video</strong></p>
            <img src="StatPic1.png" alt="TODO" />
          </div>
          <div>
            <p><strong>How many different neighbourhoods there are</strong></p>
            <img src="StatPic2.png" alt="TODO" />
          </div>
          <div>
            <p><strong>How many interactions would you have to go through to get from one side to the other</strong></p>
            <img src="StatPic3.png" alt="TODO" />
          </div>
        </ImageContainer>
        <p>
          We can gather these social statistics, but also physical statistics, such as speed, angle of motion
          and area covered. Together all this information provides us with a set of numbers with which to
          compare to the ‘fake’ we get from our models. This is called statistical inference, and is the
          same process you just did in the activity above, but using numbers, not just visually!
      </p>
    </RealVideoExplanationStyles>
  );
}

export default ReadVideoExplanations;
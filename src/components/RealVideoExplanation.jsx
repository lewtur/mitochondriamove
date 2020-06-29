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

  p:last-of-type {
    margin-bottom: 0;
    padding-bottom: 3rem;
  }

  p:first-of-type {
    margin-top: 0;
    padding-top: 2rem;
  }

  .review {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div {
      height: 30rem;

      &:first-of-type {
        padding-bottom: 1rem;
      }

      @media ${props => props.theme.size.md} {
        height: 20rem;
        padding-bottom: 0!important;
      }

      @media ${props => props.theme.size.lg} {
        height: 35rem;
      }
    }

    @media ${props => props.theme.size.md} {
      justify-content: space-around;
      flex-direction: row
    }

    video, img {
      height: 100%;
      max-width: 100%;

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
        <div>
          <video src="./intro.mp4" autoPlay={true} loop={true} muted={true} />
        </div>
        <div>
          <img loading="lazy" src="./nice.png" alt="Social network of the video" />
        </div>
      </div>
      <p>
        Just as for the models of fake cells we’ve just seen, we can construct the social network of
        these organelles (shown above) as they move about. What can this tell us?
      </p>
      <ImageContainer>
        <div>
          <p><strong>How many neighbours each mitochondria has had during the video</strong></p>
          <img loading="lazy" src="StatPic1.png" alt="Diagram showing a graph which has one red node, connected to four black nodes, showing that the red node has 4 neighbours." />
        </div>
        <div>
          <p><strong>How many different neighbourhoods there are</strong></p>
          <img loading="lazy" src="StatPic2.png" alt="Diagram showing 5 clusters of nodes in a graph, showing that there are 5 neighborhoods in this network" />
        </div>
        <div>
          <p><strong>How many interactions would you have to go through to get from one side to the other</strong></p>
          <img loading="lazy" src="StatPic3.png" alt="Diagram showing one cluster of nodes and a highlighted path going from one side to the other" />
        </div>
      </ImageContainer>
      <p>
        We can gather these social statistics, but also physical statistics, such as speed, angle of motion
        and area covered. Together all this information provides us with a set of numbers with which to
        compare to the ‘fake’ we get from our models. This is called statistical inference, and is the
        same process you just did in the activity above, but using numbers, not just visually!
      </p>
      <p>
        Together, conclusions we make about how mitochondria move around plant cells help us ask
        questions about the efficiency of the system, why plant mitochondria have evolved to move this
        way, and how we as scientists can transfer this knowledge to crop species- in the hope that we
        can contribute to making sure our growing population has enough food to eat.
      </p>
      <p>
        Looking at these systems as a whole, and not just one part at a time, helps us to see patterns and
        relationships that would otherwise not be visible- one of the coolest things about studying
        networks!
      </p>
    </RealVideoExplanationStyles>
  );
}

export default ReadVideoExplanations;
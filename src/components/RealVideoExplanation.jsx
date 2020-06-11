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
      <p>
        Just as for the models of fake cells we’ve just seen, we can construct the social network of
        these organelles as they move about. What can this tell us?
      </p>
      <p>IMAGES</p>
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
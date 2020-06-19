import React from 'react';
import styled from 'styled-components';

const BuildupStyles = styled.div`
  background-color: black;
  color: white;

  p {
    font-size: 1.45rem;
    margin: 3rem 1.25rem;
    @media ${props => props.theme.size.md} {
        padding-left: 5rem;
        padding-right: 5rem;
    }
  }

  h1 {
    font-size: 2.75rem;
    text-align: center;
    padding-top: 2rem;
    margin-top: 0;
  }

  .image-container {
    display: flex;
    justify-content: center;
    img {
      width: 95%;
      @media ${props => props.theme.size.md} {
        width: 80%;
      }
    }
  }

`;

const Buildup = () => {
  return (
    <BuildupStyles>
      <h1>The social network of mitochondria</h1>
      <p>
        As they move around the cell, these mitochondria come within a close distance of each other-
        they interact. We can think of these interactions as a social network (think about your Facebook
        friends, a crowd of people or even a colony of ants moving about).
      </p>
      <p>
        An interaction here is when two mitochondria come close to each other. We draw each
        mitochondria as a blue blob (node) and each time they meet up, we draw a stick (edge)
        between them. This way we get a complete history of who has ‘met up’ with who!
      </p>
      <div className="image-container">
        <img src="./text1922.png" alt="Diagram showing how mitochondria passing near eachother forms a connection in a social network"></img>
      </div>
    </BuildupStyles>
  );
}

export default Buildup;
import React from 'react';
import styled from 'styled-components';

// can this component be replaced by the other?

const RealVideoExplanationStyles = styled.div`
  background-color: yellow;
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.size.md} {
    flex-direction: row;
  }

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
      <img src="https://cdn.hswstatic.com/gif/african-tree-frog.jpg" alt="TODO"></img>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
    </RealVideoExplanationStyles>
  );
}

export default ReadVideoExplanations;
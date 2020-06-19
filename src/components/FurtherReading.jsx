import React from 'react';
import styled from 'styled-components';

const FurtherReadingStyles = styled.div`
  background-color: #74a1cd;

  h2 {
    font-size: 1.85rem;
    padding-left: 2rem;
    margin-top: 0;
    padding-top: 2rem;
  }

  p {
    padding-left: 2rem;
    font-size: 1.25rem;
  }

  li {
    padding-bottom: 0.6rem;
  }

  ul {
    margin-bottom: 0;
    padding-bottom: 2rem;
    padding-right: 2rem;
  }
`;


const FurtherReading = () => {
  return (
    <FurtherReadingStyles>
      <h2>WANT TO KNOW MORE?</h2>
      <p>
        Where else do we see networks?
        There are complex social networks everywhere, have a look to see them in:
        <ul>
          <li><a href="https://time.com/118633/ant-intelligence-google/>" target="_blank" rel="noopener noreferrer">Ants</a></li>
          <li><a href="https://time.com/118633/ant-intelligence-google/>" target="_blank" rel="noopener noreferrer">Dancers</a></li>
          <li>and even <a href="https://time.com/118633/ant-intelligence-google/>" target="_blank" rel="noopener noreferrer">slime</a>!</li>
          </ul>
      </p>
      <p>
      Like videos? Me too! Check out these explainers on:
      <ul>
        <li><a href="https://www.youtube.com/watch?v=xT3EpF2EsbQ" target="_blank" rel="noopener noreferrer">Social network and their uses</a></li>
        <li><a href="https://youtu.be/FzcTgrxMzZk?t=230" target="_blank" rel="noopener noreferrer">Mitochondria and how they move</a></li>
        <li><a href="https://www.khanacademy.org/science/biology/structure-of-a-cell/tour-of-organelles/v/mitochondria-video" target="_blank" rel="noopener noreferrer">Mitochondrial structure</a></li>
        <li><a href="https://www.howplantswork.com/2010/04/25/chloroplast-movement-in-plant-cells-stirring-the-pot-avoiding-the-sun/" target="_blank" rel="noopener noreferrer">How and why chloroplasts move</a></li>
        </ul>
      </p>
    </FurtherReadingStyles>
  );
}

export default FurtherReading;
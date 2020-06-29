import React from 'react';
import styled from 'styled-components';

const FurtherReadingStyles = styled.div`
  background-color: #74a1cd;
  font-size: 1.25rem;

  h2 {
    font-size: 1.85rem;
    padding-left: 2rem;
    margin-top: 0;
    padding-top: 2rem;
  }

  p {
    padding-left: 2rem;

    &:last-of-type {
      padding-bottom: 2rem;
      padding-top: 2rem;
    }
  }

  li {
    padding-bottom: 0.6rem;
  }

  ul {
    margin-bottom: 0;
    padding-bottom: 2rem;
    padding-right: 2rem;
  }

  .pad {
    padding-top: 2rem;
  }
`;


const FurtherReading = () => {
  return (
    <FurtherReadingStyles>
      <h2>WANT TO KNOW MORE?</h2>
      <p>
        Where else do we see networks?
        There are complex social networks everywhere, have a look to see them in:
      </p>
      <ul>
        <li><a href="https://time.com/118633/ant-intelligence-google" target="_blank" rel="noopener noreferrer">Ants</a></li>
        <li><a href="https://www.princeton.edu/news/2019/02/21/improvised-dance-embodies-complexities-social-decisions" target="_blank" rel="noopener noreferrer">Dancers</a></li>
        <li>and even <a href="https://www.wired.com/2010/02/slime-molds/" target="_blank" rel="noopener noreferrer">slime</a>!</li>
      </ul>

      <p>
        Like videos? Me too! Check out these explainers on:
      </p>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=xT3EpF2EsbQ" target="_blank" rel="noopener noreferrer">Social networks and their uses</a></li>
        <li><a href="https://youtu.be/FzcTgrxMzZk?t=230" target="_blank" rel="noopener noreferrer">Mitochondria and how they move</a></li>
        <li><a href="https://www.khanacademy.org/science/biology/structure-of-a-cell/tour-of-organelles/v/mitochondria-video" target="_blank" rel="noopener noreferrer">Mitochondrial structure</a></li>
        <li><a href="https://www.howplantswork.com/2010/04/25/chloroplast-movement-in-plant-cells-stirring-the-pot-avoiding-the-sun/" target="_blank" rel="noopener noreferrer">How and why chloroplasts move</a></li>
      </ul>
      <p>
        A big thank-you to David Logan, who developed the plant lines this work uses; you can find his
        publications <a href="https://www6.angers-nantes.inrae.fr/irhs_eng/Contacts-and-Location/Staff-directory/LOGAN_DC" target="_blank" rel="noopener noreferrer">here</a>
      </p>
      <p>
        And also to the awesome stochastic biology team- Find out more about what we do <a href="https://org.uib.no/stochasticbiology/" target="_blank" rel="noopener noreferrer">here</a>
      </p>
    </FurtherReadingStyles>
  );
}

export default FurtherReading;
import React from 'react';
import styled from 'styled-components';

const CarStyles = styled.div`
  display: flex;
  background-color: ${props => props.theme.green};
  flex-direction: column;

  p {
    font-size: 1.45rem;
    margin: 3rem;
    line-height: 2.5rem;
  }

  .top {
    display: flex;
    flex-direction: column;
    @media ${props => props.theme.size.md} {
      flex-direction: row;
    }

    p {
      margin-bottom: 0;
    }
  }

  .bottom {
    p {
      @media ${props => props.theme.size.md} {
        padding: 0 5rem;
      }
    }
  }

  video {
    object-fit: none;
  }

  .video-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    @media ${props => props.theme.size.md} {
      width: 50%;
    }
  }
`;

const Car = () => {
  return (
    <>
      <CarStyles>
        <div className="top">
          <div className="video-container">
            <video
              src="./output_768.mp4"
              autoPlay="true"
              loop="true"
              muted="true"
            />
            <span>Free Stock Footage by <a href="http://www.videezy.com">Videezy.com</a> </span>
          </div>
          <p>
            Imagine a city with cars moving through it. This is a busy place. Each car has a different driver,
            and they’re all carrying different items to deliver or transport across the city. There are many
            routes cross the city, some on the main roads, highways that cut through the city. Travelling
            along these is the quickest route the city, but the cars must pay to use them. When the cars get
            off the highway, they must use side streets to get to their destination, and the cars can’t move
            as fast- but once they reach their destination, they can make their delivery!
        </p>
        </div>
        <div className="bottom">
          <p>
            The movement of mitochondria in the cell can be thought of in the same way. Each
            mitochondrion (car) has a different amount of mtDNA (its driver), and carries a different
            amount of energy, metabolites and proteins (its cargo). The mitochondria can use actin
            filaments (highways) to move across the cell quickly, but must pay in ATP (the energy currency
            of the cell). These mitochondria move about the cell making deliveries, keeping the cell
            working- and delivering energy to where it’s needed the most!
          </p>
          <p>
            We study this movement in the city as whole. We know the population of mitochondria
            in plant cells move around in this way, but we’re looking to go deeper- why would mitochondria
            moving in this way help the cell? We think it’s really important to look at the city as whole- not
            just look at one individual- one car- but all of it as one living, communicating, interacting
            system.
        </p>
        </div>
      </CarStyles>
    </>
  );
}

export default Car;
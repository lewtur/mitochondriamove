import React from 'react';
import styled from 'styled-components';

const CarStyles = styled.div`
  & {
    display: flex;
    background-color: green;
  }

  .text {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    margin: 3rem;
  }
`;

const Car = () => {
  return (
    <>
      <CarStyles>
        <img src="https://media.giphy.com/media/WPtzVOKMymmZrJv8fO/giphy.gif" />
        <div className="text"><p>Black jack scuppers wherry transom black spot yawl Davy Jones' Locker me to go on account loot. Parley rope's end bucko fluke Jolly Roger grog log tender Sea Legs rutters. Buccaneer Letter of Marque crack Jennys tea cup wherry chase guns Sail ho coffer driver hempen halter plunder.</p></div>
      </CarStyles>
    </>
  );
}
 
export default Car;
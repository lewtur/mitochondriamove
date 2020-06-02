import React, { useEffect } from 'react';
import styled from 'styled-components';

const ModelInfoStyles = styled.div`
  @keyframes slideDown {
    from { max-height: 0 }
    to { max-height: 20rem }
  }

  display: flex;
  animation-name: slideDown;
  animation-duration: 1.5s;
  animation-timing-function: ease-out;

  p {
    display: flex;
    font-size: 1.25rem;
    margin: 3rem;
  }
`;

const ModelInfo = ({
  show,
  imageUrl,
  explainerText
}) => {

  if (!show) {
    return <></>;
  }
  return (
    <ModelInfoStyles>
      {/* <img src={imageUrl} alt="TODO"></img> */}
      <p>{explainerText}</p>
    </ModelInfoStyles>
  );
}
 
export default ModelInfo;
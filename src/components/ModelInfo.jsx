import React from 'react';
import styled from 'styled-components';

const ModelInfoStyles = styled.div`

  display: flex;
  flex-direction: column;
  margin: 3rem 24rem;
  margin-top: 0;
  text-align: justify;
  line-height: 2rem;

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
      <p>{explainerText}</p>
      <img src={imageUrl} alt="TODO"></img>
    </ModelInfoStyles>
  );
}

export default ModelInfo;
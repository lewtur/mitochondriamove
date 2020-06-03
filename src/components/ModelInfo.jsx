import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ModelInfoStyles = styled.div`

  display: flex;
  flex-direction: column;
  margin: 3rem;
  margin-top: 0;
  text-align: justify;
  line-height: 2rem;

  @media ${props => props.theme.size.md} {
    flex-direction: row;
    margin: 6rem;
  }

  p {
    display: flex;
    font-size: 1.25rem;

    @media ${props => props.theme.size.md} {
      margin: 3rem;
    }
  }

  img {
    max-width: 100%;
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
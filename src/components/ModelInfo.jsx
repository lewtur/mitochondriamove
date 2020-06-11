import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Close = styled.div`
  text-align: center;
  margin: 0;
  margin-top: 1rem;
  font-size: 0.8rem;
  border: solid 1px;
  border-radius: 2rem;
  padding: 0rem 0.8rem;

  @media ${props => props.theme.size.md} {
    width: 12rem;
    margin-left: 3rem;
  }

  &:hover {
    cursor: pointer;
  }
`;

const ModelInfoStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem;
  margin-top: 0;
  text-align: justify;
  line-height: 2rem;

  @media ${props => props.theme.size.md} {
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
    max-width: 50%;
  }

  .image-and-text {
    display: flex;
    flex-direction: column;

    @media ${props => props.theme.size.md} {
      flex-direction: row;
    }
  }
`;

const ModelInfo = ({
  show,
  imageUrl,
  explainerText,
  close
}) => {

  if (!show) {
    return <></>;
  }

  return (
    <ModelInfoStyles>
      <div className="image-and-text">
        <p>{explainerText}</p>
        <img src={imageUrl} alt="TODO"></img>
      </div>
      <Close onClick={close}>
        CLOSE
      </Close>
    </ModelInfoStyles>
  );
}

export default ModelInfo;
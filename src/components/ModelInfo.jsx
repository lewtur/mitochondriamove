import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const customWidths = {
  "./models/1.png": "60%",
  "./models/2.png": "60%",
  "./models/3.png": "50%",
  "./models/4.png": "60%",
  "./models/5.png": "50%",
}

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
    font-size: 1.25rem;

    @media ${props => props.theme.size.md} {
      margin: 3rem;
    }
  }

  .text {
    display: flex;
    flex-direction: column;

    img {
      width: 25rem;
      margin-left: 3rem;
    }
  }

  .image-and-text {
    display: flex;
    flex-direction: column;
    max-height: 35rem;

    @media ${props => props.theme.size.md} {
      flex-direction: row;
    }
  }
`;

const Image = styled.img`
  max-width: ${props => props.customWidth};
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
        <div className="text">
          <p>{explainerText}</p>
          <img src="./NetworkKey.png"></img>
        </div>
        <Image src={imageUrl} customWidth={customWidths[imageUrl]} alt="TODO"></Image>
      </div>
      <Close onClick={close}>
        CLOSE
      </Close>
    </ModelInfoStyles>
  );
}

export default ModelInfo;
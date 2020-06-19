import React from 'react';
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
  margin-left: 3rem;
  margin-right: 3rem;
  padding-bottom: 2rem;
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
  }
  
  .image-and-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media ${props => props.theme.size.md} {
      flex-direction: row;
      max-height: 35rem;
    }
  }
`;

const Image = styled.img`
  max-width: 100%;
  
  @media ${props => props.theme.size.md} {
    max-width: ${props => props.customWidth};
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
        <div className="text">
          <p>{explainerText}</p>
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
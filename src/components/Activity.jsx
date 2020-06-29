import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import ModelInfo from './ModelInfo';

const modelUrls = [
  {
    gifUrl: "./models/1-loop.gif",
    imageUrl: "./models/1.png",
    explainerText: "The mitochondria are not going anywhere! They’re stuck in the same spot, and can’t travel, which means they can’t meet up. The social network here is very limited- there are barely any meet-ups at all.",
    altText: "Gif showing little green circles (mitochondria) moving around a black square (a plant cell). The mitochondria are barely moving and not interacting with each other."
  },
  {
    gifUrl: "./models/2-loop.gif",
    imageUrl: "./models/2.png",
    explainerText: "The mitochondria in the middle aren’t moving- this prevents interactions from happening, and also prevents the delivery of energy across the cell! Mitochondria around the outside of the cell are in a state of constantlu disappearing and reappearing- this gives many interactions between only a couple of mitochondria at a time- shown in the really high number of pairs of them in the social network!",
    altText: "Gif showing little green circles (mitochondria) moving around a black square (a plant cell). The mitochondria round the edges of the cell are moving rapidly, but the mitochondria in the middle of the cell are barely moving at all."
  },
  {
    gifUrl: "./models/3-loop.gif",
    imageUrl: "./models/3.png",
    explainerText: "There are lots of meet-ups happening here- but no spread across the cell! Imagine all delivery drivers in a city only going to two places- great for the people in those places, but not for the rest. The social network is really tightly packed, as there are so many individuals in one of two places all the time, and two individuals in the middle!",
    altText: "Gif showing little green circles (mitochondria) moving around a black square (a plant cell). The mitochondria are mostly bunched up in the bottom corner of the cell moving around each other, with a few more in the top corner of the cell moving around each other."
  },
  {
    gifUrl: "./models/4-loop.gif",
    imageUrl: "./models/4.png",
    explainerText: "Almost there! Although the individuals are moving quickly, they are not evenly spread across the cell. This is like a traffic jam for the cell- all the delivery drivers are close together, but stuck in one spot!",
    altText: "Gif showing little green circles (mitochondria) moving around a black square (a plant cell). The mitochondria are mostly hugging the edges of the cell, with a few stragglers in the middle of the cell."
  },
  {
    gifUrl: "./models/5-loop.gif",
    imageUrl: "./models/5.png",
    explainerText: "Good choice! These mitochondria get to move around the cell, and are not stuck in one region. They interact frequently, and make use of the highways (actin filaments) running through the cell. This gives a social network with lots of links, and the opportunity to pass information on to neighbouring mitochondria.",
    altText: "Gif showing little green circles (mitochondria) moving around a black square (a plant cell). The mitochondria are moving very freely around all parts of the cell."
  }
];

const ActivityStyles = styled.div`
  background-color: black;
  color: white;

  h1 {
    font-size: 3rem;
    text-align: center;
    padding-top: 2rem;
    margin-top: 0;
  }
  h2 {
    font-size: 1.75rem;
    text-align: center;
  }

  & > p {
    padding: 0 1.25rem;
    @media ${props => props.theme.size.md} {
      padding: 0 10rem;
    }
  }

  .intro-text {
    font-size: 1.5rem;
    padding-bottom: 1rem;
  }
`;

const ModelItem = styled.div`
  padding: 1rem;
  img {
    @media ${props => props.theme.size.md} {
      max-width: 100%;
      filter: alpha(opacity=75);
      opacity: .75;
    }

    &:hover {
      cursor: pointer;
      filter: alpha(opacity=100);
      opacity: 1;
    }
  }
`;

const ModelSlideshow = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 0 2.2rem;

  @media ${props => props.theme.size.md} {
    justify-content: center;
  }
`;

const ModelContainer = styled.div`
  position: relative;

  .arrow {
    position: absolute;
    top: 50%;
    color: white;
    font-size: 2rem;

    &.right {
      left: 90%;
    }
    &.left {
      left: 3%;
    }
  }

  @media ${props => props.theme.size.md} {
    .arrow {
      display: none;
    }
  }
`;

const Activity = () => {
  const clickModel = index => {
    if (!atLeastOneClicked) {
      setAtLeastOneClicked(true);
    }
    setCurrentlySelectedModel(index);

    if (index === currentlySelectedModel && showModelInfo) {
      setShowModelInfo(false)
    } else {
      setShowModelInfo(true);
    }
  }

  const closeModel = () => {
    setShowModelInfo(false);
    window.scrollTo({
      behavior: "smooth",
      top: slideshowRef.current.offsetTop - 200
    });
  }

  const [atLeastOneClicked, setAtLeastOneClicked] = useState(false);
  const [showModelInfo, setShowModelInfo] = useState(false);
  const [currentlySelectedModel, setCurrentlySelectedModel] = useState(0);

  const modelInfoRef = useRef(null);
  const slideshowRef = useRef(null);

  useEffect(() => {
    if (showModelInfo) {
      window.ga('send', 'event', 'Model clicked', 'click', currentlySelectedModel)
      window.scrollTo({
        behavior: "smooth",
        top: modelInfoRef.current.offsetTop - 200
      });
    } else if (atLeastOneClicked) {
      window.scrollTo({
        behavior: "smooth",
        top: slideshowRef.current.offsetTop - 200
      })
    }
  }, [currentlySelectedModel, showModelInfo, atLeastOneClicked]);

  return (
    <>
      <ActivityStyles>
        <h1>Activity</h1>
        <p className="intro-text">
          To better understand the movement of these mitochondria, it helps to create fake cells, where
          we control how fast the mitochondria move, how many highways (filaments) they have to
          move on, and even how big the cell is.
        </p>
        <p className="intro-text">
          We can then work out how different kinds of movement
          help or hinder their travels across the cell, and the interactions they have with each other.
        </p>
        <p className="intro-text">
          <strong>Below are 5 of these ‘fake’ cells- can you choose which one helps the mitochondria meet up the most, while covering the most area?</strong>
        </p>
        <ModelContainer ref={slideshowRef}>
          <ModelSlideshow>
            {modelUrls.map((model, index) => (
              <ModelItem onClick={() => clickModel(index)} key={`model-${index}`}>
                <img loading="lazy" src={model.gifUrl} alt={model.altText} />
              </ModelItem>
            ))}
          </ModelSlideshow>
          <div className="arrow left">⇦</div>
          <div className="arrow right">⇨</div>
        </ModelContainer>
        <div ref={modelInfoRef}>
          <ModelInfo
            show={showModelInfo}
            imageUrl={modelUrls[currentlySelectedModel].imageUrl}
            explainerText={modelUrls[currentlySelectedModel].explainerText}
            close={closeModel}
          />
        </div>
      </ActivityStyles>
    </>
  );
}

export default Activity;
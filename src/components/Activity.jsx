import React, { useState } from 'react';
import styled from 'styled-components';
import ModelInfo from './ModelInfo';

// todo move to a file?
const modelUrls = [
  {
    gifUrl: "./models/1.gif",
    imageUrl: "./models/1.jpg",
    explainerText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum fusce ut placerat orci nulla pellentesque. Nisi est sit amet facilisis magna etiam tempor orci. Congue mauris rhoncus aenean vel. At erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Tortor at risus viverra adipiscing at in tellus integer feugiat."
  },
  {
    gifUrl: "./models/2.gif",
    imageUrl: "./models/2.jpg",
    explainerText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum fusce ut placerat orci nulla pellentesque. Nisi est sit amet facilisis magna etiam tempor orci. Congue mauris rhoncus aenean vel. At erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Tortor at risus viverra adipiscing at in tellus integer feugiat."
  },
  {
    gifUrl: "./models/3.gif",
    imageUrl: "./models/3.jpg",
    explainerText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum fusce ut placerat orci nulla pellentesque. Nisi est sit amet facilisis magna etiam tempor orci. Congue mauris rhoncus aenean vel. At erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Tortor at risus viverra adipiscing at in tellus integer feugiat."
  },
  {
    gifUrl: "./models/4.gif",
    imageUrl: "./models/4.jpg",
    explainerText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum fusce ut placerat orci nulla pellentesque. Nisi est sit amet facilisis magna etiam tempor orci. Congue mauris rhoncus aenean vel. At erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Tortor at risus viverra adipiscing at in tellus integer feugiat."
  },
  {
    gifUrl: "./models/5.gif",
    imageUrl: "./models/5.jpg",
    explainerText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum fusce ut placerat orci nulla pellentesque. Nisi est sit amet facilisis magna etiam tempor orci. Congue mauris rhoncus aenean vel. At erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Tortor at risus viverra adipiscing at in tellus integer feugiat."
  }
];

const ActivityStyles = styled.div`
  & {
    background-color: black;
    color: white;
  }

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
`;

const ModelItem = styled.div`
  padding: 1rem;
  img {
    @media ${props => props.theme.size.md} {
      max-width: 100%;
      filter: alpha(opacity=60);
      opacity: .6;
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
  justify-content: center;
  overflow-x: auto;
  padding: 0 2.2rem;
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
    setCurrentlySelectedModel(index);

    if (index === currentlySelectedModel && showModelInfo) {
      setShowModelInfo(false)
    } else {
      setShowModelInfo(true);
    }
  }

  const [showModelInfo, setShowModelInfo] = useState(false);
  const [currentlySelectedModel, setCurrentlySelectedModel] = useState(0);

  return (
    <>
      <ActivityStyles>
        <h1>Activity</h1>
        <h2>Choose a thing</h2>
        <ModelContainer>
          <ModelSlideshow>
            {modelUrls.map((model, index) => (
              <ModelItem onClick={() => clickModel(index)}>
                <img src={model.gifUrl} alt="TODO" />
              </ModelItem>
            ))}
          </ModelSlideshow>
          <div className="arrow left">⇦</div>
          <div className="arrow right">⇨</div>
          <ModelInfo
            show={showModelInfo}
            imageUrl={modelUrls[currentlySelectedModel].imageUrl}
            explainerText={modelUrls[currentlySelectedModel].explainerText}
          />
        </ModelContainer>
      </ActivityStyles>
    </>
  );
}

export default Activity;
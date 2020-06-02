import React, { useState } from 'react';
import styled from 'styled-components';
import ModelInfo from './ModelInfo';

// todo move to a file?
const modelUrls = [
  {
    gifUrl: "https://media.giphy.com/media/5820U8HNbriEalrI0K/giphy.gif",
    imageUrl: "https://amayei.nyc3.digitaloceanspaces.com/2019/10/58e336b26ee69cbfb21d906c57b8ac8f9cb53bdf.jpg",
    explainerText: "Model 1"
  },
  {
    gifUrl: "https://media.giphy.com/media/5820U8HNbriEalrI0K/giphy.gif",
    imageUrl: "https://amayei.nyc3.digitaloceanspaces.com/2019/10/58e336b26ee69cbfb21d906c57b8ac8f9cb53bdf.jpg",
    explainerText: "Model 2"
  },
  {
    gifUrl: "https://media.giphy.com/media/5820U8HNbriEalrI0K/giphy.gif",
    imageUrl: "https://amayei.nyc3.digitaloceanspaces.com/2019/10/58e336b26ee69cbfb21d906c57b8ac8f9cb53bdf.jpg",
    explainerText: "Model 3"
  },
  {
    gifUrl: "https://media.giphy.com/media/5820U8HNbriEalrI0K/giphy.gif",
    imageUrl: "https://amayei.nyc3.digitaloceanspaces.com/2019/10/58e336b26ee69cbfb21d906c57b8ac8f9cb53bdf.jpg",
    explainerText: "Model 4"
  },
  {
    gifUrl: "https://media.giphy.com/media/5820U8HNbriEalrI0K/giphy.gif",
    imageUrl: "https://amayei.nyc3.digitaloceanspaces.com/2019/10/58e336b26ee69cbfb21d906c57b8ac8f9cb53bdf.jpg",
    explainerText: "Model 5"
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
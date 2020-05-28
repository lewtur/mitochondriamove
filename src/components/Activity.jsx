import React from 'react';
import styled from 'styled-components';

const gifUrls = [
  "https://media.giphy.com/media/5820U8HNbriEalrI0K/giphy.gif",
  "https://media.giphy.com/media/5820U8HNbriEalrI0K/giphy.gif",
  "https://media.giphy.com/media/5820U8HNbriEalrI0K/giphy.gif",
  "https://media.giphy.com/media/5820U8HNbriEalrI0K/giphy.gif",
  "https://media.giphy.com/media/5820U8HNbriEalrI0K/giphy.gif"
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

const GifItem = styled.div`
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

const GifSlideshow = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 0 2.2rem;
`;

const GifContainer = styled.div`
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
  return (
    <>
      <ActivityStyles>
        <h1>Activity</h1>
        <h2>Choose a thing</h2>
        <GifContainer>
          <GifSlideshow>
            {gifUrls.map(gif => (
              <GifItem>
                <img src={gif} alt="TODO" />
              </GifItem>
            ))}
          </GifSlideshow>
          <div className="arrow left">⇦</div>
          <div className="arrow right">⇨</div>
        </GifContainer>
      </ActivityStyles>
    </>
  );
}

export default Activity;
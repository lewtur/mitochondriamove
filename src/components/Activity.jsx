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
    max-width: 100%;
    filter: alpha(opacity=60);
    opacity: .6;
    &:hover {
      cursor: pointer;
      filter: alpha(opacity=100);
      opacity: 1;
    }
  }
`;

const GifContainer = styled.div`
  display: flex;
`;

const Activity = () => {
  return (
    <>
      <ActivityStyles>
        <h1>Activity</h1>
        <h2>Choose a thing</h2>
        <GifContainer>
          {gifUrls.map(gif => (
            <GifItem>
              <img src={gif} />
            </GifItem>
          ))}
        </GifContainer>
      </ActivityStyles>
    </>
  );
}

export default Activity;
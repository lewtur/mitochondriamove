import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  padding: 1.5rem;

  .text {
    width: 100%;
  }

  .logos {
    display: flex;
      flex-wrap: wrap;
      align-items: center;
    div {
      max-width: 15rem;
      padding-right: 2rem;
      img {
        width: 100%;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyles>
      <div>This research is supported by</div>
      <div className="logos">
        <div><img src="./Logo1.png" alt="TODO"></img></div>
        <div><img src="./Logo2.png" alt="TODO"></img></div>
        <div><img src="./Logo3.png" alt="TODO"></img></div>
      </div>
    </FooterStyles>
  );
}

export default Footer;
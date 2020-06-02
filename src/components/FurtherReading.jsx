import React from 'react';
import styled from 'styled-components';

const FurtherReadingStyles = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;

  @media ${props => props.theme.size.md} {
    flex-direction: row;
  }
`;

const Section = styled.div`
  background-color: ${props => props.colour};
  width: 100%;

  h3 {
    text-align: center;
    font-size: 1.25rem;
  }

  p {
    padding: 2rem;
    font-size: 1.2rem;
  }
`;

const FurtherReading = () => {
  return (
    <FurtherReadingStyles>
      <Section colour="pink">
        <h3>Mito</h3>
        <p>Et pharetra pharetra massa massa ultricies mi quis. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Orci phasellus egestas tellus rutrum tellus pellentesque. Aliquet eget sit amet tellus. Pharetra pharetra massa massa ultricies. Orci a scelerisque purus semper eget duis at tellus at. Urna id volutpat lacus laoreet non.</p>
      </Section>
      <Section colour="saddlebrown">
        <h3>Network</h3>
        <p>Amet nisl suscipit adipiscing bibendum est ultricies integer. Sit amet justo donec enim diam vulputate ut pharetra sit. Vitae elementum curabitur vitae nunc sed velit. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Dictum varius duis at consectetur lorem.</p>
      </Section>
      <Section colour="brown">
        <h3>Higher academical content</h3>
        <p>Varius duis at consectetur lorem donec massa sapien faucibus. Ante in nibh mauris cursus. Convallis posuere morbi leo urna molestie at elementum. Augue ut lectus arcu bibendum at varius. Aliquet risus feugiat in ante. Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget. Quis viverra nibh cras pulvinar mattis nunc.</p>
        </Section>
    </FurtherReadingStyles>
  );
}

export default FurtherReading;
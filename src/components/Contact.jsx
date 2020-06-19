import React from 'react';
import styled from 'styled-components';

const ContactStyles = styled.div`
  background-color: wheat;

  h2 {
    font-size: 1.85rem;
    padding-left: 2rem;
    margin-top: 0;
    padding-top: 2rem;
  }

  p {
    padding: 1rem 2rem;
    font-size: 1.75rem;
  }
`;

const ContactHolder = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;

  .contact {
    padding-left: 2rem;
    padding-bottom: 1.5rem;
    i {
      padding-right: 1.25rem;
    }
  }
`;

const Contact = () => {
  return (
    <ContactStyles>
      <h2>GET IN CONTACT</h2>
      <p>I'd love to hear from you! If you enjoyed the site or if you have any further questions - ask me anything!</p>
      <ContactHolder>
        <div className="contact">
          <i className="fas fa-envelope"></i>
          <a href="mailto:joannachustecki@swag.com">Email me</a>
        </div>
        <div className="contact">
          <i className="fab fa-twitter"></i>
          <a href="https://twitter.com">Tweet me</a>
        </div>
      </ContactHolder>
    </ContactStyles >
  );
}

export default Contact;
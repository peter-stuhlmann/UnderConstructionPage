import React from 'react';
import styled from 'styled-components';

// components
import Container from '../components/Container';
import SocialMedia from '../components/SocialMedia';

// data
import content from '../data/home';

export default function Home() {
  return (
    <Container main>
      <Heading>{content.heading}</Heading>
      <Text dangerouslySetInnerHTML={{ __html: content.text }} />
      <SocialMedia />
    </Container>
  );
}

const Heading = styled.h1`
  text-align: center;
  color: #1f1f2f;
  font-size: 2em;
`;

const Text = styled.p`
  text-align: center;
  color: #1f1f2f;
  font-size: 1.2em;
  max-width: 770px;

  @media (max-width: 480px) {
    font-size: 1em;
  }

  a {
    color: #ad9300;
    text-decoration: none;
  }
`;

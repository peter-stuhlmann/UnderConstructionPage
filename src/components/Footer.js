import React from 'react';
import styled from 'styled-components';

// components
import Container from '../components/Container';

// data
import footer from '../data/footer';

export default function Footer() {
  return (
    <Container footer>
      <Text dangerouslySetInnerHTML={{ __html: footer.content }} />
    </Container>
  );
}

const Text = styled.p`
  text-align: center;
  color: #aaa;
  font-size: 0.9em;
  margin: 0;

  a {
    color: #aaa;
    text-decoration: none;
  }

  @media (max-width: 480px) {
    span {
      &:first-child {
        display: none;
      }
      &:last-child {
        display: block;
      }
    }
  }
`;

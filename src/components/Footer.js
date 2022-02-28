import React from 'react';

// components
import Container from '../components/Container';

// data
import footer from '../data/footer';

export default function Footer() {
  return <Container footer>{footer.content}</Container>;
}

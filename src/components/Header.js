import React from 'react';

// components
import Container from '../components/Container';

// data
import header from '../data/header';

export default function Header() {
  return <Container header>{header.content}</Container>;
}

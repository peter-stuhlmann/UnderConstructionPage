import React from 'react';
import styled from 'styled-components';

import IconButton from '@mui/material/IconButton';

// components
import Container from './Container';

// data
import socialMedia from '../data/socialMedia';

export default function SocialMedia() {
  return (
    <Container>
      {socialMedia.map((item, index) => (
        <a key={index} href={item.href} title={item.title}>
          <Item>{item.icon}</Item>
        </a>
      ))}
    </Container>
  );
}

const Item = styled(IconButton)`
  svg {
    color: #1f1f2f;
  }
`;

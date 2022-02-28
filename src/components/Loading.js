import React from 'react';
import styled from 'styled-components';

import MuiCircularProgress from '@mui/material/CircularProgress';

// components
import Container from './Container';

export default function Loading() {
  return (
    <Container main>
      <CircularProgress />
    </Container>
  );
}

const CircularProgress = styled(MuiCircularProgress)`
  && {
    color: #1f1f2f;
  }
`;

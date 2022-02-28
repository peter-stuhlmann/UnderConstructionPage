import React from 'react';
import styled from 'styled-components';
import { useNavigate  } from 'react-router-dom';
import MuiButton from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// components
import Container from '../components/Container';

// data
import content from '../data/notFound';

export default function NotFound() {
  const navigate = useNavigate ();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <Container main>
      <Title>
        {content.title} <span>|</span> <span>{content.subtitle}</span>
      </Title>
      <Button
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        onClick={handleBackButtonClick}
      >
        Zurück
      </Button>
    </Container>
  );
}



const Title = styled.h1`
  color: #1f1f2f;
  text-align: center;
  font-size: 2em;

  span {
    color: #ad9300;
    font-size: 1em;

    @media (max-width: 768px) {
      display: block;
      font-size: clamp(0.5em, 5vw, 0.8em);
      margin-top: 10px;

      &:first-child {
        display: none;
      }
    }
  }
`;

const Button = styled(MuiButton)`
  && {
    color: #ad9300;
    background-color: #fff;
    border-radius: 19px;
    padding: 6px 20px;
    margin: 14px 0;
    border-color: #ad9300;
    position: absolute;
    bottom: 25vh;
    left: 50%;
    transform: translate(-50%, -50%);

    &:hover {
      background-color: #fafafa;
      border-color: #ad9300;
    }
  }
`;

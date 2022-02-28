import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

export default function Container(props) {
  const { footer, header, main, children } = props;

  switch (true) {
    case footer:
      return (
        <Footer>
          <div>{children}</div>
        </Footer>
      );
    case header:
      return (
        <Header>
          <div>{children}</div>
        </Header>
      );
    case main:
      return (
        <Main>
          <div>{children}</div>
        </Main>
      );
    default:
      return (
        <Section>
          <div>{children}</div>
        </Section>
      );
  }
}

const baseStyles = css``;

const Footer = styled.footer`
  ${baseStyles}
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = styled.header`
  ${baseStyles};
`;

const Main = styled.main`
  ${baseStyles};
  width: 100%;
  height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
`;

const Section = styled.section`
  ${baseStyles};
  display: flex;
  justify-content: center;
`;

Container.propTypes = {
  children: PropTypes.any,
  footer: PropTypes.bool,
  header: PropTypes.bool,
  main: PropTypes.bool,
};

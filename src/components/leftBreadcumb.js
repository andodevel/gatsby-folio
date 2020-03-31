import React from 'react';
import Breadcumb from './breadcumb';
import styled from 'styled-components';
import { Theme } from '@styles';
const { colors, fontSizes, fonts } = Theme;

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 150px;
    margin: 0 auto;
    background-color: ${colors.component};
  }
`;
const StyledEmailLink = styled.a`
  font-family: ${fonts.secondary};
  font-size: ${fontSizes.xs};
  letter-spacing: 0.1em;
  writing-mode: vertical-lr;
  transform: rotate(-180deg);
  margin: 20px auto;
  padding: 10px;

  &:hover,
  &:focus {
    transform: rotate(-180deg) translateY(5px);
  }
`;

const email = `ando.devel@gmail.com`;
const LeftBreadcumb = () => (
  <Breadcumb orientation="left">
    <StyledLinkWrapper>
      <StyledEmailLink href={`mailto:${email}`}>{email}</StyledEmailLink>
    </StyledLinkWrapper>
  </Breadcumb>
);

export default LeftBreadcumb;

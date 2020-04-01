import React from 'react';
import Breadcumb from './breadcumb';
import styled from 'styled-components';
import { Theme } from '@styles';
const { colors, fontSizes, fonts } = Theme;

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  position: relative;
`;
const StyledEmailLink = styled.a`
  font-family: ${fonts.secondary};
  font-size: ${fontSizes.xs};
  letter-spacing: 0.1em;
  writing-mode: vertical-lr;
  transform: rotate(-180deg);
  margin: 20px auto 0 auto;

  &:hover,
  &:focus {
    transform: rotate(-180deg) translateY(3px);
  }
`;

const StyledResumeLink = styled.a`
  font-family: ${fonts.secondary};
  font-size: ${fontSizes.xs};
  font-weight: 550;
  letter-spacing: 0.1em;
  writing-mode: vertical-lr;
  transform: rotate(-180deg);
  color: ${colors.component2};

  &:hover,
  &:focus {
    transform: rotate(-180deg) translateY(3px);
  }
`;

const email = `ando.devel@gmail.com`;
const LeftBreadcumb = () => (
  <Breadcumb orientation="left">
    <StyledLinkWrapper>
      <StyledResumeLink href="/resume.pdf" target="_blank" rel="nofollow noopener noreferrer">
        Résumé
      </StyledResumeLink>
      <StyledEmailLink href={`mailto:${email}`}>{email}</StyledEmailLink>
    </StyledLinkWrapper>
  </Breadcumb>
);

export default LeftBreadcumb;

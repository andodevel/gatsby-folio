import React from 'react';
import Breadcumb from './breadcumb';
import styled from 'styled-components';
import { Theme, Mixins } from '@styles';
const { colors } = Theme;

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  position: relative;
`;
const StyledEmailLink = styled.a`
  letter-spacing: 0.1em;
  writing-mode: vertical-lr;
  transform: rotate(-180deg);
  margin: 2rem auto 0 auto;
  color: ${colors.primaryComponent};

  &:hover,
  &:focus {
    transform: rotate(-180deg) translateY(0.3rem);
    color: ${colors.primaryComponentActive};
    font-weight: 600;
  }
`;

const StyledResumeLink = styled.a`
  ${Mixins.link};
  letter-spacing: 0.1em;
  writing-mode: vertical-lr;
  transform: rotate(-180deg);

  &:hover,
  &:focus {
    transform: rotate(-180deg) translateY(0.3rem);
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

import React from 'react';
import Breadcumb from './breadcumb';
import styled from 'styled-components';
import { Theme, Mixins } from '@styles';
const { colors } = Theme;

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.1rem;
  transform: rotate(-90deg);
`;
const StyledEmailLink = styled.a`
  ${Mixins.link};
  color: ${colors.primaryComponent};
  margin-left: 1.5rem;

  &:hover,
  &:focus {
    color: ${colors.primaryComponentActive};
    transform: translateY(0.1rem);
  }
  &:after {
    background-color: ${colors.primaryComponentActive};
  }
`;

const StyledResumeLink = styled.a`
  ${Mixins.link};

  &:hover,
  &:focus {
    transform: translateY(0.1rem);
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

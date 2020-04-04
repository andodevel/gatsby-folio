import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { Theme, Media } from '@styles';
const { colors, fonts } = Theme;

const StyledContainer = styled.div`
  width: 4rem;
  height: 100vh;
  position: fixed;
  left: ${props => (props.orientation === 'left' ? '5rem' : 'auto')};
  right: ${props => (props.orientation === 'left' ? 'auto' : '5rem')};
  ${Media.tablet`left: ${props => (props.orientation === 'left' ? '2rem' : 'auto')};`}
  ${Media.tablet`right: ${props =>
    props.orientation === 'left' ? '2rem' : 'auto'};`}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  z-index: 5;
  color: ${colors.primaryComponent};
  font-family: ${fonts.secondary};

  &:before {
    content: '}';
    display: inline;
    margin: 0 0 0.8rem 0.6rem;
    transform: rotate(-90deg);
    color: ${colors.primaryComponent};
  }

  &:after {
    content: '}';
    display: inline;
    margin: 0.8rem 0 0 0.9rem;
    transform: rotate(90deg);
    color: ${colors.secondaryComponent};
  }
`;

const Breadcumb = ({ children, orientation }) => (
  <StyledContainer orientation={orientation}>
    <TransitionGroup component={null}>
      <CSSTransition classNames={'fade'} timeout={3000}>
        {children}
      </CSSTransition>
    </TransitionGroup>
  </StyledContainer>
);

Breadcumb.propTypes = {
  children: PropTypes.node.isRequired,
  orientation: PropTypes.string,
};

export default Breadcumb;

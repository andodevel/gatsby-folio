import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { Theme } from '@styles';
const { colors, fonts } = Theme;

const StyledContainer = styled.div`
  width: 4rem;
  height: 100vh;
  position: fixed;
  left: ${props => (props.orientation === 'left' ? '5rem' : 'auto')};
  right: ${props => (props.orientation === 'left' ? 'auto' : '5rem')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  z-index: 5;
  color: ${colors.component};
  font-family: ${fonts.secondary};

  &:before {
    content: '}';
    display: inline;
    margin: 0 0 0.8rem 0.8rem;
    transform: rotate(-90deg);
    color: ${colors.component};
    font-weight: 400;
  }

  &:after {
    content: '}';
    display: inline;
    margin: 0.8rem 0 0 0.8rem;
    transform: rotate(90deg);
    color: ${colors.component2};
    font-weight: 400;
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

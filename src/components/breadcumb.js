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
  left: ${props => (props.orientation === 'left' ? '3rem' : 'auto')};
  right: ${props => (props.orientation === 'left' ? 'auto' : '3rem')};
  ${Media.tablet`left: ${props => (props.orientation === 'left' ? '2rem' : 'auto')};`}
  ${Media.tablet`right: ${props =>
    props.orientation === 'left' ? '2rem' : 'auto'};`}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5;
  color: ${colors.primaryComponent};
  font-family: ${fonts.secondary};
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

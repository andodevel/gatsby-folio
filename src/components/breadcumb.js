import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { Theme } from '@styles';
const { colors } = Theme;

const StyledContainer = styled.div`
  width: 40px;
  height: 100vh;
  position: fixed;
  left: ${props => (props.orientation === 'left' ? '30px' : 'auto')};
  right: ${props => (props.orientation === 'left' ? 'auto' : '30px')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5;
  color: ${colors.component};

  &:before {
    content: '}';
    display: inline;
    margin: 0 0 8px 3px;
    transform: rotate(-90deg);
    color: ${colors.component};
  }

  &:after {
    content: '}';
    display: inline;
    margin: 8px 0 0 3px;
    transform: rotate(90deg);
    color: ${colors.component2};
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

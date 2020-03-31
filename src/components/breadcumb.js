import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { Theme } from '@styles';
const { colors } = Theme;

const StyledContainer = styled.div`
  width: 40px;
  position: fixed;
  top: 40px;
  left: ${props => (props.orientation === 'left' ? '15px' : 'auto')};
  right: ${props => (props.orientation === 'left' ? 'auto' : '15px')};
  z-index: 5;
  color: ${colors.component};

  &:before {
    content: '';
    display: block;
    width: 1px;
    height: 30px;
    margin: 20px auto;
    background-color: ${colors.component};
  }

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 100px;
    margin: 20px auto;
    background-color: ${colors.component2};
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

import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { Theme } from '@styles';
const { colors } = Theme;

const StyledContainer = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${props => (props.orientation === 'left' ? '20px' : 'auto')};
  right: ${props => (props.orientation === 'left' ? 'auto' : '20px')};
  z-index: 5;
  color: ${colors.component};
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

import styled from 'styled-components';
import Theme from './theme';
const { colors, fontSizes } = Theme;

const Heading = styled.h3`
  color: ${colors.sectionHeading};
  position: relative;
  display: flex;
  align-items: center;
  margin: 1rem 0rem 4rem;
  width: 100%;
  white-space: nowrap;
  font-size: ${fontSizes.h3};

  &:after {
    content: '';
    display: block;
    width: 30rem;
    height: 0.1rem;
    position: relative;
    left: 2rem;
    bottom: -1rem;
    background-color: ${colors.sectionHeading};
    transition: ${Theme.transition};
    opacity: 0.8;
  }
`;

export default Heading;

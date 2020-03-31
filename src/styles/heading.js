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
    height: 0.1rem;
    width: 30rem;
    background-color: ${colors.headerBackground};
    position: relative;
    top: -0.5rem;
    margin-left: 2rem;
  }
`;

export default Heading;

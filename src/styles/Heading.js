import styled from 'styled-components';
import Theme from './Theme';
const { colors, fontSizes, fonts } = Theme;

const Heading = styled.h3`
  position: relative;
  display: flex;
  align-items: center;
  margin: 1rem 0rem 4rem;
  width: 100%;
  white-space: nowrap;
  font-size: ${fontSizes.h3};

  &:before {
    counter-increment: section;
    content: '0' counter(section) '.';
    margin-right: 1rem;
    font-family: ${fonts.Monofur};
    font-weight: normal;
    color: ${colors.component};
    font-size: ${fontSizes.xl};
    position: relative;
    bottom: 0.4rem;
  }

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

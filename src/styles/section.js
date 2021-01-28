import styled from 'styled-components';
import Theme from './theme';
const { colors, width } = Theme;

const Section = styled.section`
  margin: 0rem auto;
  padding: 0 0 15rem 0;
  width: ${width.sectionWidth};
  max-width: ${width.sectionMaxWidth};

  .heading {
    color: ${colors.sectionHeading};
    position: relative;
    display: block;
    align-items: center;
    margin: 1rem 0rem 4rem;
    width: 100%;
    white-space: nowrap;

    &:after {
      content: '';
      display: block;
      width: ${width.sectionWidth};
      height: 0.1rem;
      bottom: -0.3rem;
      left: 10rem;
      position: relative;
      background-color: ${colors.sectionHeading};
    }
  }
`;

export default Section;

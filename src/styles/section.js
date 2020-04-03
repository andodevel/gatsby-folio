import styled from 'styled-components';
import Theme from './theme';
const { colors } = Theme;

const Section = styled.section`
  margin: 0rem auto;
  padding: 0 0 15rem 0;
  width: 80%;
  max-width: 100rem;

  .heading {
    color: ${colors.sectionHeading};
    position: relative;
    display: flex;
    align-items: center;
    margin: 1rem 0rem 4rem;
    width: 100%;
    white-space: nowrap;

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
    }
  }
`;

export default Section;

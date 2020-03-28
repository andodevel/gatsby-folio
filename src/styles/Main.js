import styled from 'styled-components';
import mixins from './mixins';

const Main = styled.main`
  ${mixins.sidePadding};
  margin: 0 auto;
  width: 100%;
  max-width: 160rem;
  min-height: 10rem;
  padding-top: 20rem;
  padding-bottom: 20rem;

  &.fillHeight {
    padding-top: 0rem;
    padding-bottom: 0rem;
  }
`;

export default Main;

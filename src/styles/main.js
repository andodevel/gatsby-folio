import styled from 'styled-components';
import Mixins from './mixins';

const Main = styled.main`
  ${Mixins.sidePadding};
  margin: 0 auto;
  width: 100%;
  max-width: 160rem;
  min-height: 10rem;
  padding-top: 20rem;
  padding-bottom: 20rem;

  &.fillHeight {
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export default Main;

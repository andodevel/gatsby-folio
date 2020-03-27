import { css } from 'styled-components';

import HackRegularNerdFontCompleteTTF from '@fonts/Hack/HackRegularNerdFontComplete.ttf';
import HackRegularNerdFontCompleteMonoTTF from '@fonts/Hack/HackRegularNerdFontCompleteMono.ttf';
import HackBoldNerdFontCompleteTTF from '@fonts/Hack/HackBoldNerdFontComplete.ttf';
import HackBoldNerdFontCompleteMonoTTF from '@fonts/Hack/HackBoldNerdFontCompleteMono.ttf';
import HackItalicNerdFontCompleteTTF from '@fonts/Hack/HackItalicNerdFontComplete.ttf';
import HackItalicNerdFontCompleteMonoTTF from '@fonts/Hack/HackItalicNerdFontCompleteMono.ttf';
import HackBoldItalicNerdFontCompleteTTF from '@fonts/Hack/HackBoldItalicNerdFontComplete.ttf';
import HackBoldItalicNerdFontCompleteMonoTTF from '@fonts/Hack/HackBoldItalicNerdFontCompleteMono.ttf';

import MonofurNerdFontCompleteTTF from '@fonts/Monofur/MonofurNerdFontComplete.ttf';
import MonofurNerdFontCompleteMonoTTF from '@fonts/Monofur/MonofurNerdFontCompleteMono.ttf';
import MonofurBoldNerdFontCompleteTTF from '@fonts/Monofur/MonofurBoldNerdFontComplete.ttf';
import MonofurBoldNerdFontCompleteMonoTTF from '@fonts/Monofur/MonofurBoldNerdFontCompleteMono.ttf';
import MonofurItalicNerdFontCompleteTTF from '@fonts/Monofur/MonofurItalicNerdFontComplete.ttf';
import MonofurItalicNerdFontCompleteMonoTTF from '@fonts/Monofur/MonofurItalicNerdFontCompleteMono.ttf';

const FontFaces = css`
  @font-face {
    font-family: 'Hack';
    src: url(${HackRegularNerdFontCompleteTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Hack Mono';
    src: url(${HackRegularNerdFontCompleteMonoTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Hack';
    src: url(${HackBoldNerdFontCompleteTTF}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Hack Mono';
    src: url(${HackBoldNerdFontCompleteMonoTTF}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Hack';
    src: url(${HackItalicNerdFontCompleteTTF}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'Hack Mono';
    src: url(${HackItalicNerdFontCompleteMonoTTF}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'Hack';
    src: url(${HackBoldItalicNerdFontCompleteTTF}) format('truetype');
    font-weight: 600;
    font-style: italic;
  }
  @font-face {
    font-family: 'Hack Mono';
    src: url(${HackBoldItalicNerdFontCompleteMonoTTF}) format('truetype');
    font-weight: 600;
    font-style: italic;
  }

  @font-face {
    font-family: 'Monofur';
    src: url(${MonofurNerdFontCompleteTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Monofur Mono';
    src: url(${MonofurNerdFontCompleteMonoTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Monofur';
    src: url(${MonofurBoldNerdFontCompleteTTF}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Monofur Mono';
    src: url(${MonofurBoldNerdFontCompleteMonoTTF}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Monofur';
    src: url(${MonofurItalicNerdFontCompleteTTF}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'Monofur Mono';
    src: url(${MonofurItalicNerdFontCompleteMonoTTF}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }
`;

export default FontFaces;

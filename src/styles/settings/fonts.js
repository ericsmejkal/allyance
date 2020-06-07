import { css } from '@emotion/core'

export const Fonts = css`
  @font-face {
    font-family: 'Circular Std Black';
    src: url('CircularStd-Black.woff2') format('woff2'),
        url('CircularStd-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Circular Std';
    src: url('CircularStd-Bold.woff2') format('woff2'),
        url('CircularStd-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Circular Std Book';
    src: url('CircularStd-Book.woff2') format('woff2'),
        url('CircularStd-Book.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`

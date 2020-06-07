import { css } from '@emotion/core'

export const Fonts = css`
  @font-face {
    font-family: 'Circular Std';
    src: local('Circular Std Black'), local('CircularStd-Black'),
      url('../../assets/fonts/CircularStd-Black.woff2') format('woff2'),
      url('../../assets/fonts/CircularStd-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Circular Std Book';
    src: local('Circular Std Book'), local('CircularStd-Book'),
      url('../../assets/fonts/CircularStd-Book.woff2') format('woff2'),
      url('../../assets/fonts/CircularStd-Book.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`

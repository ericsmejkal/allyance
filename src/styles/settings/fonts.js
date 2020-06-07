import { css } from '@emotion/core'

export const Fonts = css`
  @font-face {
    font-family: 'Circular Std';
    src: url('CircularStd-Black.eot');
    src: local('Circular Std Black'), local('CircularStd-Black'),
      url('CircularStd-Black.eot?#iefix') format('embedded-opentype'),
      url('CircularStd-Black.woff2') format('woff2'), url('CircularStd-Black.woff') format('woff'),
      url('CircularStd-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Circular Std Book';
    src: url('CircularStd-Book.eot');
    src: local('Circular Std Book'), local('CircularStd-Book'),
      url('CircularStd-Book.eot?#iefix') format('embedded-opentype'),
      url('CircularStd-Book.woff2') format('woff2'), url('CircularStd-Book.woff') format('woff'),
      url('CircularStd-Book.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`

import { css } from '@emotion/core'

import { Theme } from '../settings'

export const Base = css`
  body {
    font-family: 'Circular Std Book';
    font-size: 1rem;
    font-weight: ${Theme.fontweight.light};
    line-height: 1.5;
    color: ${Theme.colors.black};
    text-align: left;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3 {
    font-weight: ${Theme.fontweight.light};
    font-family: 'Circular Std Book';
    margin-bottom: 0.5rem;
  }
  ,
  h4,
  h5 {
    margin-bottom: 0.5rem;
    font-weight: ${Theme.fontweight.bold};
    margin-top: 0;
    font-family: 'Circular Std';
  }

  a {
    color: ${Theme.colors.brandPrimary};
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover,
    &:active,
    &:focus {
      color: ${Theme.colors.brandPrimary};
    }
  }

  ::selection {
    color: #000;
    background: #fff;
  }
`

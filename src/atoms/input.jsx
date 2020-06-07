import React from 'react'
import styled from '@emotion/styled'
import { darken } from 'polished'

const BaseInput = styled.input`
  height: calc(1.8em + 1rem + 2px);
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  line-height: 1.5;
  border-radius: 0;
  color: #fff;
  transition: background-color 0.15s ease-in-out;
  background: linear-gradient(360deg, #353535 0%, rgba(83, 83, 83, 0) 100%);
  background-color: linear-gradient(360deg, #353535 0%, rgba(83, 83, 83, 0) 100%);
  background-clip: padding-box;
  border: 4px solid #fff;
  width: 100%;
  outline: none;

  &.input--email {
    height: calc(1.8em + 1rem + 2px);
    border-right: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &::placeholder {
    color: #fff;
  }

  &:hover,
  &:focus,
  &:active {
    background-color: ${(props) => darken(0.1, props.theme.colors.darkGrey)};
  }
`

export function Input(props) {
  return (
    <BaseInput
      type="text"
      placeholder={props.placeholder}
      className={props.email ? 'input--email' : ''}
    />
  )
}

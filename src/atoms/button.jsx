import React from 'react'
import styled from '@emotion/styled'
import { darken } from 'polished'

const BaseButton = styled.button`
  padding: 0.6rem 2rem;
  font-size: 1.2rem;
  background-color: ${(props) => props.theme.colors.brandPrimary};
  border-color: ${(props) => props.theme.colors.brandPrimary};
  border-radius: 0.25rem;
  color: ${(props) => props.theme.colors.white};
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  cursor: pointer;
  outline: none;

  &:hover,
  &:focus,
  &:active {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => darken(0.1, props.theme.colors.darkGrey)};
    border-color: #fff;
  }
`

const BaseAccentButton = styled(BaseButton)`
  background-color: initial;
  color: ${(props) => props.theme.colors.White};
  border-color: ${(props) => props.theme.colors.white};
  border-width: 4px;
  margin-top: 40px;

  &:hover,
  &:focus,
  &:active {
    color: ${(props) => props.theme.colors.white};
    background-color: transparent;
    border-color: #fff;
  }
`

export function Button(props) {
  return (
    <BaseButton className={props.className ? props.className + ' brand-button' : 'brand-button'}>
      {props.title}
    </BaseButton>
  )
}

export function AccentButton(props) {
  return (
    <BaseAccentButton className="brand-button brand-button--accent" variant="secondary">
      {props.title}
    </BaseAccentButton>
  )
}

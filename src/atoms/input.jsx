import React from 'react'
import styled from '@emotion/styled'
import { darken } from 'polished'

const BaseInput = styled.input`
  height: calc(1.8em + 1rem + 2px);
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  line-height: 1.5;
  border-radius: 0;
  color: ${(props) => props.theme.colors.black};
  transition: background-color 0.15s ease-in-out;
  background: ${(props) => props.theme.colors.white};
  border: 4px solid ${(props) => darken(0.1, props.theme.colors.black)};
  width: 100%;
  outline: none;

  &.input--email {
    height: calc(1.8em + 1rem + 2px);
    border-right: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.grey};
  }

  &:hover,
  &:focus,
  &:active {
    border: 4px solid ${(props) => props.theme.colors.grey};
  }
`

const BaseInputLight = styled.input`
  height: calc(1.8em + 1rem + 2px);
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  line-height: 1.5;
  border-radius: 0;
  color: ${(props) => props.theme.colors.white};
  transition: background-color 0.15s ease-in-out;
  background: ${(props) => props.theme.colors.black};
  border: 4px solid ${(props) => darken(0.1, props.theme.colors.white)};
  width: 100%;
  outline: none;

  &.input--email {
    height: calc(1.8em + 1rem + 2px);
    border-right: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.white};
  }

  &:hover,
  &:focus,
  &:active {
    border: 4px solid ${(props) => props.theme.colors.white};
  }
`

const Search = styled.input`
  height: calc(1.8em + 1rem - 1px);
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  line-height: 1.5;
  border-radius: 0;
  color: ${(props) => props.theme.colors.black};
  transition: background-color 0.15s ease-in-out;
  background: ${(props) => props.theme.colors.white};
  border-left: 4px solid ${(props) => darken(0.1, props.theme.colors.black)};
  border-top: 4px solid ${(props) => darken(0.1, props.theme.colors.black)};
  border-bottom: 4px solid ${(props) => darken(0.1, props.theme.colors.black)};
  border-right: 0px;
  width: 100%;
  outline: none;

  &.input--email {
    height: calc(1.8em + 1rem + 2px);
    border-right: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.grey};
  }

  &:hover,
  &:focus,
  &:active {
    border-left: 4px solid ${(props) => darken(0.1, props.theme.colors.black)};
    border-top: 4px solid ${(props) => darken(0.1, props.theme.colors.black)};
    border-bottom: 4px solid ${(props) => darken(0.1, props.theme.colors.black)};
    border-right: 0px;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.black};
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

export function InputLight(props) {
  return (
    <BaseInputLight
      type="text"
      placeholder={props.placeholder}
      className={props.email ? 'input--email' : ''}
    />
  )
}

export function SearchInput(props) {
  return (
    <Search
      type="text"
      placeholder={props.placeholder}
      className={props.email ? 'input--email' : ''}
    />
  )
}

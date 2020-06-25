import React from 'react'
import styled from '@emotion/styled'
import { darken } from 'polished'

import { Paragraph, H4 } from '../atoms/text'
import { PlusButton } from '../atoms/button'

const BaseInput = styled.input`
  height: 50px;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  margin-top: 10px;
  line-height: 1.5;
  border-radius: 0;
  color: ${(props) => props.theme.colors.black};
  transition: background-color 0.15s ease-in-out;
  background: ${(props) => props.theme.colors.white};
  border: 4px solid ${(props) => darken(0.1, props.theme.colors.black)};
  width: 100%;
  outline: none;

  &.input--email {
    height: 50px;
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
  height: 50px;
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
    height: 50px;
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

const TextArea = styled.input`
  height: 50px;
  padding: 1.4rem 1rem 120px 1rem;
  font-size: 1.2rem;
  margin-top: 10px;
  line-height: 1.5;
  border-radius: 0;
  color: ${(props) => props.theme.colors.black};
  transition: background-color 0.15s ease-in-out;
  background: ${(props) => props.theme.colors.white};
  border: 4px solid ${(props) => darken(0.1, props.theme.colors.black)};
  width: 100%;
  outline: none;

  &.input--email {
    height: 50px;
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
const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  margin-bottom: 25px;
`

const Link = styled.input`
  height: 50px;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  margin-top: 8px;
  margin-bottom: 15px;
  line-height: 1.5;
  border-radius: 0;
  color: ${(props) => props.theme.colors.black};
  transition: background-color 0.15s ease-in-out;
  background: ${(props) => props.theme.colors.white};
  border: 4px solid ${(props) => darken(0.1, props.theme.colors.black)};
  width: 100%;
  outline: none;

  p {
    padding: 0;
    margin: 20px 0 0 0;
    margin-top: 20px;
  }

  &.input--email {
    height: 50px;
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

const Search = styled.input`
  height: 50px;
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
    height: 50px;
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

const Dropdown = styled.input`
  height: 50px;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  margin-top: 10px;
  line-height: 1.5;
  border-radius: 0;
  color: ${(props) => props.theme.colors.black};
  transition: background-color 0.15s ease-in-out;
  background: ${(props) => props.theme.colors.white};
  border: 4px solid ${(props) => darken(0.1, props.theme.colors.black)};
  width: 100%;
  outline: none;

  &.input--email {
    height: 50px;
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

export function Input(props) {
  return (
    <>
      {props.rowTitle ? <H4 style={{ lineHeight: '32px' }}>{props.rowTitle}</H4> : null}
      <BaseInput
        type="text"
        placeholder={props.placeholder}
        className={props.email ? 'input--email' : ''}
      />
    </>
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

export function TextAreaInput(props) {
  return (
    <TextArea
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

export function DropdownInput(props) {
  return (
    <>
      {props.rowTitle ? <H4 style={{ lineHeight: '32px' }}>{props.rowTitle}</H4> : null}
      <Dropdown
        type="text"
        placeholder={props.placeholder}
        className={props.email ? 'input--email' : ''}
      />
    </>
  )
}

export function LinkInput(props) {
  return (
    <>
      {props.rowTitle ? <H4 style={{ lineHeight: '32px' }}>{props.rowTitle}</H4> : null}
      {props.title ? (
        <Paragraph style={{ lineHeight: '20px', margin: '0' }}>{props.title}</Paragraph>
      ) : null}
      <LinkContainer>
        <Link
          type="text"
          placeholder={props.placeholder}
          className={props.email ? 'input--email' : ''}
        />
        <PlusButton icon="plus" variant="dark" />
      </LinkContainer>
    </>
  )
}

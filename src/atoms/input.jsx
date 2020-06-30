import React from 'react'
import styled from '@emotion/styled'
import { darken } from 'polished'
import Select from 'react-select'

import { Paragraph, H4 } from '../atoms/text'
import { PlusButton } from '../atoms/button'

const BaseInput = styled.input`
  height: 48px;
  padding: 0.5rem 1rem;
  font-size: 16px;
  line-height: 1.5;
  border-radius: 0;
  color: ${(props) => props.theme.colors.black};
  transition: background-color 0.15s ease-in-out;
  background: ${(props) => props.theme.colors.white};
  border: 4px solid ${(props) => darken(0.1, props.theme.colors.black)};
  width: 100%;
  outline: none;

  &.input--email {
    height: 48px;
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
  height: 48px;
  padding: 0.5rem 1rem;
  font-size: 16px;
  line-height: 1.5;
  border-radius: 0;
  color: ${(props) => props.theme.colors.white};
  transition: background-color 0.15s ease-in-out;
  background: ${(props) => props.theme.colors.black};
  border: 4px solid ${(props) => darken(0.1, props.theme.colors.white)};
  width: 100%;
  outline: none;

  &.input--email {
    height: 48px;
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
  height: 48px;
  padding: 1.4rem 1rem 120px 1rem;
  font-size: 16px;
  line-height: 1.5;
  border-radius: 0;
  color: ${(props) => props.theme.colors.black};
  transition: background-color 0.15s ease-in-out;
  background: ${(props) => props.theme.colors.white};
  border: 4px solid ${(props) => darken(0.1, props.theme.colors.black)};
  width: 100%;
  outline: none;

  &.input--email {
    height: 48px;
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
`

const Link = styled.input`
  height: 48px;
  padding: 0.5rem 1rem;
  font-size: 16px;
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
    margin-bottom: 0;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.grey};
  }

  &:hover,
  &:focus,
  &:active {
    border: 4px solid ${(props) => props.theme.colors.grey};
  }

  &:last-of-type {
    margin-bottom: 0px;
  }
`

const Search = styled.input`
  height: 48px;
  padding: 0.5rem 1rem;
  font-size: 16px;
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

const dropdownStyles = {
  option: (provided, state) => ({
    ...provided,
    color: '#030C07',
    padding: '15px 20px',
    backgroundColor: '#fff',
    fontSize: '16px',
    marginTop: '0px',
    lineHeight: '1.5',
    '&:hover': {
      backgroundColor: '#F4F4F4',
    },
  }),
  control: () => ({
    width: '100%',
    border: '4px solid #000',
    background: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '48px',
    marginTop: '8px',
    fontSize: '16px',
    lineHeight: '1.5',
  }),
  placeholder: () => ({
    paddingLeft: '8px',
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#030C07',
  }),
  dropdownIndicator: () => ({
    color: '#030C07',
    padding: '10px 10px 4px',
    cursor: 'pointer',
  }),
  menuList: () => ({
    border: '4px solid #000',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1
    const transition = 'opacity 300ms'

    return { ...provided, opacity, transition }
  },
}

export function Input(props) {
  return (
    <>
      {props.rowTitle ? <H4 style={{ marginBottom: '16px' }}>{props.rowTitle}</H4> : null}
      <BaseInput
        type={props.type}
        placeholder={props.placeholder}
        className={props.email ? 'input--email' : ''}
        maxLength={props.maxLength}
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
      {props.rowTitle ? <H4 style={{ marginBottom: '16px' }}>{props.rowTitle}</H4> : null}
      <Select options={props.options} styles={dropdownStyles} placeholder={props.placeholder} />
    </>
  )
}

export function LinkInput(props) {
  return (
    <>
      {props.rowTitle ? <H4 style={{ marginBottom: '16px' }}>{props.rowTitle}</H4> : null}
      {props.title ? (
        <Paragraph style={{ marginBottom: '4px', marginTop: '8px' }}>{props.title}</Paragraph>
      ) : null}
      <LinkContainer>
        <Link type="text" placeholder={props.placeholder} />
        {/* WIP - Need to create functionality of duplicating the link container above onClick */}
        <PlusButton icon="plus" variant="dark" title="Add More" />
      </LinkContainer>
    </>
  )
}

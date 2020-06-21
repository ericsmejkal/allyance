import React from 'react'
import styled from '@emotion/styled'
import { Search } from 'react-feather'
import { darken } from 'polished'

const BaseButton = styled.button`
  padding: 0.6rem 2rem;
  font-size: 1.2rem;
  background-color: ${(props) => props.theme.colors.brandPrimary};
  border: 4px solid ${(props) => props.theme.colors.brandPrimary};
  border-radius: 0;
  color: ${(props) => props.theme.colors.white};
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  cursor: pointer;
  outline: none;

  &:hover,
  &:focus,
  &:active {
    background-color: ${(props) => darken(0.1, props.theme.colors.darkGrey)};
    border-color: #fff;
    color: ${(props) => props.theme.colors.brandPrimary};
  }
`

const BaseAccentButton = styled(BaseButton)`
  background-color: initial;
  color: ${(props) => props.theme.colors.white};
  border-color: ${(props) => props.theme.colors.white};
  border-width: 4px;
  margin-top: 40px;

  &:hover,
  &:focus,
  &:active {
    background-color: transparent;
    border: 4px solid ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.brandPrimary};
  }
`

const BaseAccentButtonDark = styled(BaseButton)`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  border-color: ${(props) => props.theme.colors.black};
  border-width: 4px;
  margin-top: 40px;
  display: flex;

  &:hover,
  &:focus,
  &:active {
    background-color: ${(props) => props.theme.colors.background};
    border-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.black};
  }

  svg {
    margin-left: 10px;
  }
`

const BaseTag = styled(BaseButton)`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.wite};
  border-color: ${(props) => props.theme.colors.white};
  border: 3px solid ${(props) => props.theme.colors.grey};
  border-radius: 20px;
  padding: 8px 20px;
  margin-right: 10px;
  font-size: 14px;

  &:hover,
  &:focus,
  &:active {
    color: ${(props) => props.theme.colors.white};
    background-color: transparent;
    border: 3px solid ${(props) => props.theme.colors.lightGrey};
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
    <>
      {props.variant === 'dark' ? (
        <BaseAccentButtonDark
          className="brand-button brand-button--accent-dark"
          variant="secondary"
        >
          {props.icon === 'search' ? (
            <>
              {props.title} <Search size={22} />
            </>
          ) : (
            props.title
          )}
        </BaseAccentButtonDark>
      ) : (
        <BaseAccentButton className="brand-button brand-button--accent" variant="secondary">
          {props.title}
        </BaseAccentButton>
      )}
    </>
  )
}

export function Tag(props) {
  return (
    <BaseTag className="brand-button brand-button--tag" variant="secondary">
      {props.title}
    </BaseTag>
  )
}

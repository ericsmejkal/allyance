import React from 'react'
import styled from '@emotion/styled'
import { Search, Upload, Plus } from 'react-feather'
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
  margin-top: ${(props) => (props.noMargin === 'true' ? '0px' : '40px')};

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
  margin-top: ${(props) => (props.noMargin === 'true' ? '40px' : '10px')};
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

const BasePlusButton = styled(BaseButton)`
  background-color: initial;
  height: 50px;
  color: ${(props) => props.theme.colors.white};
  border-color: ${(props) => props.theme.colors.white};
  border-width: 4px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  padding: 0;
  justify-content: center;
  margin-top: 8px;
  min-width: 160px;

  &:hover,
  &:focus,
  &:active {
    background-color: transparent;
    border: 4px solid ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.brandPrimary};
  }
`

const BasePlusButtonDark = styled(BaseButton)`
  background-color: ${(props) => props.theme.colors.white};
  height: 50px;
  color: ${(props) => props.theme.colors.black};
  border-color: ${(props) => props.theme.colors.black};
  border-width: 4px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  padding: 0px;
  justify-content: center;
  margin-top: 8px;
  min-width: 160px;

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
  color: ${(props) => props.theme.colors.white};
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

const BaseTagLight = styled(BaseButton)`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  border-color: ${(props) => props.theme.colors.black};
  border: 3px solid ${(props) => props.theme.colors.black};
  border-radius: 20px;
  padding: 8px 20px;
  margin-right: 10px;
  font-size: 14px;

  &:hover,
  &:focus,
  &:active {
    color: ${(props) => props.theme.colors.black};
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
          ) : props.icon === 'upload' ? (
            <>
              {props.title} <Upload size={22} />
            </>
          ) : props.icon === 'plus' ? (
            <>
              {props.title} <Plus size={22} />
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

export function PlusButton(props) {
  return (
    <>
      {props.variant === 'dark' ? (
        <BasePlusButtonDark className="brand-button brand-button--plus-dark" variant="secondary">
          {props.title} <Plus size={22} />
        </BasePlusButtonDark>
      ) : (
        <BasePlusButton className="brand-button brand-button--plus" variant="secondary">
          {props.title} <Plus size={22} color="white" />
        </BasePlusButton>
      )}
    </>
  )
}

export function Tag(props) {
  return (
    <>
      {props.variant === 'light' ? (
        <BaseTagLight className="brand-button brand-button--tag" variant="secondary">
          {props.title}
        </BaseTagLight>
      ) : (
        <BaseTag className="brand-button brand-button--tag" variant="secondary">
          {props.title}
        </BaseTag>
      )}
    </>
  )
}

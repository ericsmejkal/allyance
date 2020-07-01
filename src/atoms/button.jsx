import React from 'react'
import styled from '@emotion/styled'
import { Search, Upload, Plus } from 'react-feather'
import { darken } from 'polished'

const BaseButton = styled.button`
  padding: 0px 24px;
  height: 48px;
  font-size: 16px;
  background-color: ${(props) => props.theme.colors.brandPrimary};
  border: 4px solid ${(props) => props.theme.colors.brandPrimary};
  border-radius: 0;
  color: ${(props) => props.theme.colors.white};
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;

  &:hover,
  &:focus,
  &:active {
    background-color: ${(props) => darken(0.1, props.theme.colors.darkGrey)};
    border-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.brandPrimary};
  }
`

const BaseAccentButton = styled(BaseButton)`
  background-color: initial;
  color: ${(props) => props.theme.colors.white};
  border-color: ${(props) => props.theme.colors.white};
  border-width: 4px;
  margin-top: ${(props) => (props.noMargin === 'true' ? '0px' : '40px')};
  margin-right: ${(props) => (props.noMargin === 'true' ? '0px' : '16px')};

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
  margin-right: ${(props) => (props.noMargin === 'true' ? '0px' : '16px')};
  display: flex;

  &:hover,
  &:focus,
  &:active {
    background-color: ${(props) => props.theme.colors.background};
    border-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.black};
  }

  svg {
    margin-left: 8px;
  }
`

const BasePlusButton = styled(BaseButton)`
  background-color: initial;
  height: 48px;
  color: ${(props) => props.theme.colors.white};
  border-color: ${(props) => props.theme.colors.white};
  border-width: 4px;
  margin-left: 16px;
  display: flex;
  align-items: center;
  padding: 0;
  justify-content: center;
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
  height: 48px;
  color: ${(props) => props.theme.colors.black};
  border-color: ${(props) => props.theme.colors.black};
  border-width: 4px;
  margin-left: 16px;
  display: flex;
  align-items: center;
  padding: 0px;
  justify-content: center;
  min-width: 160px;

  &:hover,
  &:focus,
  &:active {
    background-color: ${(props) => props.theme.colors.background};
    border-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.black};
  }

  svg {
    margin-left: 8px;
  }
`

const BaseTag = styled(BaseButton)`
  background-color: ${(props) => props.theme.colors.black};
  font-size: 16px;
  color: ${(props) => props.theme.colors.white};
  border-color: ${(props) => props.theme.colors.white};
  border: 4px solid ${(props) => props.theme.colors.grey};
  border-radius: 24px;
  padding: 8px 24px;
  margin-right: 8px;

  &:hover,
  &:focus,
  &:active,
  &:disabled {
    color: ${(props) => props.theme.colors.white};
    background-color: transparent;
    border: 4px solid ${(props) => props.theme.colors.lightGrey};
  }
  &:disabled {
    cursor: auto;
  }
`

const BaseTagLight = styled(BaseButton)`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  border-color: ${(props) => props.theme.colors.black};
  border: 4px solid ${(props) => props.theme.colors.black};
  border-radius: 24px;
  padding: 8px 24px;
  margin-right: 8px;
  font-size: 16px;

  &:hover,
  &:focus,
  &:active,
  &:disabled {
    color: ${(props) => props.theme.colors.black};
    background-color: transparent;
    border: 4px solid ${(props) => props.theme.colors.lightGrey};
  }
  &:disabled {
    cursor: auto;
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
        <BaseTagLight
          className="brand-button brand-button--tag"
          variant="secondary"
          type="button"
          onClick={props.onClick}
          disabled={props.disabled}
        >
          {props.title}
        </BaseTagLight>
      ) : (
        <BaseTag
          className="brand-button brand-button--tag"
          variant="secondary"
          type="button"
          onClick={props.onClick}
          disabled={props.disabled}
        >
          {props.title}
        </BaseTag>
      )}
    </>
  )
}

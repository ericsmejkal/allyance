import React from 'react'
import styled from '@emotion/styled'

const CaseStatus = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  border: 4px solid ${(props) => props.theme.colors.black};
  border-radius: 24px;
  padding: 0px 24px;
  margin-right: 16px;
  font-size: 16px;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    color: ${(props) => props.theme.colors.success};
    background-color: ${(props) => props.theme.colors.black};
    border: 4px solid ${(props) => props.theme.colors.black};
  }
`

export function CaseStatusLabel(props) {
  return (
    <CaseStatus className="brand-button brand-button--Label" variant="primary">
      {props.title}
    </CaseStatus>
  )
}

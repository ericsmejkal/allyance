import React from 'react'
import styled from '@emotion/styled'

const CaseStatus = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  border: 3px solid ${(props) => props.theme.colors.black};
  border-radius: 20px;
  padding: 2px 20px;
  margin-right: 10px;
  font-size: 16px;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    color: ${(props) => props.theme.colors.success};
    background-color: ${(props) => props.theme.colors.black};
    border: 3px solid ${(props) => props.theme.colors.black};
  }
`

export function CaseStatusLabel(props) {
  return (
    <CaseStatus className="brand-button brand-button--Label" variant="primary">
      {props.title}
    </CaseStatus>
  )
}

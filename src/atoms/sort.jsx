import React from 'react'
import styled from '@emotion/styled'
import { ChevronDown } from 'react-feather'

import { H2 } from './text'

const SortContainer = styled.div`
  H2 {
    color: ${(props) => props.theme.colors.black};
    transition: 0.2s ease-in-out;

    :hover {
      color: ${(props) => props.theme.colors.brandSecondary};
      cursor: pointer;
    }

    svg {
      margin-left: 20px;
    }
  }
`

export function Sort(props) {
  return (
    <SortContainer>
      <H2>
        Most Recent Cases
        <ChevronDown size={20} />
      </H2>
    </SortContainer>
  )
}

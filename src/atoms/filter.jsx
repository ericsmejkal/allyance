import React from 'react'
import styled from '@emotion/styled'
import { Sliders } from 'react-feather'

import { H4 } from './text'

const FilterContainer = styled.div`
  justify-content: flex-end;
  H4 {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.black};
    transition: 0.2s ease-in-out;

    :hover {
      color: ${(props) => props.theme.colors.brandSecondary};
      cursor: pointer;
    }

    svg {
      margin-left: 8px;
    }
  }
`

export function Filter(props) {
  return (
    <FilterContainer>
      <H4>
        Filter <Sliders size={20} />
      </H4>
    </FilterContainer>
  )
}

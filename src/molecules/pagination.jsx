import React from 'react'
import styled from '@emotion/styled'
import { ArrowLeft, ArrowRight } from 'react-feather'

import { H4 } from '../atoms/text'
// import { Button } from '../atoms/button'

const PaginationContainer = styled.div`
  display: flex;
  width: calc(33% - 20px);
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 40px 0;

  H4 {
    transition: 0.2s ease-in-out;

    :hover {
      color: ${(props) => props.theme.colors.brandSecondary};
      cursor: pointer;
    }
  }

  svg {
    transition: 0.2s ease-in-out;

    :hover {
      stroke: ${(props) => props.theme.colors.brandSecondary};
      cursor: pointer;
    }
  }
`

export function Pagination(props) {
  return (
    <PaginationContainer>
      <ArrowLeft />
      {/* PLACEHOLDER FOR NOW */}
      <H4>1</H4> <H4>2</H4> <H4>3</H4> <H4>4</H4> <H4>5</H4>
      <ArrowRight />
    </PaginationContainer>
  )
}

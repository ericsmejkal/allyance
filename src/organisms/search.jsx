import React from 'react'
import styled from '@emotion/styled'
import { Box, Flex } from '@rebass/emotion'

import { AccentButton } from '../atoms/button'
import { SearchInput } from '../atoms/input'
import { SubContainer } from '../atoms/container'

const SearchContainer = styled.div`
  width: 100%;
  height: auto;
`

export function Search(props) {
  return (
    <SubContainer>
      <SearchContainer>
        <Flex width={1} alignItems="flex-end">
          <Box width={1}>
            <SearchInput placeholder="Type here to begin your search..." />
          </Box>
          <Box>
            <AccentButton title="Search" variant="dark" icon="search" />
          </Box>
        </Flex>
      </SearchContainer>
    </SubContainer>
  )
}

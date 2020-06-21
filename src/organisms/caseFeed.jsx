import React from 'react'
import styled from '@emotion/styled'
import { Box, Flex } from '@rebass/emotion'

import { Container } from '../atoms/container'
import { Case } from '../molecules/case'

const CaseFeedContainer = styled.div`
  background: ${(props) => props.theme.colors.darkGray};
  padding: 0 0 6%;
`

export function CaseFeed(props) {
  return (
    <CaseFeedContainer>
      <Container>
        <Flex flexWrap="wrap" ml="-10px" mr="-10px">
          <Box width={[1 / 3]} pl="10px" pr="10px">
            <Case />
          </Box>
          <Box width={[1 / 3]} pl="10px" pr="10px">
            <Case />
          </Box>
          <Box width={[1 / 3]} pl="10px" pr="10px">
            <Case />
          </Box>
        </Flex>
        <Flex flexWrap="wrap" ml="-10px" mr="-10px" mt="20px">
          <Box width={[1 / 3]} pl="10px" pr="10px">
            <Case />
          </Box>
          <Box width={[1 / 3]} pl="10px" pr="10px">
            <Case />
          </Box>
          <Box width={[1 / 3]} pl="10px" pr="10px">
            <Case />
          </Box>
        </Flex>
      </Container>
    </CaseFeedContainer>
  )
}

import React from 'react'
import styled from '@emotion/styled'
import { Box, Flex } from '@rebass/emotion'

import { Container } from '../atoms/container'
import { Case } from '../molecules/case'

const CaseFeedContainer = styled.div`
  background: ${(props) => props.theme.colors.darkGray};
  padding: 0 0 4%;
`

export function CaseFeed(props) {
  return (
    <CaseFeedContainer>
      <Container>
        <Flex flexWrap="wrap" ml="-2" mr="-2">
          <Box width={[1 / 3]} pl="2" pr="2">
            <Case />
          </Box>
          <Box width={[1 / 3]} pl="2" pr="2">
            <Case />
          </Box>
          <Box width={[1 / 3]} pl="2" pr="2">
            <Case />
          </Box>
        </Flex>
        <Flex flexWrap="wrap" ml="-2" mr="-2" mt="3">
          <Box width={[1 / 3]} pl="2" pr="2">
            <Case />
          </Box>
          <Box width={[1 / 3]} pl="2" pr="2">
            <Case />
          </Box>
          <Box width={[1 / 3]} pl="2" pr="2">
            <Case />
          </Box>
        </Flex>
      </Container>
    </CaseFeedContainer>
  )
}

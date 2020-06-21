import React from 'react'
import styled from '@emotion/styled'
import { Box, Flex } from '@rebass/emotion'

import { SubContainer, Container, FullWidthContainer } from '../atoms/container'
import { Sort } from '../atoms/sort'
import { Filter } from '../atoms/filter'
import { Case } from '../molecules/case'
import { Pagination } from '../molecules/pagination'

const CaseFeedContainer = styled.div`
  background: ${(props) => props.theme.colors.darkGray};
  padding: 0 0 6%;
`

const FeedControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 30px;
  padding-top: 30px;
`

export function CaseFeed(props) {
  return (
    <CaseFeedContainer>
      {props.page === 'home' ? (
        <Container>
          <FeedControls>
            <Sort />
            <Filter />
          </FeedControls>
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
          <Pagination />
        </Container>
      ) : (
        <FullWidthContainer>
          <SubContainer>
            <FeedControls>
              <Sort />
              <Filter />
            </FeedControls>
          </SubContainer>
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
          <Pagination />
        </FullWidthContainer>
      )}
    </CaseFeedContainer>
  )
}

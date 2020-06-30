import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { Box, Flex } from '@rebass/emotion'

import { SubContainer, Container, FullWidthContainer } from '../atoms/container'
import { Sort } from '../atoms/sort'
import { Filter } from '../atoms/filter'
import { AccentButton } from '../atoms/button'
import Case from '../molecules/case'
import { Pagination } from '../molecules/pagination'

import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const CaseFeedContainer = styled.div`
  background: ${(props) => props.theme.colors.darkGray};
`

const FeedControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 32px;
  padding-top: 32px;
`

const CASES = gql`
  {
    incidents {
      id
      shortDescription
      longDescription
      city
      state
      zipCode
      date
      tags {
        id
        content
      }
    }
  }
`

export function CaseFeed(props) {
  const { data } = useQuery(CASES)

  return (
    <CaseFeedContainer>
      {props.page === 'home' ? (
        <Container style={{ marginBottom: '-30px' }}>
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
          <Flex flexWrap="wrap" ml="-10px" mr="-10px" mt="20px" justifyContent="center">
            <Box width={[1 / 3]} pl="10px" pr="10px">
              <Case />
            </Box>
            <Box width={[1 / 3]} pl="10px" pr="10px">
              <Case />
            </Box>
            <Box width={[1 / 3]} pl="10px" pr="10px">
              <Case />
            </Box>
            <Link to="/browse-cases">
              <AccentButton title="View All" variant="dark" />
            </Link>
          </Flex>
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
            {data && data.incidents
              ? data.incidents.map((incident, key) => (
                  <Box key={key} width={[1 / 3]} pl="10px" pr="10px">
                    <Case incident={incident} />
                  </Box>
                ))
              : null}
          </Flex>

          <Pagination />
        </FullWidthContainer>
      )}
    </CaseFeedContainer>
  )
}

import React from 'react'
import styled from '@emotion/styled'

import { Container } from '../atoms/container'
import { SmallHero } from '../organisms/hero'
import { CaseFeed } from '../organisms/caseFeed'
import { Search } from '../organisms/search'

const PageContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.black};
`

const BrowseCasesPage = () => {
  return (
    <>
      <SmallHero page="Browse cases" header="Browse through cases in your area." />
      <Container>
        <PageContainer>
          <Search />
          <CaseFeed />
        </PageContainer>
      </Container>
    </>
  )
}

export default BrowseCasesPage

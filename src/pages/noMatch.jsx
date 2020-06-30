import React from 'react'
import styled from '@emotion/styled'

import { SmallHero } from '../organisms/hero'
import { Container, SubContainer } from '../atoms/container'

const PageContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.black};
  min-height: 300px;
`

const NoMatch = () => {
  return (
    <>
      <SmallHero
        page="404 - Page does not exist"
        header="It looks like you're lost. Let's see if we can help."
      />
      <Container>
        <PageContainer>
          {/* WIP - Add text and button */}
          <SubContainer>Actions for 404 go here.</SubContainer>
        </PageContainer>
      </Container>
    </>
  )
}

export default NoMatch

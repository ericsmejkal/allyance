import styled from '@emotion/styled'
import React from 'react'

import { SmallHero } from '../organisms/hero'
import { Container } from '../atoms/container'

const PageContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.black};
`

const Account = (props) => {
  return (
    <>
      {/* WIP - Add first name dynamically */}
      <SmallHero
        page={'Welcome' + props.firstName}
        header="Thanks for taking action. We’re excited for you to join us."
      />
      <Container>
        <PageContainer>Account Page</PageContainer>
      </Container>
    </>
  )
}

export default Account

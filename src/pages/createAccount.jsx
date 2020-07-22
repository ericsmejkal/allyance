import styled from '@emotion/styled'
import React from 'react'

import { SmallHero } from '../organisms/hero'
import { Container } from '../atoms/container'

const PageContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.black};
`

const CreateAccount = () => {
  return (
    <>
      <SmallHero
        page="Create account"
        header="Thanks for taking action. We’re excited for you to join us."
      />
      <Container>
        <PageContainer>Create Account Page</PageContainer>
      </Container>
    </>
  )
}

export default CreateAccount

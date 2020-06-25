import React from 'react'
import styled from '@emotion/styled'

import { SmallHero } from '../organisms/hero'
import { Container } from '../atoms/container'
import ReportCaseForm from '../organisms/reportCaseForm'

const PageContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.black};
`

const ReportCasePage = () => {
  return (
    <>
      <SmallHero page="Report a case" header="We need your help. And so does the nation." />
      <Container>
        <PageContainer>
          <ReportCaseForm />
        </PageContainer>
      </Container>
    </>
  )
}

export default ReportCasePage

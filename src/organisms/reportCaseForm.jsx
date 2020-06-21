import React from 'react'
import styled from '@emotion/styled'

import { AccentButton } from '../atoms/button'
import { SubContainer } from '../atoms/container'
import { H2 } from '../atoms/text'

const ReportCaseContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 35px 0;
`

export function ReportCaseForm(props) {
  return (
    <SubContainer>
      <ReportCaseContainer>
        <H2>Form Title</H2>
        <AccentButton title="Next" variant="dark" />
      </ReportCaseContainer>
    </SubContainer>
  )
}

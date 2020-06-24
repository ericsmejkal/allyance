import React from 'react'
import styled from '@emotion/styled'

import { SubContainer } from '../atoms/container'
import { H2 } from '../atoms/text'

const ReportCaseContainer = styled.div`
  width: 100%;
`

class ReportCasePerpetrator extends React.Component {
  render() {
    if (this.props.currentStep !== 2) {
      return null
    }
    return (
      <SubContainer>
        <ReportCaseContainer>
          <H2>Perpetrator</H2>
          Perpetrator Only Text
        </ReportCaseContainer>
      </SubContainer>
    )
  }
}

export default ReportCasePerpetrator

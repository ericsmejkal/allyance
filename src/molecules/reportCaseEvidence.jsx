import React from 'react'
import styled from '@emotion/styled'

import { H2 } from '../atoms/text'

const ReportCaseContainer = styled.div`
  width: 100%;
`

class ReportCaseEvidence extends React.Component {
  render() {
    if (this.props.currentStep !== 4) {
      return null
    }
    return (
      <ReportCaseContainer>
        <H2>Evidence</H2>
        Evidence Only Text
      </ReportCaseContainer>
    )
  }
}

export default ReportCaseEvidence

import React from 'react'
import styled from '@emotion/styled'

import { H2 } from '../atoms/text'

const ReportCaseContainer = styled.div`
  width: 100%;
`

class ReportCaseVictim extends React.Component {
  render() {
    if (this.props.currentStep !== 1) {
      return null
    }
    return (
      <ReportCaseContainer>
        <H2>Victim</H2>
        Victim Only Text
      </ReportCaseContainer>
    )
  }
}

export default ReportCaseVictim

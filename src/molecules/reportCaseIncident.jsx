import React from 'react'
import styled from '@emotion/styled'

import { H2 } from '../atoms/text'

const ReportCaseContainer = styled.div`
  width: 100%;
`

class ReportCaseIncident extends React.Component {
  render() {
    if (this.props.currentStep !== 3) {
      return null
    }
    return (
      <ReportCaseContainer>
        <H2>Incident</H2>
        Incident Only Text
      </ReportCaseContainer>
    )
  }
}

export default ReportCaseIncident

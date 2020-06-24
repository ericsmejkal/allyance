import React from 'react'
import styled from '@emotion/styled'

import { SubContainer } from '../atoms/container'
import { H2 } from '../atoms/text'

const ReportCaseContainer = styled.div`
  width: 100%;
`

class ReportCaseTags extends React.Component {
  render() {
    if (this.props.currentStep !== 5) {
      return null
    }
    return (
      <SubContainer>
        <ReportCaseContainer>
          <H2>Tags</H2>
          Tags Only Text
        </ReportCaseContainer>
      </SubContainer>
    )
  }
}

export default ReportCaseTags

import React from 'react'
import styled from '@emotion/styled'

import { ReportCaseTitle } from '../atoms/title'
import { Tag } from '../atoms/button'

import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const ReportCaseContainer = styled.div`
  width: 100%;
`

const CASES = gql`
  {
    incidents {
      tags {
        id
        content
      }
    }
  }
`

class ReportCaseTags extends React.Component {
  render() {
    // const { data } = useQuery(CASES)
    if (this.props.currentStep !== 5) {
      return null
    }
    return (
      <ReportCaseContainer>
        <ReportCaseTitle
          stepTitle="Click all tags associated with this incident"
          stepNumber={this.props.currentStep}
        />
        <form>
          {/* {data && data.incidents.tags
            ? data.incidents.tags.map((tag, i) => {
                return <Tag title={tag.content} tag={tag} key={i} variant="light" />
              })
            : null} */}
        </form>
      </ReportCaseContainer>
    )
  }
}

export default ReportCaseTags

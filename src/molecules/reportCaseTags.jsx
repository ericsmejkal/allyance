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

export function ReportCaseTags(props) {
  const { data } = useQuery(CASES)
  if (props.currentStep !== 5) {
    return null
  }
  return (
    <ReportCaseContainer>
      <ReportCaseTitle
        stepTitle="Click all tags associated with this incident"
        stepNumber={props.currentStep}
      />
      <form>
        {data && data.tags
          ? data.tags.map((tag, i) => {
              return <Tag title={tag.content} tag={tag} key={i} variant="light" />
            })
          : null}
      </form>
    </ReportCaseContainer>
  )
}

export default ReportCaseTags

import React from 'react'
import styled from '@emotion/styled'
import { Box, Flex } from '@rebass/emotion'

import { ReportCaseTitle } from '../atoms/title'
import { H4 } from '../atoms/text'
import { Input, LinkInput } from '../atoms/input'
import { AccentButton } from '../atoms/button'

const ReportCaseContainer = styled.div`
  width: 100%;

  H4 {
    padding: 0;
    margin: 0;
  }
`

class ReportCaseEvidence extends React.Component {
  render() {
    if (this.props.currentStep !== 4) {
      return null
    }
    return (
      <ReportCaseContainer>
        <ReportCaseTitle
          stepTitle="Build a case on this incident"
          stepNumber={this.props.currentStep}
        />
        <form>
          <Flex mt={3} pb={4}>
            <Box width={1}>
              <LinkInput
                placeholder="Add a link to any video content that you've seen."
                rowTitle="Add any evidence of the incident"
              />
              <LinkInput
                placeholder="Do you know of any links to donation platforms?"
                title="Donations"
              />
              <LinkInput
                placeholder="Are there any open petition links for this incident?"
                title="Petitions"
              />
              <LinkInput
                placeholder="Add links to any posts that you've seen relating to this incident."
                title="Social Posts"
              />
            </Box>
          </Flex>
          <Flex mt={1} pb={3}>
            <Box width={1 / 2}>
              <H4>Upload evidence</H4>
              <Input placeholder="Upload any images of this incident." />
            </Box>
          </Flex>

          <Flex mt={3} pb={3} flexDirection="column">
            <Box width={1}>
              <H4>Case status</H4>
            </Box>
            <Box width={1} display="flex" justifyContent="space-between">
              <AccentButton title="Active Investigation" variant="dark" noMargin="true" />
              <AccentButton title="Victim Won Case" variant="dark" noMargin="true" />
              <AccentButton title="Defendant Won Case" variant="dark" noMargin="true" />
              <AccentButton title="No Investigation" variant="dark" noMargin="true" />
            </Box>
          </Flex>
        </form>
      </ReportCaseContainer>
    )
  }
}

export default ReportCaseEvidence

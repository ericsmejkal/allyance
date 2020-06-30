import React from 'react'
import styled from '@emotion/styled'
import { Box, Flex } from '@rebass/emotion'

import { ReportCaseTitle } from '../atoms/title'
import { H4 } from '../atoms/text'
import { LinkInput } from '../atoms/input'
import { AccentButton } from '../atoms/button'
import Uploader from '../atoms/uploader'

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
          <Flex mt={3}>
            <H4>Upload evidence</H4>
          </Flex>
          <Flex mt={3} ml={-2} pb={4} mr={-2} alignItems="flex-end">
            <Box width={1} pl={2} pr={2}>
              <Uploader uploadType="images" uploadTitle="incident" />
            </Box>
            <Box width={1} pl={2} pr={2}>
              <Uploader uploadType="videos" uploadTitle="incident" />
            </Box>
          </Flex>
          <Flex mt={3} pb={4} alignItems="flex-end">
            <Box width={1}>
              <LinkInput
                placeholder="Add links to any additional video content that you've seen."
                rowTitle="Links to any evidence of the incident"
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
          <Flex mt={3} pb={4} flexDirection="column">
            <Box width={1}>
              <H4>Case status</H4>
            </Box>
            <Box width={1} display="flex" justifyContent="flex-start">
              <AccentButton
                title="Active Investigation"
                variant="dark"
                noMargin="true"
                marginRight="true"
              />
              <AccentButton
                title="Victim Won Case"
                variant="dark"
                noMargin="true"
                marginRight="true"
              />
              <AccentButton
                title="Defendant Won Case"
                variant="dark"
                noMargin="true"
                marginRight="true"
              />
              <AccentButton
                title="No Investigation"
                variant="dark"
                noMargin="true"
                marginRight="true"
              />
            </Box>
          </Flex>
        </form>
      </ReportCaseContainer>
    )
  }
}

export default ReportCaseEvidence

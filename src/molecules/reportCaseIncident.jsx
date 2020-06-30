import React from 'react'
import styled from '@emotion/styled'
import { Box, Flex } from '@rebass/emotion'

import { ReportCaseTitle } from '../atoms/title'
import { Input, TextAreaInput } from '../atoms/input'

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
        <ReportCaseTitle
          stepTitle="Explain the incident in detail"
          stepNumber={this.props.currentStep}
        />
        <form>
          <Flex mt={3} ml={-2} pb={4} mr={-2} alignItems="flex-end">
            <Box width={1} pl={2} pr={2}>
              <Input
                placeholder="In what zip code was the incident?"
                rowTitle="Add the location"
                type="number"
              />
            </Box>
            <Box width={1} mt={4} pl={2} pr={2}>
              <Input placeholder="Was there a specific neighborhood or area?" />
            </Box>
          </Flex>
          <Flex mt={3} ml={-2} pb={3} mr={-2} alignItems="flex-end">
            <Box width={1} pl={2} pr={2}>
              <Input
                placeholder="What was the date of the incident?"
                rowTitle="Add any details your have"
                type="date"
              />
            </Box>
            <Box width={1} mt={4} pl={2} pr={2}>
              <Input placeholder="Describe the incident in 40 characters." maxLength="40" />
            </Box>
          </Flex>
          <Flex mt={1} ml={-2} pb={3} mr={-2} alignItems="flex-end">
            <Box width={1} pl={2} pr={2}>
              <TextAreaInput placeholder="Describe what happened in as much detail as possible." />
            </Box>
          </Flex>
        </form>
      </ReportCaseContainer>
    )
  }
}

export default ReportCaseIncident

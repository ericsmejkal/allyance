import React from 'react'
import styled from '@emotion/styled'
import { Box, Flex } from '@rebass/emotion'

import { ReportCaseTitle } from '../atoms/title'
import { Input, DropdownInput, TextAreaInput } from '../atoms/input'

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
          <Flex mt={3} ml={-3} pb={4} mr={-3}>
            <Box width={1} pl={3} pr={3}>
              <DropdownInput
                placeholder="What state was the incident?"
                rowTitle="Add the location"
              />
            </Box>
            <Box width={1} mt={4} pl={3} pr={3}>
              <Input placeholder="What city was the incident in?" />
            </Box>
            <Box width={1} mt={4} pl={3} pr={3}>
              <Input placeholder="Add the zip code of the city" />
            </Box>
          </Flex>
          <Flex mt={3} ml={-3} pb={3} mr={-3}>
            <Box width={1} pl={3} pr={3}>
              <Input
                placeholder="What was the date of the incident?"
                rowTitle="Add any details your have"
              />
            </Box>
            <Box width={1} mt={4} pl={3} pr={3}>
              <Input placeholder="Describe the incident in 20 characters." />
            </Box>
          </Flex>
          <Flex mt={1} ml={-3} pb={3} mr={-3}>
            <Box width={1} pl={3} pr={3}>
              <TextAreaInput placeholder="Describe what happened in as much detail as possible." />
            </Box>
          </Flex>
        </form>
      </ReportCaseContainer>
    )
  }
}

export default ReportCaseIncident

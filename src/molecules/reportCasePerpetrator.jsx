import React from 'react'
import styled from '@emotion/styled'
import { Box, Flex } from '@rebass/emotion'

import { ReportCaseTitle } from '../atoms/title'
import { Input } from '../atoms/input'

const ReportCaseContainer = styled.div`
  width: 100%;
`

class ReportCasePerpetrator extends React.Component {
  render() {
    if (this.props.currentStep !== 2) {
      return null
    }
    return (
      <ReportCaseContainer>
        <ReportCaseTitle
          stepTitle="Who commited the injustice?"
          stepNumber={this.props.currentStep}
        />
        <form>
          <Flex mt={3} ml={-3} pb={4} mr={-3}>
            <Box width={1} pl={3} pr={3}>
              <Input placeholder="Do you know their first name?" rowTitle="Add their name" />
            </Box>
            <Box width={1} mt={4} pl={3} pr={3}>
              <Input placeholder="Do you know their last name?" />
            </Box>
          </Flex>
          <Flex mt={3} ml={-3} pb={3} mr={-3}>
            <Box width={1} pl={3} pr={3}>
              <Input
                placeholder="Did they have an identification number?"
                rowTitle="Add any details your have"
              />
            </Box>
            <Box width={1} mt={4} pl={3} pr={3}>
              <Input placeholder="What was their racial identity?" />
            </Box>
          </Flex>
          <Flex mt={1} ml={-3} pb={3} mr={-3}>
            <Box width={1} pl={3} pr={3}>
              <Input placeholder="Upload any images of this person." />
            </Box>
            <Box width={1} pl={3} pr={3}>
              <Input placeholder="Describe what they did in 20 characters." />
            </Box>
          </Flex>
        </form>
      </ReportCaseContainer>
    )
  }
}

export default ReportCasePerpetrator

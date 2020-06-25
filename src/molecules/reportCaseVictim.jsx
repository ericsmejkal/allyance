import React from 'react'
import styled from '@emotion/styled'
import { Box, Flex } from '@rebass/emotion'

import { ReportCaseTitle } from '../atoms/title'
import { Input, DropdownInput } from '../atoms/input'

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
        <ReportCaseTitle
          stepTitle="Who did this injustice happen to?"
          stepNumber={this.props.currentStep}
        />
        <form>
          <Flex mt={3} ml={-3} pb={4} mr={-3}>
            <Box width={1} pl={3} pr={3}>
              <Input placeholder="What is their first name?" rowTitle="Add their name" />
            </Box>
            <Box width={1} mt={4} pl={3} pr={3}>
              <Input placeholder="What is their last name?" />
            </Box>
          </Flex>
          <Flex mt={3} ml={-3} pb={3} mr={-3}>
            <Box width={1} pl={3} pr={3}>
              <Input placeholder="What is their age?" rowTitle="Add any details you have" />
            </Box>
            <Box width={1} mt={4} pl={3} pr={3}>
              <DropdownInput placeholder="What is their racial identity?" />
            </Box>
          </Flex>
          <Flex mt={1} ml={-3} pb={3} mr={-3}>
            <Box width={1} pl={3} pr={3}>
              <Input placeholder="Upload any images of the victim." />
            </Box>
            <Box width={1} pl={3} pr={3}>
              <Input placeholder="Describe the injustice in 20 characters." />
            </Box>
          </Flex>
        </form>
      </ReportCaseContainer>
    )
  }
}

export default ReportCaseVictim

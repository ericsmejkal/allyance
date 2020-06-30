import React from 'react'
import styled from '@emotion/styled'
import { Box, Flex } from '@rebass/emotion'

import { ReportCaseTitle } from '../atoms/title'
import { Input, DropdownInput } from '../atoms/input'
import Uploader from '../atoms/uploader'

const ReportCaseContainer = styled.div`
  width: 100%;
`

const raceOptions = [
  { value: 'black', label: 'Black' },
  { value: 'asian', label: 'Asian' },
  { value: 'nativeAmerican', label: 'Native American / Indigenous' },
  { value: 'pacificIslander', label: 'Pacific Islander' },
  { value: 'latinX', label: 'Latinx' },
  { value: 'white', label: 'White' },
]

class ReportCasePerpetrator extends React.Component {
  onDrop = (acceptedFiles) => {
    console.log(acceptedFiles)
  }
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
                placeholder="Did they have an identification number / badge?"
                rowTitle="Add any details your have"
              />
            </Box>
            <Box width={1} mt={4} pl={3} pr={3}>
              <DropdownInput options={raceOptions} placeholder="What is their racial identity?" />
            </Box>
          </Flex>
          <Flex mt={1} ml={-3} pb={3} mr={-3}>
            <Box width={1} pl={3} pr={3}>
              <Uploader uploadType="images" uploadTitle="perpetrator" />
            </Box>
            <Box width={1} pl={3} pr={3}>
              <Input placeholder="Describe what they did in 40 characters." maxLength="40" />
            </Box>
          </Flex>
        </form>
      </ReportCaseContainer>
    )
  }
}

export default ReportCasePerpetrator

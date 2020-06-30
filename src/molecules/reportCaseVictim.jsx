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
  { value: 'latinX', label: 'Latinx' },
  { value: 'asian', label: 'Asian' },
  { value: 'nativeAmerican', label: 'Native American / Indigenous' },
  { value: 'pacificIslander', label: 'Pacific Islander' },
  { value: 'white', label: 'White' },
]

class ReportCaseVictim extends React.Component {
  onDrop = (acceptedFiles) => {
    console.log(acceptedFiles)
  }

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
          <Flex mt={3} ml={-2} pb={4} mr={-2} alignItems="flex-end">
            <Box width={1} pl={2} pr={2}>
              <Input placeholder="What is their first name?" rowTitle="Add their name" />
            </Box>
            <Box width={1} mt={4} pl={2} pr={2}>
              <Input placeholder="What is their last name?" />
            </Box>
          </Flex>
          <Flex mt={3} ml={-2} pb={3} mr={-2} alignItems="flex-end">
            <Box width={1} pl={2} pr={2}>
              <Input
                placeholder="What is their age?"
                type="number"
                rowTitle="Add any details you have"
              />
            </Box>
            <Box width={1} mt={4} pl={2} pr={2}>
              <DropdownInput options={raceOptions} placeholder="What is their racial identity?" />
            </Box>
          </Flex>
          <Flex mt={1} ml={-2} pb={3} mr={-2} alignItems="flex-end">
            <Box width={1} pl={2} pr={2}>
              <Uploader uploadType="images" uploadTitle="victim" />
            </Box>
            <Box width={1} pl={2} pr={2}>
              <Input placeholder="Describe the injustice in 40 characters." maxLength="40" />
            </Box>
          </Flex>
        </form>
      </ReportCaseContainer>
    )
  }
}

export default ReportCaseVictim

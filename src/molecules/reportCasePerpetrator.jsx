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
  { value: 'middleEastern', label: 'Middle Eastern' },
  { value: 'latinX', label: 'Latinx' },
  { value: 'white', label: 'White' },
]

const chargeOptions = [
  { value: 'noCharge', label: 'No Charge' },
  { value: 'firedFromJob', label: 'Fired' },
  { value: 'onTrial', label: 'On Trial' },
  { value: 'chargedExcessiveForce', label: 'Charged - Excessive Force' },
  { value: 'chargedSexualAssault', label: 'Charged - Sexual Assault' },
  { value: 'charged3rdMurder', label: 'Charged - 3rd Degree Murder' },
  { value: 'charged2rdMurder', label: 'Charged - 2nd Degree Murder' },
  { value: 'charged1rdMurder', label: 'Charged - 1st Degree Murder' },
  { value: 'chargedOther', label: 'Charged - Other' },
]

class ReportCasePerpetrator extends React.Component {
  onDrop = (acceptedFiles) => {
    console.log(acceptedFiles)
  }
  render() {
    if (this.props.currentStep !== 2) {
      return null
    }

    const { form, setForm } = this.props
    return (
      <ReportCaseContainer>
        <ReportCaseTitle
          stepTitle="Who commited the injustice?"
          stepNumber={this.props.currentStep}
        />
        <form>
          <Flex mt={3} ml={-2} pb={4} mr={-2} alignItems="flex-end">
            <Box width={1} pl={2} pr={2}>
              <Input
                placeholder="Do you know their first name?"
                rowTitle="Add their name"
                value={form.perpetrator.firstName}
                onChange={(e) => {
                  setForm('perpetrator', { ...form.perpetrator, firstName: e.target.value })
                }}
              />
            </Box>
            <Box width={1} mt={4} pl={2} pr={2}>
              <Input
                placeholder="Do you know their last name?"
                value={form.perpetrator.lastName}
                onChange={(e) => {
                  setForm('perpetrator', { ...form.perpetrator, lastName: e.target.value })
                }}
              />
            </Box>
          </Flex>
          <Flex mt={3} ml={-2} pb={3} mr={-2} alignItems="flex-end">
            <Box width={1} pl={2} pr={2}>
              <Input
                placeholder="Did they have an identification number / badge?"
                rowTitle="Add any details you have"
              />
            </Box>
            <Box width={1} mt={4} pl={2} pr={2} alignItems="flex-end">
              <DropdownInput
                DropdownInput
                options={chargeOptions}
                placeholder="Does this person have any current charges?"
              />
            </Box>
          </Flex>
          <Flex mt={1} ml={-2} pb={3} mr={-2}>
            <Box width={1} pl={2} pr={2}>
              <Uploader uploadType="images" uploadTitle="perpetrator" />
            </Box>
            <Box width={1} pl={2} pr={2}>
              <DropdownInput options={raceOptions} placeholder="What is their racial identity?" />
            </Box>
          </Flex>
        </form>
      </ReportCaseContainer>
    )
  }
}

export default ReportCasePerpetrator

import React from 'react'
import styled from '@emotion/styled'

import { SubContainer } from '../atoms/container'
import ReportCaseVictim from '../molecules/reportCaseVictim'
import ReportCasePerpetrator from '../molecules/reportCasePerpetrator'
import ReportCaseIncident from '../molecules/reportCaseIncident'
import ReportCaseEvidence from '../molecules/reportCaseEvidence'
import ReportCaseTags from '../molecules/reportCaseTags'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

const ReportCaseContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 32px 0 120px;
  position: relative;
`

const NextButton = styled.div`
  font-size: 16px;
  border: 4px solid ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  transition: 0.2s ease-in-out;
  align-items: center;
  justify-content: center;
  padding: 8px 32px;
  width: 120px;
  cursor: pointer;
  position: absolute;
  right: 0;
  bottom: 80px;

  &:hover,
  &:focus,
  &:active {
    background-color: ${(props) => props.theme.colors.background};
    border-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.black};
  }
`

const BackButton = styled.div`
  font-size: 16px;
  transition: 0.2s ease-in-out;
  border: 4px solid ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 32px;
  width: 120px;
  cursor: pointer;
  position: absolute;
  left: 0;
  bottom: 80px;

  &:hover,
  &:focus,
  &:active {
    background-color: ${(props) => props.theme.colors.background};
    border-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.black};
  }
`

const ReportCaseButtons = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
`
// $longDescription: String
//     victim: {
//       firstName: String
//       lastName: String
//     }
//     perpetrator: {
//       firstName: String
//       lastName: String
//     }
//     tags: [{
//       id
//       content
//     }]
const CREATE_INCIDENT = gql`
  mutation createIncident($shortDescription: String) {
    createIncident(shortDescription: $shortDescription) {
      incident {
        id
        shortDescription
      }
    }
  }
`

class ReportCaseForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1, // Default is Step 1
      incident: {},
      victim: {},
      perpetrator: {},
      tags: [{ id: 35 }],
    }

    this.handleChange = this.handleChange.bind(this)
    this._next = this._next.bind(this)
    this._prev = this._prev.bind(this)
  }

  handleChange(key, value) {
    this.setState({
      [key]: value,
    })
  }

  _next() {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 4 ? 5 : currentStep + 1
    this.setState({
      currentStep: currentStep,
    })
  }

  _prev() {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1 ? 1 : currentStep - 1
    this.setState({
      currentStep: currentStep,
    })
  }

  get previousButton() {
    let currentStep = this.state.currentStep
    if (currentStep !== 1) {
      return (
        <BackButton className="btn btn-secondary" type="button" onClick={this._prev}>
          Previous
        </BackButton>
      )
    }
    return null
  }

  get nextButton() {
    let currentStep = this.state.currentStep
    // If the current step is not 6, then render the "next" button
    if (currentStep < 5) {
      return (
        <NextButton className="btn btn-primary float-right" type="button" onClick={this._next}>
          Next
        </NextButton>
      )
    }
    return null
  }

  submitButton(handleSubmit) {
    let currentStep = this.state.currentStep
    if (currentStep === 5) {
      return (
        <NextButton className="btn btn-primary float-right" type="button" onClick={handleSubmit}>
          Submit
        </NextButton>
      )
    }
    return null
  }

  render() {
    const [createIncident, { data }] = useMutation(CREATE_INCIDENT)

    const handleSubmit = (e) => {
      e.preventDefault()

      createIncident({ variables: { shortDescription: 'this is my description' } })
    }
    return (
      <SubContainer>
        <ReportCaseContainer>
          <form>
            <ReportCaseVictim
              currentStep={this.state.currentStep}
              form={this.state}
              setForm={this.handleChange}
            />
            <ReportCasePerpetrator
              currentStep={this.state.currentStep}
              form={this.state}
              setForm={this.handleChange}
            />
            <ReportCaseIncident
              currentStep={this.state.currentStep}
              form={this.state}
              setForm={this.handleChange}
            />
            <ReportCaseEvidence
              currentStep={this.state.currentStep}
              form={this.state}
              setForm={this.handleChange}
            />
            <ReportCaseTags
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              form={this.state}
              setForm={this.handleChange}
            />
            <ReportCaseButtons>
              {this.previousButton}
              {this.nextButton}
              {this.submitButton(handleSubmit)}
            </ReportCaseButtons>
          </form>
        </ReportCaseContainer>
      </SubContainer>
    )
  }
}

export default ReportCaseForm

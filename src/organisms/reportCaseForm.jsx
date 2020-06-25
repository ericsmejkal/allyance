import React from 'react'
import styled from '@emotion/styled'

import { SubContainer } from '../atoms/container'
import ReportCaseVictim from '../molecules/reportCaseVictim'
import ReportCasePerpetrator from '../molecules/reportCasePerpetrator'
import ReportCaseIncident from '../molecules/reportCaseIncident'
import ReportCaseEvidence from '../molecules/reportCaseEvidence'
import ReportCaseTags from '../molecules/reportCaseTags'

const ReportCaseContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 35px 0;
`

const NextButton = styled.div`
  border: 4px solid #000;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px; 30px;
  width: 100px;
  cursor: pointer;
`

const BackButton = styled.div`
  border: 4px solid #000;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px; 30px;
  width: 100px;
  cursor: pointer;
`

const ReportCaseButtons = styled.div`
  display: flex;
  margin-top: 60px;
  justify-content: space-between;
`

class ReportCaseForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1, // Default is Step 1
    }

    this.handleChange = this.handleChange.bind(this)
    this._next = this._next.bind(this)
    this._prev = this._prev.bind(this)
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  // WIP - Fix later
  handleSubmit = (event) => {
    event.preventDefault()
    const {} = this.state
    alert(`submission complete`)
  }

  _next() {
    let currentStep = this.state.currentStep
    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 4 ? 5 : currentStep + 1
    this.setState({
      currentStep: currentStep,
    })
  }

  _prev() {
    let currentStep = this.state.currentStep
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1
    this.setState({
      currentStep: currentStep,
    })
  }

  get previousButton() {
    let currentStep = this.state.currentStep
    // If the current step is not 1, then render the "previous" button
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
    if (currentStep < 6) {
      return (
        <NextButton className="btn btn-primary float-right" type="button" onClick={this._next}>
          Next
        </NextButton>
      )
    }
    return null
  }

  render() {
    return (
      <SubContainer>
        <ReportCaseContainer>
          <form onSubmit={this.handleSubmit}>
            <ReportCaseVictim
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
            />
            <ReportCasePerpetrator
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
            />
            <ReportCaseIncident
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
            />
            <ReportCaseEvidence
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
            />
            <ReportCaseTags currentStep={this.state.currentStep} handleChange={this.handleChange} />
            <ReportCaseButtons>
              {this.previousButton}
              {this.nextButton}
            </ReportCaseButtons>
          </form>
        </ReportCaseContainer>
      </SubContainer>
    )
  }
}

// const ReportCaseStepContainer = styled.div`
//   display: Flex;
//   align-items: AlignCenter;
// }
// `

// function ReportCaseVictim(props) {
//   if (props.currentStep !== 1) {
//     return null
//   }
//   return (
//     <ReportCaseStepContainer className="form-group">
//       <label htmlFor="email">Victim</label>
//       <input
//         className="form-control"
//         id="email"
//         name="email"
//         type="text"
//         placeholder="Enter email"
//         value={props.email}
//         onChange={props.handleChange}
//       />
//     </ReportCaseStepContainer>
//   )
// }

// function ReportCasePerpetrator(props) {
//   if (props.currentStep !== 2) {
//     return null
//   }
//   return (
//     <div className="form-group">
//       <label htmlFor="username">Perpetrator</label>
//       <input
//         className="form-control"
//         id="username"
//         name="username"
//         type="text"
//         placeholder="Enter username"
//         value={props.username}
//         onChange={props.handleChange}
//       />
//     </div>
//   )
// }

// function ReportCaseIncident(props) {
//   if (props.currentStep !== 3) {
//     return null
//   }
//   return (
//     <React.Fragment>
//       <div className="form-group">
//         <label htmlFor="password">Incident</label>
//         <input
//           className="form-control"
//           id="password"
//           name="password"
//           type="password"
//           placeholder="Enter password"
//           value={props.password}
//           onChange={props.handleChange}
//         />
//       </div>
//       <button className="btn btn-success btn-block">Sign up</button>
//     </React.Fragment>
//   )
// }

// function ReportCaseEvidence(props) {
//   if (props.currentStep !== 4) {
//     return null
//   }
//   return (
//     <React.Fragment>
//       <div className="form-group">
//         <label htmlFor="password">Evidence</label>
//         <input
//           className="form-control"
//           id="password"
//           name="password"
//           type="password"
//           placeholder="Enter password"
//           value={props.password}
//           onChange={props.handleChange}
//         />
//       </div>
//       <button className="btn btn-success btn-block">Sign up</button>
//     </React.Fragment>
//   )
// }

// function ReportCaseTags(props) {
//   if (props.currentStep !== 5) {
//     return null
//   }
//   return (
//     <React.Fragment>
//       <div className="form-group">
//         <label htmlFor="password">Tags</label>
//         <input
//           className="form-control"
//           id="password"
//           name="password"
//           type="password"
//           placeholder="Enter password"
//           value={props.password}
//           onChange={props.handleChange}
//         />
//       </div>
//       <button className="btn btn-success btn-block">Sign up</button>
//     </React.Fragment>
//   )
// }

export default ReportCaseForm

// ReactDOM.render(<ReportCaseForm />, document.getElementById('root'))

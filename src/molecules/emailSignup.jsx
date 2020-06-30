import React from 'react'
import styled from '@emotion/styled'

import { Input, InputLight } from '../atoms/input'
import { Button } from '../atoms/button'

const FormContainer = styled.div`
  display: flex;
  max-width: 500px;
`

const EmailInput = styled(Input)`
  border-right: none;
  border: 4px solid ${(props) => props.theme.colors.white};
  background: transparent;
  background-color: transparent;
  border-radius: 0;
  margin-top: 0;
`

const SubmitButton = styled(Button)`
  height: 48px;
  border: 4px solid ${(props) => props.theme.colors.white};
  background: transparent;
  border-radius: 0;
`

export function EmailSignup(props) {
  return (
    <FormContainer>
      <EmailInput placeholder={props.placeholder} email={true} />
      <SubmitButton title={props.title} />
    </FormContainer>
  )
}

export function EmailSignupLight(props) {
  return (
    <FormContainer>
      <InputLight placeholder={props.placeholder} email={true} />
      <SubmitButton title={props.title} />
    </FormContainer>
  )
}

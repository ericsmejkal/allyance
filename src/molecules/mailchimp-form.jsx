import React from 'react'
import styled from '@emotion/styled'
import { darken } from 'polished'

import Mailchimp from 'react-mailchimp-form'

const CustomForm = styled.div`
  display: flex;
  max-width: 600px;

  form {
    display: inline-block;
    width: 100%;
    position: relative;
  }

  input {
    height: calc(1.8em + 1rem + 2px);
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    line-height: 1.5;
    border-radius: 0;
    color: ${(props) => props.theme.colors.white};
    transition: background-color 0.15s ease-in-out;
    background: linear-gradient(360deg, #353535 0%, rgba(83, 83, 83, 0) 100%);
    background-color: linear-gradient(360deg, #353535 0%, rgba(83, 83, 83, 0) 100%);
    background-clip: padding-box;
    border: 4px solid ${(props) => props.theme.colors.white};
    width: 70%;
    outline: none;

    &.input--email {
      height: calc(1.8em + 1rem + 2px);
      border-right: none;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &::placeholder {
      color: ${(props) => props.theme.colors.white};
    }
    &:hover,
    &:focus,
    &:active {
      background-color: ${(props) => darken(0.1, props.theme.colors.darkGrey)};
    }
  }

  button {
    height: calc(1.8em + 1rem + 2px);
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    line-height: 1.5;
    border-radius: 0;
    color: ${(props) => props.theme.colors.white};
    transition: background-color 0.15s ease-in-out;
    background: linear-gradient(360deg, #353535 0%, rgba(83, 83, 83, 0) 100%);
    background-color: linear-gradient(360deg, #353535 0%, rgba(83, 83, 83, 0) 100%);
    background-clip: padding-box;
    border-top: 4px solid ${(props) => props.theme.colors.white};
    border-right: 4px solid ${(props) => props.theme.colors.white};
    border-bottom: 4px solid ${(props) => props.theme.colors.white};
    border-left: 0px solid ${(props) => props.theme.colors.white};
    outline: none;
    cursor: pointer;

    &:hover,
    &:focus,
    &:active {
      color: ${(props) => props.theme.colors.white};
      background-color: ${(props) => darken(0.1, props.theme.colors.darkGrey)};
      border-color: ${(props) => props.theme.colors.white};
    }
  }

  .msg-alert {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: -40px;

    p {
      color: #ff0000;
    }
  }
}
`

export function MailchimpForm(props) {
  return (
    <CustomForm>
      <Mailchimp
        action="https://allyance.us10.list-manage.com/subscribe/post?u=6d4b2e29e3c513997fcad9b2a&amp;id=9b25ce30d7"
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Enter Your Email',
            type: 'email',
            required: true,
          },
        ]}
        messages={{
          sending: 'Sending...',
          success: 'Thank you for subscribing!',
          error: 'An unexpected internal error has occurred.',
          empty: 'You must write an e-mail.',
          duplicate: 'Too many subscribe attempts for this email address',
          button: 'Join',
        }}
        className="mailchimp__email-form"
      />
    </CustomForm>
  )
}

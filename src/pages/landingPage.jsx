import React from 'react'
import styled from '@emotion/styled'
import { Box, Flex } from '@rebass/emotion'
import { darken } from 'polished'
import backgroundImage from '../assets/images/allyance__hero--landingpage.jpg'

import { Paragraph, H1, H3 } from '../atoms/text'
import Mailchimp from 'react-mailchimp-form'
import ReactRotatingText from 'react-rotating-text'

const CustomOverlay = styled.div`
  background: linear-gradient(180deg, #030C07 0%, #2D2D2D 100%);
  height: 100vh;
  width: 100%;
  display: block;
`

const AtomicPageContainer = styled.main`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  H1 {
    color: #fff;
    min-height: 190px;

    @media screen and (max-width: 1000px) {
      min-height: 150px;
    }
  }
  H3 {
    color: #959595;
  }
`


const AtomicPageParagraph = styled(Paragraph)`
  color: #fff;
  max-width: 600px;
  margin: 40px auto 60px 0;
  text-align: left;
`

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
    color: #fff;
    transition: background-color 0.15s ease-in-out;
    background: linear-gradient(360deg, #353535 0%, rgba(83, 83, 83, 0) 100%);
    background-color: linear-gradient(360deg, #353535 0%, rgba(83, 83, 83, 0) 100%);
    background-clip: padding-box;
    border: 4px solid #fff;
    width: 70%;
    outline: none;

    &.input--email {
      height: calc(1.8em + 1rem + 2px);
      border-right: none;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &::placeholder {
      color: #fff;
    }
    &:hover,
    &:focus,
    &:active {
      background-color: ${props => darken(0.1, props.theme.colors.darkGrey)};
    }
  }

  button {
    height: calc(1.8em + 1rem + 2px);
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    line-height: 1.5;
    border-radius: 0;
    color: #fff;
    transition: background-color 0.15s ease-in-out;
    background: linear-gradient(360deg, #353535 0%, rgba(83, 83, 83, 0) 100%);
    background-color: linear-gradient(360deg, #353535 0%, rgba(83, 83, 83, 0) 100%);
    background-clip: padding-box;
    border-top: 4px solid #fff;
    border-right: 4px solid #fff;
    border-bottom: 4px solid #fff;
    border-left: 0px solid #fff;
    outline: none;
    cursor: pointer;

    &:hover,
    &:focus,
    &:active {
      color: ${props => props.theme.colors.white};
      background-color: ${props => darken(0.1, props.theme.colors.darkGrey)};
      border-color: #fff;
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

// const Mailchimp = styled.main(Form)`
//   width: 100%;
// `

export function LandingPage(props) {
  return (
    <main className="atomic-page">
      <CustomOverlay>
        <AtomicPageContainer style={{backgroundImage:`url(${backgroundImage})`}}>
          <Flex width={1} pl={[4, 4, 6, 6]} pr={[4, 4, 6, 6]}>
            <Box width={1}>
            <H3>Strength in numbers.</H3>
            <H1>Holding our justice system
              <br />
              accountable for acts of
              <br />
              <ReactRotatingText items={['police brutality.', 'excessive force.', 'white supremacy.', 'social injustice.']} cursor={false} />
              </H1>
            <AtomicPageParagraph largeText>
            If you would like to join the fight, sign up below and help in our quest to develop a platform to hold our police force accountable for their actions, in an effort to influence the needed change we deserve.
            </AtomicPageParagraph>
            {/* <EmailSignup placeholder="Enter Your Email" title="Join"/> */}
            <CustomForm>
            <Mailchimp
              action='https://allyance.us10.list-manage.com/subscribe/post?u=6d4b2e29e3c513997fcad9b2a&amp;id=9b25ce30d7'
              fields={[
                {
                  name: 'EMAIL',
                  placeholder: 'Enter Your Email',
                  type: 'email',
                  required: true
                }
              ]}
              messages = {
                {
                  sending: "Sending...",
                  success: "Thank you for subscribing!",
                  error: "An unexpected internal error has occurred.",
                  empty: "You must write an e-mail.",
                  duplicate: "Too many subscribe attempts for this email address",
                  button: "Join"
                }
              }
              className='mailchimp__email-form'
            />
            </CustomForm>
            </Box>
          </Flex>
        </AtomicPageContainer>
      </CustomOverlay>
    </main>
  )
}

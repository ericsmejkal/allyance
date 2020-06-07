import React from 'react'
import styled from '@emotion/styled'
import { Box, Flex } from '@rebass/emotion'
import backgroundImage from '../assets/images/allyance__hero--landingpage.jpg'

import { Paragraph, H1, H3 } from '../atoms/text'
import { MailchimpForm } from '../molecules/mailchimp-form'
import ReactRotatingText from 'react-rotating-text'

const AtomicPageContainer = styled.main`
  height: auto;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: flex-start;
  z-index: 1;

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

const CustomOverlay = styled.div`
  background: linear-gradient(180deg, #030c07 0%, #2d2d2d 100%);
  height: 100vh;
  width: 100%;
  display: block;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
`

const AtomicPageParagraph = styled(Paragraph)`
  color: #fff;
  max-width: 600px;
  margin: 40px auto 60px 0;
  text-align: left;
`

export function LandingPage(props) {
  return (
    <main className="atomic-page">
      <AtomicPageContainer>
        <CustomOverlay>
          <Flex
            width={1}
            height="100vh"
            alignItems="center"
            pl={[4, 4, 6, 6]}
            pr={[4, 4, 6, 6]}
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <Box width={1}>
              <H3>Strength in numbers.</H3>
              <H1>
                Holding our justice system
                <br />
                accountable for acts of
                <br />
                <ReactRotatingText
                  items={[
                    'police brutality.',
                    'excessive force.',
                    'white supremacy.',
                    'social injustice.',
                  ]}
                  cursor={false}
                />
              </H1>
              <AtomicPageParagraph largeText>
                If you would like to join the fight, sign up below and help in our quest to develop
                a platform to hold our police force accountable for their actions, in an effort to
                influence the needed change we deserve.
              </AtomicPageParagraph>
              <MailchimpForm />
            </Box>
          </Flex>
        </CustomOverlay>
      </AtomicPageContainer>
    </main>
  )
}

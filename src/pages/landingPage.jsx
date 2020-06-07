import React from 'react'
import styled from '@emotion/styled'
import { Box, Flex } from '@rebass/emotion'
import backgroundImage from '../assets/images/allyance__hero--landingpage.jpg'
import metaImage from '../assets/images/allyance__meta-image--landingpage.jpg'
import { Paragraph, H1, H3 } from '../atoms/text'
import { MailchimpForm } from '../molecules/mailchimp-form'
import { TypeaheadText } from '../molecules/typeahead-text'
import MetaTags from 'react-meta-tags'

const AtomicPageContainer = styled.main`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 3;

  H1 {
    color: #fff;
    min-height: 190px;

    @media screen and (max-width: 1000px) {
      min-height: 130px;
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
  position: absolute;
  opacity: 0.9;
  z-index: 2;
  top: 0;
  left: 0;
`

const CustomBackground = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
`

const AtomicPageParagraph = styled(Paragraph)`
  color: #fff;
  max-width: 600px;
  margin: 20px auto 60px 0;
  text-align: left;
  z-index: 3;
`

export function LandingPage(props) {
  return (
    <main className="atomic-page">
      <MetaTags>
        <title>allyance – strength in numbers.</title>
        <meta
          name="description"
          content="If you would like to join the fight, sign up below and help in our quest to develop a platform to hold our police force accountable for their actions, in an effort to influence the needed change we deserve."
        />
        <meta property="og:title" content="allyance – strength in numbers." />
        <meta property="og:image" content={metaImage} />
      </MetaTags>
      <AtomicPageContainer>
        <Flex
          height="100vh"
          style={{ zIndex: '4' }}
          alignItems="center"
          pl={[4, 4, 6, 6]}
          pr={[4, 4, 6, 6]}
        >
          <Box>
            <H3>Strength in numbers.</H3>
            <H1>
              Holding our justice system
              <br />
              accountable for acts of
              <br />
              <TypeaheadText />
            </H1>
            <AtomicPageParagraph largeText>
              We need your help to develop this platform - to hold the system accountable for the
              world's ongoing injustices. If you would like to join the fight, sign up below.
            </AtomicPageParagraph>
            <MailchimpForm />
          </Box>
        </Flex>

        <CustomOverlay />
        <CustomBackground
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </AtomicPageContainer>
    </main>
  )
}

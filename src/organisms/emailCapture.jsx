import React from 'react'
import styled from '@emotion/styled'
import { Box, Flex } from '@rebass/emotion'

import { Container } from '../atoms/container'
import { Paragraph, H2 } from '../atoms/text'
import { MailchimpForm } from '../molecules/mailchimpForm'

const SignUpContainer = styled.div`
  background-color: ${(props) => props.theme.colors.darkGrey};
  width: 100%;
  padding: 64px 0;
  margin-top: 100px;
  background-size: cover;

  p {
    max-width: 500px;
    margin-bottom: 0px;
  }
`

export function EmailCapture(props) {
  return (
    <SignUpContainer>
      <Container>
        <Flex flexWrap="wrap" alignItems="flex-end">
          <Box width={[1, 1, 1 / 2, 3 / 5]}>
            <H2 whiteText>We are in this together</H2>
            <Paragraph whiteText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum facilisis eu massa
              eget purus velit. Sed nulla morbi aliquam vitae senectus neque. Eu quis a, lacus
              viverra. Mauris nibh tortor et nunc vitae rutrum sodales.
            </Paragraph>
          </Box>

          <Box width={[1, 1, 1 / 2, 2 / 5]} textAlign="right" justifyContent="flex-end">
            <Paragraph whiteText>
              <b>1,123,199 </b> people have joined the fight
            </Paragraph>
            <br />
            <MailchimpForm placeholder="Email Address" title="Join" />
          </Box>
        </Flex>
      </Container>
    </SignUpContainer>
  )
}

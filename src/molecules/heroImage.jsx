import React from 'react'
import { Box } from '@rebass/emotion'
import heroImage from '../assets/images/allyance__phone-background--1.jpg'
import styled from '@emotion/styled'

import { Paragraph, H4, H5 } from '../atoms/text'

const PhoneContainer = styled.div`
  width: 362px;
  height: 709px;
  border-radius: 50px;
  overflow: hidden;
  border: 6px solid #1a1a1a;
  background: url(${heroImage});
  background-position: top center;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
`

const PhoneContent = styled.div`
  position: absolute;
  bottom: 0;
  padding: 20px;
  width: 100%;
  border-radius: 30px;
  background-color: ${(props) => props.theme.colors.darkGrey};

  H4 {
    color: ${(props) => props.theme.colors.white};
  }
  H5 {
    color: ${(props) => props.theme.colors.brandPrimary};
    padding-bottom: 5px;
  }
  p {
    color: ${(props) => props.theme.colors.white};
    opacity: 0.8;
  }
`

export function HeroImage(props) {
  return (
    <Box display="flex" marginTop={240}>
      <PhoneContainer>
        <PhoneContent>
          <H5>15 mins ago</H5>
          <H4>Man suffer's brain damage</H4>
          <Paragraph>Downtown Los Angeles</Paragraph>
        </PhoneContent>
      </PhoneContainer>
    </Box>
  )
}

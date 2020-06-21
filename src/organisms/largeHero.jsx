import React from 'react'
import { Box, Flex, Image } from '@rebass/emotion'
import backgroundImage from '../assets/images/allyance__hero--landingpage.jpg'
import heroImage from '../assets/images/hero-phone.png'
import styled from '@emotion/styled'
import ReactRotatingText from 'react-rotating-text'

import { AccentButton } from '../atoms/button'
import { Container } from '../atoms/container'
import { H1, H3 } from '../atoms/text'

const HeroContainer = styled.main`
  display: flex;
  align-items: center;
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
  height: 800px;
  width: 100%;
  position: absolute;
  opacity: 0.975;
  z-index: 2;
  top: 0;
  left: 0;
`

const CustomBackground = styled.div`
  height: 800px;
  width: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
`

export function LargeHero(props) {
  return (
    <HeroContainer>
      <Container style={{ zIndex: '4' }}>
        <Flex alignItems="center" justifyContent="space-between">
          <Box>
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
                  'bigotry & hate.',
                  'sexual harassment.',
                  'corporate corruption.',
                ]}
                cursor={false}
              />
            </H1>
            <AccentButton title="Report A Case" />
          </Box>
          <Box display="flex" marginTop={240}>
            <Image src={heroImage} alt="allyance__hero-image" width="100%" />
          </Box>
        </Flex>
      </Container>

      <CustomOverlay />
      <CustomBackground
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </HeroContainer>
  )
}

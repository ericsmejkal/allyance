import React from 'react'
import { Box, Flex } from '@rebass/emotion'
import backgroundImage from '../assets/images/allyance__hero--landingpage.jpg'
import styled from '@emotion/styled'
import ReactRotatingText from 'react-rotating-text'

import { AccentButton } from '../atoms/button'
import { Container } from '../atoms/container'
import { H1, H3, H4, H5 } from '../atoms/text'
import { HeroImage } from '../molecules/heroImage'

const HeroContainer = styled.main`
  display: flex;
  align-items: center;
  z-index: 3;

  H1 {
    color: #fff;
    min-height: 190px;

    @media screen and (max-width: 1000px) {e
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

const SmallHeroContainer = styled.main`
  display: flex;
  align-items: center;
  padding: 9% 0 10%;
  margin-bottom: -100px;
  background: linear-gradient(180deg, #030c07 0%, #2d2d2d 100%);
  width: 100%;

  H1 {
    color: #fff;
    max-width: 450px;
    line-height: 50px;
    margin-top: 30px;

    @media screen and (max-width: 1000px) {
      min-height: 130px;
    }
  }
  H4 {
    color: ${(props) => props.theme.colors.lightestGrey};
  }
  H5 {
    color: ${(props) => props.theme.colors.lightestGrey};
  }
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
            <AccentButton title="Report A Case" variant="light" />
          </Box>
          <HeroImage />
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

export function SmallHero(props) {
  return (
    <SmallHeroContainer>
      <Container style={{ zIndex: '4' }}>
        <Flex>
          <Box>
            <H5>{props.page}</H5>
            <H1>{props.header}</H1>
            <H4>{props.subHeader}</H4>
          </Box>
        </Flex>
      </Container>
    </SmallHeroContainer>
  )
}

import React from 'react'
import styled from '@emotion/styled'
import { Flex, Link as ExternalLink } from '@rebass/emotion'
import { Twitter, Instagram } from 'react-feather'
import { Link } from 'react-router-dom'

import { LightLogo } from '../atoms/logo'
import { Container } from '../atoms/container'
import { H5 } from '../atoms/text'

const NavigationContainer = styled.div`
  background: transparent;
  padding: 40px 0 0 0;
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: 10;
`
const LogoBox = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 20%;
`

const SplitRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 80%;
`

const SocialBox = styled.div`
  display: flex;
  justify-content: flex-end;
`

const LinkBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  H5 {
    color: ${(props) => props.theme.colors.white};
    padding-right: 48px;
    transition: 0.2s ease-in-out;

    :hover {
      color: ${(props) => props.theme.colors.brandPrimary};
    }
  }
`

const IconBox = styled.div`
  padding-left: 24px;

  svg {
    cursor: pointer;
    transition: 0.2s ease-in-out;
    margin-bottom: -8px;
    :hover {
      stroke: ${(props) => props.theme.colors.brandPrimary};
    }
  }
`

export function Navigation(props) {
  return (
    <NavigationContainer>
      <Container>
        <Flex flexWrap="wrap" width={1}>
          <LogoBox width={[1, 1, 1 / 2, 3 / 5]}>
            <Link to="/">
              <LightLogo />
            </Link>
          </LogoBox>

          <SplitRight>
            <LinkBox>
              <Link to="/browse-cases">
                <H5>Browse cases</H5>
              </Link>
              <Link to="/report-a-case">
                <H5>Report A Case</H5>
              </Link>
            </LinkBox>
            <SocialBox width={[1, 1, 1 / 2, 2 / 5]}>
              <IconBox>
                <ExternalLink href="https://twitter.com/ourallyance" target="_blank">
                  <Twitter color="white" />
                </ExternalLink>
              </IconBox>
              <IconBox pl={4}>
                <ExternalLink href="https://instagram.com/ourallyance" target="_blank">
                  <Instagram color="white" />
                </ExternalLink>
              </IconBox>
            </SocialBox>
          </SplitRight>
        </Flex>
      </Container>
    </NavigationContainer>
  )
}

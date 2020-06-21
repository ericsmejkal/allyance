import React from 'react'
import styled from '@emotion/styled'
import { Box, Flex, Link as ExternalLink } from '@rebass/emotion'

import { H5 } from '../atoms/text'

const FooterContainer = styled.div`
  background: #000;
  padding: 40px 0;
  position: static;
  bottom: 0;
  width: 100%;
  justify-content: space-between;
  z-index: 10;
  @media screen and (max-width: 1000px) {
    display: none;
  }

  H5 {
    color: ${(props) => props.theme.colors.white};
    transition: 0.2s ease-in-out;

    a {
      color: ${(props) => props.theme.colors.white};
      :hover {
        color: ${(props) => props.theme.colors.brandPrimary};
      }
    }
  }

  @media screen and (max-width: 1000px) {
    padding: 20px 0;
  }
`

export function Footer(props) {
  return (
    <FooterContainer>
      <Flex flexWrap={['nowrap', 'nowrap', 'wrap', 'wrap']} pl={[4, 4, 6, 6]} pr={[4, 4, 6, 6]}>
        <Box width={[1, 1, 1 / 2, 3 / 5]}>
          <H5>
            © 2020 allyance – All Rights Reserved –{' '}
            <a href="mailto:info@allyance.co">info@allyance.co</a>
          </H5>
        </Box>

        <Box width={[1, 1, 1 / 2, 2 / 5]}>
          <H5 style={{ textAlign: 'right' }} pl={2}>
            <ExternalLink
              href="https://www.instagram.com/clay.banks/?utm_medium=referral&utm_source=unsplash"
              target="_blank"
            >
              Photo: @clay.banks
            </ExternalLink>
          </H5>
        </Box>
      </Flex>
    </FooterContainer>
  )
}

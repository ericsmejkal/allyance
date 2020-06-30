import React from 'react'
import styled from '@emotion/styled'
import { Box, Flex } from '@rebass/emotion'
import { Link } from 'react-router-dom'

import { H5 } from '../atoms/text'
import { Container } from '../atoms/container'
import { EmailCapture } from '../organisms/emailCapture'

const FooterContainer = styled.div`
  background: #000;
  position: static;
  bottom: 0;
  padding: 16px 0;
  justify-content: space-between;
  z-index: 10;
  @media screen and (max-width: 1000px) {
    display: none;
  }

  H5 {
    color: ${(props) => props.theme.colors.white};
    transition: 0.2s ease-in-out;
    padding-right: 8px;

    a {
      color: ${(props) => props.theme.colors.white};
      padding: 0 8px;
      :hover {
        color: ${(props) => props.theme.colors.brandPrimary};
      }
    }
  }

  @media screen and (max-width: 1000px) {
    padding: 8px 0;
  }
`

export function Footer(props) {
  return (
    <>
      <EmailCapture />
      <FooterContainer>
        <Container>
          <Flex flexWrap={['nowrap', 'nowrap', 'wrap', 'wrap']}>
            <Box width={[1, 1, 1 / 2, 3 / 5]}>
              <H5>
                © 2020 allyance – All Rights Reserved:{'  '}
                {'  '}
                <a href="mailto:info@allyance.co">info@allyance.co</a>
              </H5>
            </Box>

            <Box width={[1, 1, 1 / 2, 2 / 5]}>
              <H5 style={{ textAlign: 'right' }}>
                <Link to="/terms-of-service">Terms of Service</Link>
                {'  '}
                {'  '}–{'  '}
                {'  '}
                <Link to="/terms-of-service">Privacy Policy</Link>
              </H5>
            </Box>
          </Flex>
        </Container>
      </FooterContainer>
    </>
  )
}

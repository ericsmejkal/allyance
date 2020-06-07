import React from 'react'
import styled from '@emotion/styled'
import { Box, Flex } from '@rebass/emotion'

import { H5 } from '../atoms/text'

const FooterContainer = styled.div`
  background: transparent;
  padding: 40px 0;
  position: absolute;
  bottom: 0;
  width: 100%;
  justify-content: space-between;

  H5 {
    color: #fff;
    transition: 0.2s ease-in-out;

    &: hover {
      opacity: 1;
    }
  }
`

export function Footer(props) {
  return (
    <FooterContainer>
        <Flex flexWrap="wrap" pl={[4, 4, 6, 6]} pr={[4, 4, 6, 6]} >
          <Box width={[1, 1, 1/2, 3 / 5]}>
            <H5>© 2020 allyance – All Rights Reserved</H5>
          </Box>

          <Box width={[1, 1, 1/2, 2 / 5]}>
            {/* <H5 style={{textAlign: 'right'}} pl={2}>Privacy policy</H5> */}
          </Box>
        </Flex>
    </FooterContainer>
  )
}

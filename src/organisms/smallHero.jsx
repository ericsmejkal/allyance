import React from 'react'
import styled from '@emotion/styled'
import { Box, Flex } from '@rebass/emotion'

import { Container } from '../atoms/container'
import { H1 } from '../atoms/text'

const SignUpContainer = styled.div`
  background: ${(props) => props.theme.colors.darkGray};
  padding: 7% 0;
`

export function SmallHero(props) {
  return (
    <SignUpContainer>
      <Container>
        <Flex flexWrap="wrap">
          <Box width={[1, 1, 1 / 2, 3 / 5]} p={3}>
            <H1>Hero Section</H1>
          </Box>
        </Flex>
      </Container>
    </SignUpContainer>
  )
}

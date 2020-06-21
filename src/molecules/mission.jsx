import React from 'react'
import styled from '@emotion/styled'
import { Box, Flex } from '@rebass/emotion'

import { Container } from '../atoms/container'
import { Paragraph } from '../atoms/text'

const MissionContainer = styled.div`
  max-width: 60%;
  margin-top: -100px;
  margin-bottom: 80px;
  display: flex;
  align-items: flex-end;
  p {
    color: ${(props) => props.theme.colors.black};
  }
`

export function Mission(props) {
  return (
    <Container>
      <MissionContainer>
        <Flex flexWrap="wrap">
          <Box width={1}>
            <Paragraph>
              We the People of the United States of America, in Order to form a more perfect Union,
              establish Justice, insure domestic Tranquility, provide for the common defense,
              promote the general Welfare, and secure the Blessings of Liberty to ourselves and our
              Posterity, do ordain andestablish this Community for the United States of America.
            </Paragraph>
          </Box>
        </Flex>
      </MissionContainer>
    </Container>
  )
}

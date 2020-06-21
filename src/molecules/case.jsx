import React from 'react'
import styled from '@emotion/styled'
import { Box, Flex } from '@rebass/emotion'

import { H4, H6 } from '../atoms/text'

const CaseContainer = styled.div`
  p {
    color: ${(props) => props.theme.colors.black};
  }
`

const CaseFeedImageContainer = styled.div`
  width: 100%;
  background: #000;
  display: flex;
  align-items: flex-end;
  padding: 170px 20px 20px;
  position: relative;
  flex-wrap: wrap;

  h4,
  h6 {
    color: #fff;
    width: 100%;
  }
`

const CaseFeedMetaContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.darkGrey};
  height: auto;
  padding: 30px 20px;
  position: absolute:
  bottom: 0;
  left: 0;

  h6 {
    color: white;
  }
`

export function Case(props) {
  return (
    <CaseContainer>
      <Flex flexWrap="wrap">
        <Box width={1}>
          <CaseFeedImageContainer>
            <H4>George Floyd</H4>
            <H6>Murdered by police in Minneapolis</H6>
          </CaseFeedImageContainer>
          <CaseFeedMetaContainer>
            <H6>Location // Date</H6>
            <br />
            <H6>Tags</H6>
          </CaseFeedMetaContainer>
        </Box>
      </Flex>
    </CaseContainer>
  )
}

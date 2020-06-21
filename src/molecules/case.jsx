import React from 'react'
import styled from '@emotion/styled'
import { Box, Flex } from '@rebass/emotion'
import CaseImage from '../assets/images/allyance__casefeedimage__placeholder.png'
import { Link } from 'react-router-dom'
import { Play } from 'react-feather'

import { H4, H5, H6 } from '../atoms/text'
import { CaseStatusLabel } from '../atoms/label'
import { Tag } from '../atoms/button'

const CaseContainer = styled.div``

const CaseFeedImageContainer = styled.div`
  width: 100%;
  background: #000;
  display: flex;
  height: 320px;
  align-items: flex-end;
  position: relative;
  flex-wrap: wrap;
`

const CaseFeedImage = styled.div`
  background-size: cover;
  height: 320px;
  width: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 56.25%, #000000 100%), url(${CaseImage});
`

const CaseFeedTitle = styled.div`
  padding: 20px;
  position: absolute;
  bottom: 0;
  left: 0;

  h4,
  h5 {
    color: #fff;
    width: 100%;
    padding-bottom: 5px;
    transition: 0.2s ease-in-out;

    :hover {
      color: ${(props) => props.theme.colors.brandPrimary};
    }
  }

  svg {
    border: 2px solid #fff;
    border-radius: 20px;
    padding: 8px;
    opacity: 0.6;
    fill: ${(props) => props.theme.colors.white};
    transition: 0.2s ease-in-out;
    cursor: pointer;
    margin-bottom: 5px;

    &:hover {
      opacity: 1;
      border: 2px solid ${(props) => props.theme.colors.brandPrimary};
    }
  }
`

const CaseFeedMetaContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.darkGrey};
  height: auto;
  padding: 20px 20px;
  position: absolute:
  bottom: 0;
  left: 0;

  h5 {
    color: white;
  }
`

const CaseLogistics = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  h6 {
    color: white;
    font-size: 16px;
    margin-bottom: 20px;
  }
`

const CaseStatus = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`

export function Case(props) {
  return (
    <CaseContainer>
      <Flex flexWrap="wrap">
        <Box width={1}>
          <CaseFeedImageContainer>
            <CaseStatus>
              <CaseStatusLabel title="Case Open" />
            </CaseStatus>
            <CaseFeedImage />
            <CaseFeedTitle>
              <Play color="white" size={32} />
              <Link to="/case-details">
                <H4>George Floyd</H4>
              </Link>
              <Link to="/case-details">
                <H5>Murdered by police in Minneapolis</H5>
              </Link>
            </CaseFeedTitle>
          </CaseFeedImageContainer>
          <CaseFeedMetaContainer>
            <CaseLogistics>
              <H5>Minneapolis, MN</H5>
              <H6>1/24/19</H6>
            </CaseLogistics>
            <Tag title="Tag" />
            <Tag title="Tag" />
            <Tag title="Tag" />
          </CaseFeedMetaContainer>
        </Box>
      </Flex>
    </CaseContainer>
  )
}

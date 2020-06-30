import React from 'react'
import styled from '@emotion/styled'
import { Box, Flex } from '@rebass/emotion'
import CaseImage from '../assets/images/allyance__casefeedimage__placeholder.png'
import { Link } from 'react-router-dom'
import { Play } from 'react-feather'

import { H4, H5, H6 } from '../atoms/text'
import { CaseStatusLabel } from '../atoms/label'
import { Tag } from '../atoms/button'

const CaseContainer = styled.div`
  width: 100%:
  background: #000;
  height: 100%;
`

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
  background: url(${CaseImage});
`

const CaseFeedOverlay = styled.div`
  width: 100%;
  background: transparent;
  height: 320px;
  cursor: pointer;
  position: absolute;
  background-size: cover;
  transition: 0.2s ease-in-out;
  top: 0;

  :hover {
    display: block;
    background: rgba(0, 0, 0, 0.2);
    transition: 0.2s ease-in-out;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }
`

const CaseFeedTitle = styled.div`
  padding: 24px;
  position: absolute;
  bottom: 0;
  left: 0;

  h4,
  h5 {
    color: #fff;
    width: 100%;
    padding-bottom: 4px;
    transition: 0.2s ease-in-out;

    :hover {
      color: ${(props) => props.theme.colors.brandPrimary};
    }
  }

  svg {
    border: 2px solid #fff;
    border-radius: 24px;
    padding: 8px;
    opacity: 0.6;
    fill: ${(props) => props.theme.colors.white};
    transition: 0.2s ease-in-out;
    cursor: pointer;
    margin-bottom: 4px;

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
  padding: 24px 24px;
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
    margin-bottom: 24px;
  }
`

const CaseStatus = styled.div`
  position: absolute;
  top: 24px;
  left: 24px;
  z-index: 10;
`

const Case = (props) => {
  const incident = props.incident

  return (
    <CaseContainer>
      {incident ? (
        <Flex flexWrap="wrap">
          <Box width={1}>
            <CaseFeedImageContainer>
              <CaseStatus>
                <CaseStatusLabel title="Case Open" />
              </CaseStatus>
              <Link to={`/cases/${incident.id}`}>
                <CaseFeedOverlay
                  style={{
                    backgroundImage:
                      'linear-gradient(180deg, rgba(0, 0, 0, 0) 56.25%, #000000 100%)',
                  }}
                >
                  <CaseFeedTitle>
                    <Play color="white" size={32} />
                    <Link to="/cases/:id">
                      <H4>George Floyd</H4>
                    </Link>
                    <Link to={`/cases/${incident.id}`}>
                      <H5>{incident && incident.shortDescription}</H5>
                    </Link>
                  </CaseFeedTitle>
                </CaseFeedOverlay>
              </Link>
              <CaseFeedImage />
            </CaseFeedImageContainer>
            <CaseFeedMetaContainer>
              <CaseLogistics>
                <H5>
                  {incident.city}
                  {incident.city && incident.state ? ', ' : null}
                  {incident.state}
                </H5>
                <H6>{incident.date}</H6>
              </CaseLogistics>
              {incident.tags &&
                incident.tags.map((tag, i) => {
                  return <Tag title={tag.content} tag={tag} key={i} />
                })}
            </CaseFeedMetaContainer>
          </Box>
        </Flex>
      ) : null}
    </CaseContainer>
  )
}

export default Case

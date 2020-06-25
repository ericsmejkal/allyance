import React from 'react'
import styled from '@emotion/styled'

import { Paragraph, H2 } from './text'

const TitleContainer = styled.div`
  width: 100%;
  display: block;

  p {
    max-width: 65%;
  }
`

const ReportCaseHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  position: relative;
`

const Counter = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`

export function Title(props) {
  return (
    <TitleContainer>
      <H2>{props.title}</H2>
      <Paragraph>{props.subTitle}</Paragraph>
    </TitleContainer>
  )
}

export function ReportCaseTitle(props) {
  return (
    <ReportCaseHeader>
      <TitleContainer>
        <H2>{props.stepTitle}</H2>
        <Paragraph>
          Please fill out as much information on the case as you can. Remember, all forms are
          optional, and your peers will add missing content and evidence after the case is
          published.
        </Paragraph>
      </TitleContainer>
      <Counter>
        <H2>{props.stepNumber}/5</H2>
      </Counter>
    </ReportCaseHeader>
  )
}

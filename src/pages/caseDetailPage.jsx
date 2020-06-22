import React from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from '@emotion/styled'

import { AccentButton } from '../atoms/button'
import { SubContainer, Container } from '../atoms/container'
import { SmallHero } from '../organisms/hero'

const incidents = [
  { id: 1, name: 'john smith', date: 'june 7, 2020' },
  { id: 2, name: 'davey jones', date: 'may 26, 2020' },
  { id: 3, name: 'maria garcia', date: 'may 31, 2020' },
]

const PageContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.black};
  height: 300px;
`

function CaseDetailPage(props) {
  const { id } = useParams()
  const incident = incidents && incidents.find((incident) => parseInt(incident.id) === parseInt(id))

  return (
    <>
      <SmallHero
        page="Case Details"
        header="George Floyd"
        subHeader="Murdered by police officer in Minneapolis"
      />
      <Container>
        <PageContainer>
          <SubContainer>
            {incident ? (
              <>
                <p>{incident.name}</p>
                <p>{incident.date}</p>
              </>
            ) : (
              <>
                <p>We were unable to find this case</p>
                <Link to="/browse-cases">
                  <AccentButton title="See all cases" variant="dark" />
                </Link>
              </>
            )}
          </SubContainer>
        </PageContainer>
      </Container>
    </>
  )
}

export default CaseDetailPage

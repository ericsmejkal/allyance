import React from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from '@emotion/styled'

const incidents = [
  { id: 1, name: 'john smith', date: 'june 7, 2020' },
  { id: 2, name: 'davey jones', date: 'may 26, 2020' },
  { id: 3, name: 'maria garcia', date: 'may 31, 2020' },
]

const PageContainer = styled.div`
  padding: 100px;
  background-color: black;
  color: white;
  min-height: 100vh;
`

const CaseFeedPage = () => {
  return (
    <PageContainer>
      <h2>Case Feed Page</h2>
      {incidents.map((incident) => (
        <Link to={`cases/${incident.id}`}>
          <div>{incident.name}</div>
        </Link>
      ))}
    </PageContainer>
  )
}

export default CaseFeedPage

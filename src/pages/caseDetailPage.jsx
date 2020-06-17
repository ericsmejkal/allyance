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

const CaseDetailPage = () => {
  const { id } = useParams()
  const incident = incidents && incidents.find((incident) => parseInt(incident.id) === parseInt(id))
  return (
    <PageContainer>
      <h2>Case Detail Page</h2>
      {incident ? (
        <>
          <p>{incident.name}</p>
          <p>{incident.date}</p>
        </>
      ) : (
        <>
          <p>We were unable to find this case</p>
          <Link to="/cases">See all cases</Link>
        </>
      )}
    </PageContainer>
  )
}

export default CaseDetailPage

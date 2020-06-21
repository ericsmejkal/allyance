import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './pages/homePage'
import BrowseCasesPage from './pages/browseCasesPage'
import ReportCasePage from './pages/reportCasePage'
import CaseDetailPage from './pages/caseDetailPage'

import { Navigation } from './organisms/navigation'
import { Footer } from './organisms/footer'

const Routes = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/browse-cases">
          <BrowseCasesPage />
        </Route>
        <Route exact path="/report-a-case">
          <ReportCasePage />
        </Route>
        <Route path="/cases/:id">
          <CaseDetailPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default Routes

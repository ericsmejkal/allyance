import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './pages/landingPage'
import CaseFeedPage from './pages/caseFeedPage'
import CaseDetailPage from './pages/caseDetailPage'

import { Navigation } from './organisms/navigation'
import { Footer } from './organisms/footer'

const Routes = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/cases">
          <CaseFeedPage />
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

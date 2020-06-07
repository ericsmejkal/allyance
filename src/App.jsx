import React, { Component } from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import { Theme } from './styles/settings/theme'
import { GlobalStyles } from './styles/global'
import { Home } from './pages/home'
import { Navigation } from './organisms/navigation'
import { Footer } from './organisms/footer'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <Global styles={GlobalStyles} />
        <Navigation />
        <Home />
        <Footer />
      </ThemeProvider>
    )
  }
}

export default App

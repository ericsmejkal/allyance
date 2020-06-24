import React, { Component } from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import { ApolloProvider } from '@apollo/react-hooks'
import client from './apollo'

import { Theme } from './styles/settings/theme'
import { GlobalStyles } from './styles/global'
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <Global styles={GlobalStyles} />
        <ApolloProvider client={client}>
          <Routes />
        </ApolloProvider>
      </ThemeProvider>
    )
  }
}

export default App

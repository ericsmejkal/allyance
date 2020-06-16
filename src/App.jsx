import React, { Component } from "react"
import { Global } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"

import { Theme } from "./styles/settings/theme"
import { GlobalStyles } from "./styles/global"
import { LandingPage } from "./pages/landingPage"
import { Navigation } from "./organisms/navigation"
import { Footer } from "./organisms/footer"

console.log("staging")

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <Global styles={GlobalStyles} />
        <Navigation />
        <LandingPage />
        <Footer />
      </ThemeProvider>
    )
  }
}

export default App

// library
import React from 'react'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { BrowserRouter as Router, Route } from "react-router-dom"

// containers
import Top from './containers/top'
import Members from './containers/members'
import Operation from './containers/operation'
import Customized from './containers/customized'
import Battle from './containers/battle'
import System from './containers/system'

// view-models
import Header from './components/header'
import ToolBar from './components/tool-bar'
import Footer from './components/footer'

export default function() {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  )
  
  return (
    <ThemeProvider theme={theme}> 
      <CssBaseline/>
      <Container maxWidth="lg">
        <Header />
        <Router>
          <ToolBar />
          <Route exact path="/introduction" component={Top}></Route>
          <Route exact path="/introduction/customized" component={Customized}></Route>
          <Route exact path="/introduction/battle" component={Battle}></Route>
          <Route exact path="/introduction/operation" component={Operation}></Route>
          <Route exact path="/introduction/members" component={Members}></Route>
          <Route exact path="/introduction/system" component={System}></Route>
        </Router>
      </Container>
      <Footer />
    </ThemeProvider> 
  )
}

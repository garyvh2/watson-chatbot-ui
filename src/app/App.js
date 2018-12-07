import React, { Component } from 'react'
import styled from 'styled-components'
import MessageInput from './containers/MessageInput/MessageInput'
import MessageHistory from './containers/MessageHistory/MessageHistory'

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
`

class App extends Component {
  render () {
    return (
      <AppContainer>
        <MessageHistory></MessageHistory>
        <MessageInput></MessageInput>
      </AppContainer>
    )
  }
}

export default App

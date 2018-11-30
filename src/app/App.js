import React, { Component } from 'react'
import styled from 'styled-components'
import { MessageInput } from './components/MessageInput/MessageInput'
import { MessageHistory } from './components/MessageHistory/MessageHistory'

const AppContainer = styled.div``

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

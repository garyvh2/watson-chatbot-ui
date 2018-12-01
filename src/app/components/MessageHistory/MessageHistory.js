import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { MessageItem } from '../MessageItem/MessageItem'

const History = styled.div`
  display: flex;
  align-content: flex-end;
  flex-direction: column-reverse;
  height: calc(100vh - 70px);
  overflow-y: scroll;
`

export function MessageHistory ({ messages }) {
  return (
    <History>
      {messages.map(({ message, sender, id }) => {
        return <MessageItem key={id} content={message} sender={sender}></MessageItem>
      })}
    </History>
  )
}
MessageHistory.propTypes = {
  messages: PropTypes.array.isRequired
}

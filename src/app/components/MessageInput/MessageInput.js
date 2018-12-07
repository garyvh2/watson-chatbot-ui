import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MessageInputContainer = styled.div`
  padding: 2px;
`

const Input = styled.input`
  border-radius: 0.25em;
  background: #DBDFE4;
  border: none;
  margin: 10px;
  padding: 2px;
  height: 40px;
  display: inline-block;
  width: calc(100% - 80px - 26px);
  font-size: 18px;
  font-family: 'Muli', sans-serif;
  border: none;
`
const Send = styled.button`
  border-radius: 0.25em;
  height: 45px;
  width: 80px;
  padding: 2px;
  display: inline-block;
  background: #F2F5F7;
  color: #267FF3;
  border: none;
  &:hover {
    background: #D2DDE4;
  }
  &:active {
    background: #DDE9F7;
  }
`

export function MessageInput ({ send }) {
  const [message, setMessage] = useState('')
  return (
    <MessageInputContainer>
      <Input
        value={message}
        onChange={e => setMessage(e.target.value)}
      ></Input>
      <Send onClick={() => {
        setMessage('')
        send(message)
      }}>Send</Send>
    </MessageInputContainer>
  )
}
MessageInput.propTypes = {
  send: PropTypes.func
}

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MessageInputContainer = styled.div`
  position: sticky;
  padding: 2px;
`

const Input = styled.input`
  border-radius: 0.25em;
  background: #1F232A;
  color: #BBBCBD;
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
  font-weight: bold;
  background: #1F232A;
  color: #BBBCBD;
  border: none;
  &:hover {
    background: #151C28;
  }
  &:active {
    background: #0C1421;
  }
`

export function MessageInput ({ send }) {
  const [message, setMessage] = useState('')
  return (
    <MessageInputContainer>
      <Input
        value={message}
        onChange={e => setMessage(e.target.value)}
        onKeyUp={e => {
          if (e.keyCode === 13) {
            setMessage('')
            send(message)
          }
        }}
      ></Input>
      <Send disabled={!message} onClick={() => {
        setMessage('')
        send(message)
      }}>Send</Send>
    </MessageInputContainer>
  )
}
MessageInput.propTypes = {
  send: PropTypes.func
}

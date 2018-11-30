import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import { MessageItem } from '../MessageItem/MessageItem'

const History = styled.div`
  height: calc(100vh - 70px);
  overflow-y: scroll;
`

export function MessageHistory () {
  return (
    <History>
      <MessageItem title="Gary Valverde" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla excepturi consequuntur accusantium natus totam explicabo iure pariatur ab labore eius soluta, repellat error, eligendi accusamus dolores harum quae fugit quas!"></MessageItem>
      <MessageItem title="Gary Valverde" content="Hello watson" sender></MessageItem>
      <MessageItem title="Gary Valverde" content="Hello watson"></MessageItem>
      <MessageItem title="Gary Valverde" content="Hello watson"></MessageItem>
      <MessageItem title="Gary Valverde" content="Hello watson" sender></MessageItem>
      <MessageItem title="Gary Valverde" content="Hello watson"></MessageItem>4
      <MessageItem title="Gary Valverde" content="Hello watson"></MessageItem>
      <MessageItem title="Gary Valverde" content="Hello watson" sender></MessageItem>
      <MessageItem title="Gary Valverde" content="Hello watson"></MessageItem>
      <MessageItem title="Gary Valverde" content="Hello watson"></MessageItem>
      <MessageItem title="Gary Valverde" content="Hello watson" sender></MessageItem>
      <MessageItem title="Gary Valverde" content="Hello watson"></MessageItem>
      <MessageItem title="Gary Valverde" content="Hello watson"></MessageItem>
      <MessageItem title="Gary Valverde" content="Hello watson" sender></MessageItem>
      <MessageItem title="Gary Valverde" content="Hello watson"></MessageItem>
      <MessageItem title="Gary Valverde" content="Hello watson"></MessageItem>
      <MessageItem title="Gary Valverde" content="Hello watson" sender></MessageItem>
      <MessageItem title="Gary Valverde" content="Hello watson"></MessageItem>
    </History>
  )
}

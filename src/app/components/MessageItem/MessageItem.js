import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Avatar } from '../Avatar/Avatar'

const Message = styled.div`
  text-align: ${props => props.sender ? 'right' : 'left'};
  font-family: 'Muli', sans-serif;
  white-space: unset;
  font-size: 0;
  margin: 20px ;
`

const MessageText = styled.div`
  display: inline-block;
  text-align: left;
  vertical-align: top;
  margin: 0 20px;
  font-size: initial;
  width: 60%;
  position: relative;
  padding: 10px;
  border-radius: 0.25em;
  color: ${props => props.sender ? '#BBBCBD' : '#BBBCBD'};
  background: ${props => props.sender ? '#1F232A' : '#044AA4'};
  min-height: 40px;
`
const Title = styled.span`
  font-weight: bold;
  display: block;
`
const Content = styled.span``

export function MessageItem ({ title, content, sender }) {
  let before = null
  let after = null
  if (!sender) {
    before = <Avatar />
  } else {
    after = <Avatar />
  }

  return (
    <Message sender={sender}>
      {before}
      <MessageText sender={sender}>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </MessageText>
      {after}
    </Message>
  )
}

MessageItem.propTypes = {
  title: PropTypes.string,
  sender: PropTypes.bool,
  content: PropTypes.string
}

import logo from '../../../assets/images/user.png'
import React from 'react'
import styled from 'styled-components'

const AvatarContainer = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 50px;
  height: 50px;
  padding: 5px;
  position: relative;
  border-radius: 50px;
  overflow: hidden;
  background: #1F232A;
  box-shadow: 0 0 5px 1px rgba(0,0,0,.2);
`
const Logo = styled.img`
  width: 120%;
  height: 120%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Avatar = () => (
  <AvatarContainer>
    <Logo src={logo} alt=""/>
  </AvatarContainer>
)

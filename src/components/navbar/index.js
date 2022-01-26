import React from 'react'
import { NavLink, Link, Outlet } from 'react-router-dom'
import {
  NavbarSection,
  Logo,
  LogoText,
  UlList,
  ListItem,
  Anchor,
  LinkItem,
} from './style.js'
export default function Navbar() {
  return (
    <>
      <NavbarSection>
        <div className="container">
          <Logo>
            <LogoText>BiBoOo</LogoText>
          </Logo>
          <UlList>
            <ListItem>
              <LinkItem to="/">Home</LinkItem>
            </ListItem>
            <ListItem>
              <Anchor href="#">Work</Anchor>
            </ListItem>
            <ListItem>
              <Anchor href="#">Portfolio</Anchor>
            </ListItem>
            <ListItem>
              <Anchor href="#">Resume</Anchor>
            </ListItem>
            <ListItem>
              <Anchor href="#">About</Anchor>
            </ListItem>
            <ListItem>
              <LinkItem to="contact">Contact</LinkItem>
            </ListItem>
          </UlList>
        </div>
      </NavbarSection>
      <Outlet />
    </>
  )
}

import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
/*
    ===============================
            Navbar Styles
    ===============================
*/
export const NavbarSection = styled.div`
  padding: 20px 0;
  overflow: hidden;
  background: #fff;
  position: relative;
  border-bottom: 1px solid #000;
`

export const Logo = styled.div`
  width: 50%;
  float: left;
`

export const LogoText = styled.h2`
  font-size: 30px;
  font-weight: bold;
`

export const UlList = styled.ul`
  width: 50%;
  float: left;
  list-style: none;
`
export const ListItem = styled.li`
  display: inline-block;
`
export const Anchor = styled.a`
  display: block;
  color: #222;
  text-decoration: none;
  padding: 10px 15px;
  font-weight: bold;
  &:hover {
    color: #eb5424;
  }
  &.active {
    color: #eb5424;
  }
`
export const LinkItem = styled(NavLink)`
  display: block;
  color: #222;
  text-decoration: none;
  padding: 10px 15px;
  font-weight: bold;
  &:hover {
    color: #eb5424;
  }
  &.active {
    color: #eb5424;
  }
`

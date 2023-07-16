import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"

export const NavList = styled.ul`
  list-style: none;
  border-bottom: 1px solid grey;
  display: flex;
  gap: 10px;
  padding: 0 0 8px 28px;
  box-shadow: -10px 4px 8px -6px rgba(0, 0, 0, 0.75);
`

export const NavItem = styled.li``

export const NavLinkItem = styled(NavLink)`
  text-decoration: none;
  color: grey;
  font-family: sans-serif;
  font-weight: 700;
  cursor: pointer;
  transition: 250ms;
  &.active {
    background-color: orange;
    color: whitesmoke;
    padding: 2px 4px;
    border-radius: 4px;
  }
`

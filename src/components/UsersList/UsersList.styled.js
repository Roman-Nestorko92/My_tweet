import styled from "@emotion/styled"
import { Link } from "react-router-dom"

export const Title = styled.h2`
  font-family: sans-serif;
  font-weight: 700;
  margin-left: 20px;
  color: #212121;
`

export const Userlist = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const UserItem = styled.li`
  width: 200px;
  display: flex;
  text-align: center;
  flex-direction: column;
`

export const LinkName = styled(Link)`
  margin-top: 8px;
  text-decoration: none;
  color: #212121;
  &:hover {
    color: orangered;
  }
`

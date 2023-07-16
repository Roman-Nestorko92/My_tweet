import styled from "@emotion/styled"

export const Title = styled.h2`
  font-family: sans-serif;
  margin-left: 26px;
`

export const Label = styled.label`
  margin-left: 28px;
  font-family: sans-serif;
  font-weight: 600;
`

export const Select = styled.select`
  background-color: transparent;
`

export const Option = styled.option`
  font-family: sans-serif;
  font-weight: 500;
`

export const UserList = styled.ul`
  list-style: none;
  margin-left: 28px;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const UserListItem = styled.li`
  width: 200px;
  display: flex;
  text-align: center;
  flex-direction: column;
  border: 1px solid grey;
  margin-bottom: 10px;
`

export const InfoUser = styled.p`
  margin: 4px;
  font-weight: 400;
`

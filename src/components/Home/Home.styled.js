import styled from "@emotion/styled"

export const Title = styled.button`
  display: block;
  margin: 18px auto 0 auto;
  border: none;
  border-radius: 4px;
  font-size: 40px;
  padding: 4px 12px;
  cursor: pointer;
  font-family: sans-serif;
  background-color: orange;
  color: whitesmoke;
  &:hover {
    background-color: orangered;
    transition: transform 2050ms linear;
    transform: scale(1.7) rotate(3turn);
  }
`

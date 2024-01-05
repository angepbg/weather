import styled from 'styled-components'

export const Wrapper = styled.div`
  float: left;
  background-color: #fff;
  cursor: pointer;
  height: 50px;
  width: 150px;
  align-content: center;
  text-align: center;
  display: grid;
  margin-right: 4px;
  border-radius: 5px;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #89cff0;
  }
`

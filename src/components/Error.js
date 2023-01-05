import React from 'react'
import styled from '@emotion/styled'

const ErrorMessage = styled.p`
  background-color: crimson;
  padding: 1rem;
  color: white;
  font-size: 1rem;
  text-transform: uppercase;
  text-align: center;
  border-radius: 8px;
`
const Error = ({ message }) => {
  return (
    <ErrorMessage>{message}</ErrorMessage>
  )
}

export default Error

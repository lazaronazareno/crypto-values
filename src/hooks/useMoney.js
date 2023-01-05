import React, { useState } from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2rem;
  display: block;
`

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
`

const useMoney = (label, initialState, options) => {
  const [value, setValue] = useState(initialState)

  const SelectCoin = () => (
    <>
      <Label>{label}</Label>
      <Select
        onChange={e => setValue(e.target.value)}
        value={value}
      >
        <option value=''>-- Seleccione --</option>
        {options.map(option => (
          <option key={option.cod} value={option.cod}>{option.name}</option>
        ))}
      </Select>
    </>
  )

  return [value, SelectCoin, setValue]
}

export default useMoney

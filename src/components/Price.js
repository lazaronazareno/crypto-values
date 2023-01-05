import React from 'react'
import styled from '@emotion/styled'

const PriceContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  color: black;
  padding: 1rem;
  margin-top: 1rem;
  box-sizing: border-box;
  text-transform: uppercase;
`
const PriceText = styled.p`
  font-size: 1.5rem;
`
const PriceValue = styled.span`
  font-weight: 600;
`

const Price = ({ data }) => {
  console.log(data)
  if (Object.keys(data).length === 0) return null

  return (
    <PriceContainer>
      <PriceText>El precio actual es: <PriceValue>{data.PRICE}</PriceValue></PriceText>
      <PriceText>Precio más alto del día: <PriceValue>{data.HIGHDAY}</PriceValue></PriceText>
      <PriceText>Precio más bajo del día: <PriceValue>{data.LOWDAY}</PriceValue></PriceText>
      <PriceText>Variación últimas 24hs: <PriceValue>{data.CHANGEPCT24HOUR}</PriceValue></PriceText>
      <PriceText>Última Actualizacion: <PriceValue>{data.LASTUPDATE}</PriceValue></PriceText>
    </PriceContainer>
  )
}

export default Price

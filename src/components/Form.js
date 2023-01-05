import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useMoney from '../hooks/useMoney'
import { Coins } from '../utils'
import useCrypto from '../hooks/useCripto'
import axios from 'axios'
import Error from './Error'

const Button = styled.button`
  padding: 1rem;
  background-color: antiquewhite;
  color: black;
  font-size: 1rem;
  text-transform: uppercase;
  border: none;
  border-radius: 8px;
  transition: background-color .3s ease;

  &:hover {
    background-color: lightcoral;
    cursor: pointer;
  }
`

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Form = ({ setCoin, setCrypto }) => {
  const [cryptoList, setCryptoList] = useState([])
  const [error, setError] = useState(false)

  const [money, SelectMoney] = useMoney('Elige tu Moneda', '', Coins)
  const [crypto, SelectCrypto] = useCrypto('Elige tu Cryptomoneda', '', cryptoList)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (money === '' || crypto === '') {
      setError(true)
      return
    }

    setError(false)
    setCoin(money)
    setCrypto(crypto)
  }

  const getDataFromApi = async () => {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
    const response = await axios.get(url)

    setCryptoList(response.data.Data)
  }

  useEffect(() => {
    getDataFromApi()
  }, [])

  return (
    <FormContainer
      onSubmit={handleSubmit}
    >
      {error ? <Error message='Todos los campos son obligatorios' /> : null}

      <SelectMoney />
      <SelectCrypto />
      <Button>Convertir</Button>
    </FormContainer>
  )
}

export default Form

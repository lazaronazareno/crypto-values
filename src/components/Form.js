import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useMoney from '../hooks/useMoney'
import { Coins } from '../utils'
import useCrypto from '../hooks/useCripto'
import axios from 'axios'
import Error from './Error'

const Button = styled.button`
  /* Created with https://www.css-gradient.com */
  background: #AB0AD3;
  background: -webkit-linear-gradient(top left, #AB0AD3, #CC08C9);
  background: -moz-linear-gradient(top left, #AB0AD3, #CC08C9);
  background: linear-gradient(to bottom right, #AB0AD3, #CC08C9);
  padding: 1rem;
  font-size: 1rem;
  text-transform: uppercase;
  border: none;
  border-radius: 8px;
  transition: background .3s ease;
  color: white;

  &:hover {
    /* Created with https://www.css-gradient.com */
    background: #D831CE;
    background: -webkit-linear-gradient(top left, #D831CE, #EDA1E9);
    background: -moz-linear-gradient(top left, #D831CE, #EDA1E9);
    background: linear-gradient(to bottom right, #D831CE, #EDA1E9);
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

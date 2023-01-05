import './App.css'
import cryptoImg from './assets/crypto.png'
import styled from '@emotion/styled'
import Form from './components/Form'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Price from './components/Price'
import Spinner from './components/Spinner'

const Container = styled.div`
  background-color: darkblue;
  color: white;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  justify-content: center;
  padding: 2vh;
  box-sizing: border-box;
  padding-top: 10vw;
  flex-wrap: wrap;
`

const Image = styled.img`
  width: 25rem;
  object-fit: contain;
`

const Heading = styled.h1`
  text-align: left;
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 600;

  &::after {
    content: '';
    width: 40%;
    height: 0.2rem;
    background-color: antiquewhite;
    display: block;
  }
`

function App () {
  const [coin, setCoin] = useState('')
  const [crypto, setCrypto] = useState('')
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)

  const getDataFromApi = async () => {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`

    const response = await axios.get(url)

    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setData(response.data.DISPLAY[crypto][coin])
    }, 3000)
  }

  useEffect(() => {
    if (coin === '') return

    getDataFromApi()
  }, [coin, crypto])

  const PriceComponent = (loading) ? <Spinner /> : <Price data={data} />

  return (
    <Container>
      <Image
        src={cryptoImg}
        alt='Cryptocurrency exchange Bitcoin, Coin, saving, investment, payment png'
      />
      <div>
        <Heading>Convertidor Crypto</Heading>
        <Form
          setCoin={setCoin}
          setCrypto={setCrypto}
        />
        {PriceComponent}
      </div>
    </Container>
  )
}

export default App

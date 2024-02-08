import { createContext, useEffect, useState } from 'react'

import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes'

import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'
import { SnackData } from './interfaces/SnackData'
import { getBurgers } from './services/api'

interface SnackContextProps {
  burgers: SnackData[]
  //pizza: SnackData[]
  //drinks: SnackData[]
  //iceCreams: SnackData[]

}
export const SnackContext = createContext( {} as SnackContextProps)

export default function App() {
  const [burgers, setBurgers] = useState<SnackData[]>([])
  useEffect(() => {
    (async () => {
      const BurgersRequest = await getBurgers()
      setBurgers(BurgersRequest.data)
    })()
  },[])

  return (
    <BrowserRouter>
      <Theme>
        <SnackContext.Provider value = {{burgers}} >
          <AppRoutes />
          <GlobalStyle />
          <Normalize />
        </SnackContext.Provider>
      </Theme>
    </BrowserRouter>
  )
}

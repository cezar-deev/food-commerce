import { createContext, useEffect, useState } from 'react'

import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes'

import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'
import { SnackData } from './interfaces/SnackData'
import { getBurgers, getDrinks, getPizzas, getIceCreams } from './services/api'

interface SnackContextProps {
  burgers: SnackData[]
  pizzas: SnackData[]
  drinks: SnackData[]
  iceCreams: SnackData[]

}
export const SnackContext = createContext( {} as SnackContextProps)

export default function App() {
  const [burgers, setBurgers] = useState<SnackData[]>([])
  const [pizzas, setPizzas]= useState<SnackData[]>([])
  const [drinks, setDrinks] = useState<SnackData[]>([])
  const [iceCreams, setIceCreams] = useState<SnackData[]>([])

  useEffect(() => {
    (async () => {
      try {
        const BurgersRequest = await getBurgers()
        const pizzaRequest = await getPizzas()
        const drinkRequest = await getDrinks()
        const iceCreamRequest = await getIceCreams()

        const  requests = [BurgersRequest, pizzaRequest, drinkRequest, iceCreamRequest]

        const [
          { data: burguerResponse },
          { data: pizzaResponse },
          { data: drinkResponse },
          { data: iceCreamResponse },
        ] = await Promise.all(requests)

        setBurgers(burguerResponse)
        setPizzas(pizzaResponse)
        setDrinks(drinkResponse)
        setIceCreams(iceCreamResponse)
      } catch (error) {
        console.error(error)
      }
    } )()
  }, [])

  return (
    <BrowserRouter>
      <Theme>
        <SnackContext.Provider value = {{burgers, pizzas , drinks, iceCreams }} >
          <AppRoutes />
          <GlobalStyle />
          <Normalize />
        </SnackContext.Provider>
      </Theme>
    </BrowserRouter>
  )
}

import { ReactNode, createContext, useEffect, useState } from 'react'

import { SnackData } from '../interfaces/SnackData'

import { getBurgers, getDrinks, getPizzas, getIceCreams } from '../services/api'

interface SnackContextProps {
  burgers: SnackData[]
  pizzas: SnackData[]
  drinks: SnackData[]
  iceCreams: SnackData[]

}
interface SnackProviderProps {
  children: ReactNode;
}

export const SnackContext = createContext( {} as SnackContextProps)

export function SnackProvider ({ children} : SnackProviderProps) {
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
      <SnackContext.Provider value = {{burgers, pizzas , drinks, iceCreams }} >
        { children }
      </SnackContext.Provider>
    )

}

import { ReactNode, createContext, useEffect, useState } from 'react'

import { SnackData } from './interfaces/SnackData'

import { getBurgers, getDrinks, getPizzas, getIceCreams } from './services/api'

interface SnackContextProps {
  burgers: SnackData[]
  pizzas: SnackData[]
  drinks: SnackData[]
  iceCreams: SnackData[]

}

export const SnackContext = createContext( {} as SnackContextProps)

interface SnackProviderProps {
  chikdren: ReactNode;
}

export function SnackProvider ( { children } : SnackProviderProps)

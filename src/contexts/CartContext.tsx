import { ReactNode, createContext, useEffect, useState } from 'react'
import { SnackData } from '../interfaces/SnackData'

interface Snack extends SnackData {
  quantity: number
  subtotal: number
}

interface RemoveSnackfromCart {
  id: number
  snack: string
}

interface UpdateCartProps {
  id: number
  snack: string
  newQuantity: number
}

interface CartContextProps {
  cart: Snack[]
  addSnackIntoCart: (snack: SnackData) => void
  removeSnackFromCart: ({id, snack} : RemoveSnackfromCart) => void
  updateCart: ({id, snack, newQuantity} : UpdateCartProps) => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext ({} as CartContextProps)

export function CartProvider ({ children } : CartProviderProps) {
 //
}

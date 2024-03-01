import { ReactNode, createContext, useState } from 'react'
import { toast } from 'react-toastify'

import { SnackData } from '../interfaces/SnackData'

import { snackEmoji } from '../helpers/snackEmoji'

interface Snack extends SnackData {
  quantity: number
  subtotal: number
}
interface CartContextProps {
  cart: Snack[]
  addSnackIntoCart: (snack: SnackData) => void
  removeSnackFromCart: (id: number, snack: Snack) => void
  snackFromCartIncrement: (id: number, snack: Snack) => void
  snackFromCartDecrement: (id: number, snack: Snack) => void
  confirmOrder: () => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext ({} as CartContextProps)

export function CartProvider ({ children } : CartProviderProps) {
  const [cart, setCart] = useState<Snack[]>([])

  function addSnackIntoCart(snack: SnackData): void {
    // buscar
    const snackExistentInCart = cart.find((item) => item.snack === snack.snack && item.id === snack.id)

    // atualizar
        if(snackExistentInCart) {
          const newCart = cart.map( (item)=> {
            if (item.id === snack.id) {
              const quantity = item.quantity + 1
              const subtotal = item.price * quantity

              return { ...item, quantity, subtotal }
            }
            return item
          })

          toast.success(`Outro(a) ${snackEmoji(snack.snack)} ${snack.name} adiciondo nos pedidos`)
          setCart(newCart)

          return
        }

    // adicionar
    const newSnack = { ...snack, quantity: 1, subtotal: snack.price }
    const newCart = [ ...cart, newSnack] // push de um array

    toast.success(`${snackEmoji(snack.snack)} ${snack.name} adiciondo nos pedidos`)
    setCart(newCart)
}

  function removeSnackFromCart (id: number, snack: Snack) {}

  function updateSnackQuality (id: number, snack: Snack, newQuantity: number) {}

  function snackFromCartIncrement (id: number, snack: Snack) {
    updateSnackQuality(id, snack, snack.quantity + 1)
  }

  function snackFromCartDecrement (id: number, snack: Snack) {
    updateSnackQuality(id, snack, snack.quantity - 1)
  }

  function confirmOrder () {}

  return (
    <CartContext.Provider
      value={{
        cart,
        addSnackIntoCart,
        removeSnackFromCart,
        snackFromCartIncrement,
        snackFromCartDecrement,
        confirmOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

import { useCart } from "../../hooks/useCart"

export function MyOrder() {
  const { cart } = useCart()

  return <>{cart.length}</>
}

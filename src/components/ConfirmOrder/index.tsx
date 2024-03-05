import { useCart } from "../../hooks/useCart"
import { Container } from "./style"

export function  ConfirmOrder() {
  const { cart } = useCart()

  const totalAmount = cart.reduce((acc, item) => (acc += item.subtotal), 0 )

  return  (
    <Container>
      
    </Container>
  )
}

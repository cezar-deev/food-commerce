import { useCart } from "../../../../hooks/useCart"
import { currencyFormat } from "../../../../helpers/currencyFormat"

import plusImg from "../../../../assets/circle-plus.svg"
import minusImg from "../../../../assets/circle-minus.svg"

import { Container } from "./style"

export function TableDesktop() {
  const { cart } = useCart()

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Lanche</th>
            <th>Qtd</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={`${item.snack}-${item.id}`}>
              <td>
                <img src={item.image} alt={item.name}/>
              </td>
              <td>
                <h4>{item.name}</h4>
                <span>{currencyFormat(item.price)}</span>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                    onClick={() => console.log(`decrementar sanack`, item)}
                  >
                    < img src={minusImg} alt="Remover quantidade" />
                  </button>
                  <span>{`${item.quantity}`.padStart(2, '0')}</span>
                  <button
                    type="button"
                    onClick={() => console.log(`aumentar sanack`, item)}
                  >
                    < img src={plusImg} alt="Remover quantidade" />
                  </button>
                </div>
              </td>
              <td>
                <h5>{currencyFormat(item.subtotal)}</h5>
              </td>
              <td>Deletar</td>
            </tr>
          ))}

        </tbody>
      </table>
    </Container>
  )
}

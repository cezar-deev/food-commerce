import { Head } from "../../components/Head";
import { OrderHeader } from "../../components/OrderHeader";
import { Container, Inner, Form } from "./styles";

export  default function Payment() {
  return (
    <Container>
      <Head title='pagamento' />
      <OrderHeader />
      <Inner>
        <form>
          <h4>Informações pessoais</h4>

          <div className="field"></div>
            <label htmlFor="full-name">Nome e sobrenome</label>
            <input type="text" id="full-name" name="full-name" autoComplete="name" />
        </form>
      </Inner>
    </Container>
  )
}

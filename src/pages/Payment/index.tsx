import { Head } from "../../components/Head";
import { OrderHeader } from "../../components/OrderHeader";
import { Container, Inner, Form } from "./styles";

export  default function Payment() {
  return (
    <Container>
      <Head title='pagamento' />
      <OrderHeader />
      <Inner>
        <Form>
          <h4>Informações pessoais</h4>

          <div className="field">
            <label htmlFor="full-name">Nome e sobrenome</label>
            <input type="text" id="full-name" name="full-name" autoComplete="name" />
          </div>

          <div className="grouped">

            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input type="text" id="email" name="email" autoComplete="email" />
            </div>

            <div className="field">
              <label htmlFor="mobile">Celular</label>
              <input type="tel" id="mobile" name="mobile" autoComplete="phone" />
            </div>

            <div className="field">
              <label htmlFor="document">CPF / CNPJ</label>
              <input type="text" id="document" name="document"/>
            </div>
          </div>

          <h4>Endereço de entrega</h4>
          <div className="field">
           <label htmlFor='zipcode'>CEP</label>
            <input 
              type='text'
              id='zipcode'
              name='postal-code'
              autoComplete="postal-code"
              style={{ width:'120px' }}
            />
          </div> 
        </Form>
      </Inner>
    </Container>
  )
}

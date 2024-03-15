import { Head } from "../../components/Head";
import { OrderHeader } from "../../components/OrderHeader";
import { Inner } from "../MyCard/style";
import { Container } from "./styles";

export  default function Payment() {
  return (
    <Container>
      <Head title='pagamento' />
      <OrderHeader />
      <Inner>Formulario</Inner>
    </Container>
  )
}

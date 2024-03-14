import { Button, Container } from "./styles";

import manAndBurguerImg from '../../assets/man-and-burger.svg'

interface EmptyCartProps {
  title: string;
}

export function Emptycart ({title}: EmptyCartProps) {
  return (
    <Container>
      <h2>{title}</h2>
      <Button to='/'>Checar o Cardápio</Button>
      <img src={manAndBurguerImg} alt='Homem com Hamburguer'/>
    </Container>

    )
}

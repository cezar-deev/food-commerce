import { useState } from "react"

import { Container } from "./styles"
import { ReactComponent as BurgerIcon } from '../../assets/burger.svg'
import { ReactComponent as PizzaIcon } from '../../assets/pizza.svg'
import { ReactComponent as SodaIcon } from '../../assets/soda.svg'
import { ReactComponent as IceCreamIcon } from '../../assets/ice-cream.svg'

import menuImg from '../../assets/menu.svg'

export function Sidebar () {

  const [menuOpen, setmenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setmenuOpen(!menuOpen)
  }



    return (
    <Container>
      <button type="button" onClick={handleToggleMenu}>
        <img src={menuImg} alt="Abrir e fechar o menu"/>
      </button>
      <nav>
        <ul>
          <li>
            <a href="#" className="active">
              <BurgerIcon />
              <span>Hamburgueres</span>
            </a>
          </li>
           <li>
            <a href="#" >
              <PizzaIcon />
              <span>Pizzas</span>
            </a>
          </li>
           <li>
            <a href="#" >
              <SodaIcon />
              <span>Bebidas</span>
            </a>
          </li>
           <li>
            <a href="#" >
              <IceCreamIcon />
              <span>Sorvetes</span>
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  )
}

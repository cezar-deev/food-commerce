import { useState } from "react"
import { NavLink } from "react-router-dom"

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
    <Container isMenuOpen={menuOpen}>
      <button type="button" onClick={handleToggleMenu}>
        <img src={menuImg} alt="Abrir e fechar o menu"/>
      </button>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <BurgerIcon />
              <span>Hamburgueres</span>
            </NavLink>
          </li>
           <li>
            <NavLink to="pizzas">
              <PizzaIcon />
              <span>Pizzas</span>
            </NavLink>
          </li>
           <li>
            <NavLink to="drinks">
              <SodaIcon />
              <span>Bebidas</span>
            </NavLink>
          </li>
           <li>
            <NavLink to="ice-creams">
              <IceCreamIcon />
              <span>Sorvetes</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  )
}

import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

export default function  Burgers () {

  const data = [
    {
      id: 1,
      snack: "burger",
      name: "Mega",
      description:
       " O artesanal tamanho família recheado coom três carnes suculentas, queijo e bacon.",
       price: 25.5,
      image: "https://imgur.com/t/hamburguer/StQtgHf"
    },
    {
      id: 2,
      snack: "burger",
      name: "Extra Bacon",
      description:" Criado para amantes de bacon, possui emtodas as suas camadas bacon bem assado e  queijo e carne",
       price: 23.5,
      image: "https://imgur.com/t/hamburguer/N2dUl6v"
    }
  ]
  return (
    <>
      <Head title="Hambúrgueres" />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  )
}

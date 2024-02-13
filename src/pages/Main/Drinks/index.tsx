import { useContext} from "react"
import { SnackContext } from "../../../contexts/SnackContexts"

import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

  export default function  Drinks () {

  const { drinks } = useContext( SnackContext )

    return (
    <>
      <Head title="Bebidas" />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={drinks}></Snacks>
    </>
  )
}

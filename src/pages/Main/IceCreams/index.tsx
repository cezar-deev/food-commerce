
import { useContext } from "react"
import { SnackContext } from "../../../contexts/SnackContexts"

import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

export default function  IceCreams () {

 const { iceCreams } = useContext( SnackContext )

      return (
    <>
      <Head title="Sorvetes" />
      <SnackTitle>sorvetes</SnackTitle>
      <Snacks snacks={iceCreams}></Snacks>
    </>
  )
}

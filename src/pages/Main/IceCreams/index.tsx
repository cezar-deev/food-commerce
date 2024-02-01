
import { useState, useEffect } from "react"

import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

import { getIceCreams } from "../../../services/api"

export default function  IceCreams () {

  const [iceCream, setDrinks] = useState([])

  useEffect(() => {
    (async () => {
      const iceCreamRequest = await getIceCreams()

      setDrinks(iceCreamRequest.data)
    })()


  },[])
      return (
    <>
      <Head title="Sorvetes" />
      <SnackTitle>sorvetes</SnackTitle>
      <Snacks snacks={iceCream}></Snacks>
    </>
  )
}

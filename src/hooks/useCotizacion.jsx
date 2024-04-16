import { useContext } from "react"
import CotizacionContext from "../context/CotizacionProvider"

const useCotizacion = () => {
  return useContext(CotizacionContext)
}

export default useCotizacion
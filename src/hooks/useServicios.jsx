import { useContext } from "react";
import ServicioContext from "../context/ServicioProvider";

const useServicios = () => {
  return useContext(ServicioContext) // Es para hacer disponible los valores del provider
}

export default useServicios
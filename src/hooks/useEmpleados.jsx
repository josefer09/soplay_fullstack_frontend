import { useContext } from "react";
import EmpleadosContext from "../context/EmpleadosProvider";

const useEmpleados = () => {
  return useContext(EmpleadosContext) // Es para hacer disponible los valores del provider
}

export default useEmpleados
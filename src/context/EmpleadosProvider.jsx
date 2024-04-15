import { createContext, useState, useEffect } from "react";
import clienteAxios from "../config/axios";
import useAuth from "../hooks/useAuth";

const EmpleadosContext = createContext();

export const EmpleadosProvider = ({ children }) => {
  const [empleados, setEmpleados] = useState([]);
  const [empleado, setEmpleado] = useState({});
  const { auth } = useAuth();

  useEffect(() => {
    const obtenerEmpleados = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const config = {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        const { data } = await clienteAxios("/empleados", config);
        console.log(data)
        setEmpleados(data);
        console.log(data);
        return;
      } catch (error) {
        console.log(error.response);
      }
    };

    obtenerEmpleados();
  }, [auth]);


  const guardarEmpleado = async (empleado) => {
    // Configuración para la solicitud POST
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
  
    try {
      console.log('Validar que no exista ese correo en el provider', empleados);
      console.log(empleado);
      const correoExiste = empleados.some(empleadoActual => empleadoActual.correo === empleado.correo)
      if(correoExiste) {
        console.log('Existe el correo');
        return false;
      } else {
      const { data } = await clienteAxios.post("/empleados", empleado, config);
      const { createdAt, updatedAt, __v, ...empleadoAlmacenado } = data; // Crea un nuevo objeto sin los datos mencionados previamente
      setEmpleados([empleadoAlmacenado, ...empleados]);
      console.log("Empleado agregado:", empleadoAlmacenado);
      return true;
    }} catch (error) {
      console.log("Error al agregar empleado:", error.response.data.msg);
    }
  };
  

  const setEdicion = (empleado) => {
    setEmpleado(empleado);
  }

  const eliminarEmpleado = async empleado => {
    console.log(empleado);
    // configuracion para ambos casos
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const {_id, nombre} = empleado;

    // Confirmar eliminar
    const confirmar = confirm(`¿Desea Eliminar el Registro de: ${nombre}`);

    if(confirmar) {
      try {
        const {data} = await clienteAxios.delete(`/empleados/${_id}`, config);
        console.log(data);
        const empleadosActualizados = empleados.filter(empleadoState => empleadoState._id !== _id);
        setEmpleado(empleadosActualizados);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
  <EmpleadosContext.Provider 
  value={{
    empleados,
    guardarEmpleado,
    empleado,
    setEdicion,
    eliminarEmpleado,
  }}
  >
    {children}
  </EmpleadosContext.Provider>
  );
};

export default EmpleadosContext;

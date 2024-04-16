import { createContext, useState, useEffect } from "react";
import clienteAxios from "../config/axios";
import useAuth from "../hooks/useAuth";

const ServicioContext = createContext();

export const ServicioProvider = ({ children }) => {
  const [servicios, setServicios] = useState([]);
  const [servicio, setServicio] = useState({});
  const { auth } = useAuth();

  useEffect(() => {
    const obtenerServicios = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const config = {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        const { data } = await clienteAxios("/servicios", config);
        console.log(data);
        setServicios(data);
        console.log(data);
        return;
      } catch (error) {
        console.log(error.response);
      }
    };

    obtenerServicios();
  }, [auth]);

  const guardarServicio = async (servicio) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
  
    if (servicio.id) {
      try {
        const { data } = await clienteAxios.put(
          `/servicios/${servicio.id}`,
          servicio,
          config
        );
  
        const servicioActualizado = servicios.map((servicioState) =>
          servicioState._id === data._id ? data : servicioState
        );
  
        setServicios(servicioActualizado);
        return true;
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const nombreExiste = servicios.some(
          (servicioActual) => servicioActual.nombre === servicio.nombre
        );
  
        if (nombreExiste) {
          console.log("Existe el nombre");
          return false;
        } else {
          const { data } = await clienteAxios.post(
            "/servicios",
            servicio,
            config
          );
          const { createdAt, updatedAt, __v, ...servicioAlmacenado } = data; // Crea un nuevo objeto sin los datos mencionados previamente
          setServicios([servicioAlmacenado, ...servicios]);
          console.log("Servicio agregado:", servicioAlmacenado);
          return true;
        }
      } catch (error) {
        console.log("Error al agregar servicio:", error.response.data.msg);
      }
    }
  };
  

  const setEdicion = (servicio) => {
    setServicio(servicio);
  };

  const eliminarServicio = async (servicio) => {
    console.log(servicio);
    // configuracion para ambos casos
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const { _id, nombre } = servicio;

    // Confirmar eliminar
    const confirmar = confirm(`¿Desea Eliminar el Registro de: ${nombre}`);

    if (confirmar) {
      try {
        const { data } = await clienteAxios.delete(`/servicios/${_id}`, config);
        console.log(data);
        const serviciosActualizados = servicios.filter(
          (servicioState) => servicioState._id !== _id
        );
        setServicio(serviciosActualizados);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <ServicioContext.Provider
      value={{
        servicios,
        guardarServicio,
        servicio,
        setEdicion,
        eliminarServicio,
      }}
    >
      {children}
    </ServicioContext.Provider>
  );
};

export default ServicioContext;

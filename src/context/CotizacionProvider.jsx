import { createContext, useState, useEffect, } from "react";
import clienteAxios from "../config/axios";
import useAuth from "../hooks/useAuth";

const CotizacionContext = createContext();
export const CotizacionProvider = ({ children }) => {
  const [cotizaciones, setCotizaciones] = useState([]);
  const [cotizacion, setCotizacion] = useState([]);
  const { auth } = useAuth();

  useEffect(() => {
    const obtenerCotizaciones = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const config = {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        const { data } = await clienteAxios("/cotizaciones", config);
        console.log(data);
        setCotizaciones(data);
        console.log(data);
        return;
      } catch (error) {
        console.log(error.response);
      }
    };

    obtenerCotizaciones();
  }, [auth]);

  const guardarCotizacion = async (cotizacion) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    if (cotizacion.id) {
      try {
        const { data } = await clienteAxios.put(
          `/cotizaciones/${cotizacion.id}`,
          cotizacion,
          config
        );

        const cotizacionActualizado = cotizaciones.map((cotizacionState) =>
          cotizacionState._id === data._id ? data : cotizacionState
        );

        setCotizaciones(cotizacionActualizado);
        return true;
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const { data } = await clienteAxios.post("/cotizaciones", cotizacion);
        const { createdAt, updatedAt, __v, ...cotizacionAlmacenado } = data; // Crea un nuevo objeto sin los datos mencionados previamente
        setCotizaciones([cotizacionAlmacenado, ...cotizaciones]);
        console.log("Servicio agregado:", cotizacionAlmacenado);
        return true;
      } catch (error) {
        console.log("Error al enviar la cotizacion:", error.response.data.msg);
      }
    }
  };

  const obtenerServicios = async () => {
    // obtener servicios
    try {
      const { data } = await clienteAxios(`/servicios`);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const setEdicion = (cotizacion) => {
    setCotizacion(cotizacion);
  };

  const eliminarCotizacion = async (cotizacion) => {
    console.log(cotizacion);
    // configuracion para ambos casos
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const { _id, nombre } = cotizacion;

    // Confirmar eliminar
    const confirmar = confirm(`¿Desea Eliminar la Cotización de: ${nombre}`);

    if (confirmar) {
      try {
        const { data } = await clienteAxios.delete(`/cotizaciones/${_id}`, config);
        console.log(data);
        const cotizacionesActualizados = cotizaciones.filter(
          (cotizacionState) => cotizacionState._id !== _id
        );
        setCotizaciones(cotizacionesActualizados);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <CotizacionContext.Provider
      value={{
        cotizacion,
        cotizaciones,
        guardarCotizacion,
        obtenerServicios,
        setEdicion,
        eliminarCotizacion,
      }}
    >
      {children}
    </CotizacionContext.Provider>
  );
};

export default CotizacionContext;

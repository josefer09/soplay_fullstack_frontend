import { createContext, useState, useEffect, Children } from "react";
import clienteAxios from "../config/axios";
import useAuth from "../hooks/useAuth";

const CotizacionContext = createContext();

export const CotizacionProvider = ({children}) => {
    const [cotizaciones, setCotizaciones] = useState([]);
    const [cotizacion, setCotizacion] = useState([]);
    const {auth} = useAuth();

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
              const { data } = await clienteAxios.post(
                "/cotizaciones",
                cotizacion,
              );
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
            const {data} = await clienteAxios(`/servicios`);
            return data;
        } catch (error) {
            console.log(error);
        }
      }
  return (
    <CotizacionContext.Provider
    value={{
        cotizacion,
        cotizaciones,
        guardarCotizacion,
        obtenerServicios,
    }}
    >
        {children}
    </CotizacionContext.Provider>
  );
};

export default CotizacionContext;
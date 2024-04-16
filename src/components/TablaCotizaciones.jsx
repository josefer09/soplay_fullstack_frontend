import { useState, useEffect } from "react";
import clienteAxios from "../config/axios";
import useServicios from "../hooks/useServicios";
import Servicio from "./Servicio";
import useCotizacion from "../hooks/useCotizacion";
import Cotizacion from "./Cotizacion";

const TablaCotizaciones = () => {
  const { cotizaciones } = useCotizacion();
  console.log(cotizaciones);

  return (
    <div className="py-2 overflow-x-auto">
      <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200" style={{ maxHeight: "400px", overflowY: "auto" }}>
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Nombre
              </th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Nombre de la Empresa
              </th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Correo
              </th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          
          {cotizaciones.length ? (
            <>
            {cotizaciones.map((cotizacion) => (
          <Cotizacion key={cotizacion._id} cotizacion={cotizacion}/>
            ))}
            </>
          ) : (
            <>
            <h2>No hay Servicios</h2>
            </>
          )}
          
        </table>
      </div>
    </div>
  );
};

export default TablaCotizaciones;

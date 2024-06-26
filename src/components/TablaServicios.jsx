import { useState, useEffect } from "react";
import clienteAxios from "../config/axios";
import useServicios from "../hooks/useServicios";
import Servicio from "./Servicio";

const TablaServicios = () => {

  const {servicios} = useServicios();

  return (
    <div className="py-2 overflow-x-auto">
      <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Nombre
              </th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Descripcion
              </th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Precio Minimo
              </th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          {servicios.length ? (
            <>
            {servicios.map((servicio) => (
          <Servicio key={servicio._id} servicio={servicio}/>
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

export default TablaServicios;

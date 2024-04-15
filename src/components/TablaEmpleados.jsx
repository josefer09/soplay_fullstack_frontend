import { useState, useEffect } from "react";
import clienteAxios from "../config/axios";
import useEmpleados from "../hooks/useEmpleados";
import Empleado from "./Empleado";

const TablaEmpleados = () => {
  console.log(`Hola, aqui hay empleados:${useEmpleados.empleados}`);
  console.log(`Hola, aqui hay empleado:${useEmpleados.empleado}`);
  const {empleados} = useEmpleados();
  console.log(`Hola, aqui hay empleados:${empleados}`);

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
                Apellido
              </th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Correo
              </th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Telefono
              </th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Rol
              </th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          {empleados.length ? (
            <>
            {empleados.map((empleado) => (
          <Empleado key={empleado._id} empleado={empleado}/>
            ))}
            </>
          ) : (
            <>
            <h2>No hay empleados</h2>
            </>
          )}
        </table>
      </div>
    </div>
  );
};

export default TablaEmpleados;

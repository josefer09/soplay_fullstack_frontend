import { useState, useEffect } from "react";
import clienteAxios from "../config/axios";

const TablaEmpleados = () => {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    const fetchEmpleados = async () => {
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
        setEmpleados(data);
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchEmpleados();
  }, []); // El arreglo vacío como segundo argumento asegura que este efecto se ejecute solo una vez después del montaje inicial del componente

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
          <tbody className="bg-white">
            {empleados.map((empleado) => (
              <tr key={empleado._id}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <p className="text-sm leading-5 font-medium text-gray-700 text-lg font-bold">{empleado.nombre}</p>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                  <p className="text-gray-700">{empleado.apellido}</p>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 leading-5 text-gray-700">
                  <p className="text-gray-600">{empleado.correo}</p>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 leading-5 text-gray-700">
                  <p className="text-gray-600">{empleado.telefono}</p>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 leading-5 text-gray-700">
                  <p className="text-gray-600">{empleado.rol}</p>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                  <a href={`employee-edit.html?id=${empleado._id}`} data-employee={empleado._id} className="text-teal-600 hover:text-teal-900 mr-5 editar">Editar</a>
                  <a href="#" data-employee={empleado._id} className="text-red-600 hover:text-red-900 mr-5 eliminar">Eliminar</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablaEmpleados;

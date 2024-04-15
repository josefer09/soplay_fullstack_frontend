import useEmpleados from "../hooks/useEmpleados"
const Empleado = ({empleado}) => {

    const {setEdicion, eliminarEmpleado} = useEmpleados();
    const {nombre, apellido, correo, telefono, rol, _id} = empleado;

  return (
    <>
    <tbody className="bg-white">
              <tr key={_id}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <p className="text-sm leading-5 font-medium text-gray-700 text-lg font-bold">{nombre}</p>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                  <p className="text-gray-700">{apellido}</p>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 leading-5 text-gray-700">
                  <p className="text-gray-600">{correo}</p>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 leading-5 text-gray-700">
                  <p className="text-gray-600">{telefono}</p>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 leading-5 text-gray-700">
                  <p className="text-gray-600">{rol}</p>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                  <a href={`employee-edit.html?id=${_id}`} data-employee={empleado._id} className="text-teal-600 hover:text-teal-900 mr-5 editar">Editar</a>
                  <a href={`employee-edit.html?id=${_id}`} data-employee={_id} className="text-teal-600 hover:text-teal-900 mr-5 editar">Editar</a>
                    <button onClick={() => eliminarEmpleado(empleado)} className="text-red-600 hover:text-red-900 mr-5 eliminar">Eliminar</button>
                </td>
              </tr>
            
          </tbody>
    </>
  )
}

export default Empleado
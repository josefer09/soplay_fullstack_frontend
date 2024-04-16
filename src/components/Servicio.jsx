import useServicios from "../hooks/useServicios";
import { useNavigate } from 'react-router-dom';

const Servicio = ({servicio}) => {

    const {setEdicion, eliminarServicio} = useServicios();
    const {nombre, descripcion, precioMin, _id} = servicio;

    const navigate = useNavigate();
    const handleEditar = () => {
      setEdicion(servicio);
        navigate(`registrar-servicio`);
      };

  return (
    <>
    <tbody className="bg-white">
              <tr key={_id}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <p className="text-sm leading-5 font-medium text-gray-700 text-lg font-bold">{nombre}</p>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                  <p className="text-gray-700">{descripcion}</p>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 leading-5 text-gray-700">
                  <p className="text-gray-600">{precioMin}</p>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                <button type="button" onClick={handleEditar} className="text-green-600 hover:text-green-900 mr-5 eliminar">Editar</button>
                    <button onClick={() => eliminarServicio(servicio)} className="text-red-600 hover:text-red-900 mr-5 eliminar">Eliminar</button>
                </td>
              </tr>
            
          </tbody>
    </>
  )
}

export default Servicio
import useCotizacion from "../hooks/useCotizacion";
import { useNavigate } from "react-router-dom";

const Cotizacion = ({cotizacion}) => {

    const {setEdicion, eliminarCotizacion} = useCotizacion();
    const {nombre, nombre_empresa, correo, servicio, _id} = cotizacion;

    const navigate = useNavigate();
    const handleEditar = () => {
      setEdicion(cotizacion);
        navigate(`registrar-servicio`);
      };

      console.log(cotizacion);



  return (
    <>
    <tbody className="bg-white">
              <tr key={_id}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <p className="text-sm leading-5 font-medium text-gray-700 text-lg font-bold">{nombre}</p>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                  <p className="text-gray-700">{nombre_empresa}</p>
                </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p className="text-gray-700">{correo}</p>
                    </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                
                    <button onClick={() => eliminarCotizacion(cotizacion)} className="text-red-600 hover:text-red-900 mr-5 eliminar">Eliminar</button>
                </td>
              </tr>
            
          </tbody>
    </>
  )
}

export default Cotizacion
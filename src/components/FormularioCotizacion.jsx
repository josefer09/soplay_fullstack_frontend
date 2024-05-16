import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "./Alerta";
import clienteAxios from "../config/axios";
import useCotizacion from "../hooks/useCotizacion";

const FormularioCotizacion = () => {
  const { guardarCotizacion, cotizacion, obtenerServicios } = useCotizacion();

  const [nombre, setNombre] = useState("");
  const [nombre_empresa, setNombre_empresa] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [servicio, setServicio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [foto, setFoto] = useState("");
  const [listaServicios, setListaServicios] = useState([]);

  const [alerta, setAlerta] = useState({});

  useEffect(() => {
    const imprimirServicios = async () => {
      try {
        const servicios = await obtenerServicios();
        setListaServicios(servicios);
      } catch (error) {
        console.error("Error al obtener servicios:", error);
      }
    };

    imprimirServicios();
  }, []); // Llamar solo al montar el componente

  // En el componente FormularioCotizacion
const handleSubmit = async (e) => {
  e.preventDefault();
  // Validar Formulario
  if (
    [
      nombre,
      nombre_empresa,
      correo,
      telefono,
      servicio,
      descripcion,
      foto // Asegúrate de incluir la foto en la validación
    ].includes("")
  ) {
    // Hay campos vacíos
    setAlerta({ msg: "No se permiten campos vacíos", error: true });
    return;
  }
  console.log(foto);

  setAlerta({});

  // Crear la cotización
  try {
    // Construcción del objeto FormData
    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('nombre_empresa', nombre_empresa);
    formData.append('correo', correo);
    formData.append('telefono', telefono);
    formData.append('servicio', servicio);
    formData.append('descripcion', descripcion);
    formData.append('foto', foto.name);
    formData.append('fotoFile', foto); // Asegúrate de incluir la foto como un archivo

    const cotizacionRegistrada = await guardarCotizacion(formData); // Envía el formData en lugar del objeto cotizacion
    if (cotizacionRegistrada) {
      setAlerta({ msg: "Cotización registrada, te responderemos dentro de las siguientes 24 horas!", error: false });
      return;
    }
  } catch (error) {
    setAlerta({
      msg: error.response.data.msg,
      error: true,
    });
  }
};

// Mantén el handleImagenChange sin cambios


  const handleImagenChange = (e) => {
    const file = e.target.files[0]; // Obtener el archivo seleccionado
    setFoto(file); // Actualizar el estado con la imagen seleccionada
  };

  const { msg } = alerta;
  return (
    <>
      <div className="mt-20 md:mt-5 flex justify-center">
        <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
          {msg && <Alerta alerta={alerta} />}
          <form action="" onSubmit={handleSubmit}>
            <div className="my-5">
              <label className="uppercasek text-gray-600 block text-xl font-bold">
                Nombre
              </label>
              <input
                type="text"
                placeholder="Tú Nombre"
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="my-5">
              <label className="uppercasek text-gray-600 block text-xl font-bold">
                Empresa
              </label>
              <input
                type="text"
                placeholder="Ingrese el nombre de la empresa"
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                value={nombre_empresa}
                onChange={(e) => setNombre_empresa(e.target.value)}
              />
            </div>
            <div className="my-5">
              <label className="uppercasek text-gray-600 block text-xl font-bold">
                Correo
              </label>
              <input
                type="text"
                placeholder="Ingrese su correo"
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>
            <div className="my-5">
              <label className="uppercasek text-gray-600 block text-xl font-bold">
                Telefono
              </label>
              <input
                type="text"
                placeholder="Ingrese su numero telefonico"
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
            <div className="my-5">
              <label className="uppercase text-gray-600 block text-xl font-bold">
                Servicio
              </label>
              <select
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                value={servicio}
                onChange={(e) => setServicio(e.target.value)}
              >
                <option value="">Selecciona un servicio</option>
                {listaServicios.map((servicio) => (
                  <option key={servicio._id} value={servicio._id}>
                    {servicio.nombre}
                  </option>
                ))}
              </select>
            </div>
            <div className="my-5">
              <label className="uppercasek text-gray-600 block text-xl font-bold">
                Descripcion
              </label>
              <textarea
                placeholder="Describa su solicitud..."
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </div>
            <div className="my-5">
              <label className="uppercase text-gray-600 block text-xl font-bold">
                Imagen
              </label>
              <input
                type="file"
                accept="image/*" // Limitar la selección a archivos de imagen
                onChange={handleImagenChange} // Manejar el cambio de imagen
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              />
            </div>

            <div className="text-center">
              <input
                type="submit"
                value="Registrate"
                className="bg-blue-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-blue-800 md:w-auto"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormularioCotizacion;
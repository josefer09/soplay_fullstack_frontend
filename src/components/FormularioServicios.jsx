import React, { useEffect } from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import clienteAxios from "../config/axios"
import Alerta from "../components/Alerta";
import useServicios from '../hooks/useServicios';


const FormularioServicio = () => {


  const {guardarServicio, servicio} = useServicios();

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precioMin, setPrecioMin] = useState("");
  const [id, setId] =  useState(null);


  const [alerta, setAlerta] = useState({});

  const navigateTo = useNavigate();
  
  useEffect(() => {
    if(servicio?.nombre) {
    setNombre(servicio.nombre);
    setDescripcion(servicio.descripcion);
    setPrecioMin(servicio.precioMin);
    setId(servicio._id);
}
  }, [servicio])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('click');
    // Validar Formulario
    if ([nombre, descripcion, precioMin].includes("")) {
      // Hay campos vacios
      console.log('vacio');
      setAlerta({ msg: "No se permiten campos vacios", error: true });
      return;
    }

    

    setAlerta({});

    // Crear el usuario

    
      // Construccion del objeto
      const servicio = {
        id,
        nombre,
        descripcion,
        precioMin,
      };
      console.log(servicio);

      const servicioRegistrado = await guardarServicio(servicio);
      console.log(servicioRegistrado);
      if(servicioRegistrado) {
        setAlerta({msg: 'Servicio Guardado', error: false});

        setTimeout(() => {
          //setRedirect(true);
      setAlerta({});
      navigateTo('/scy/admin/servicios');
      //window.location.reload();
        }, 2000);
        // Usuario Registrado, limpiar form
         setNombre('');
         setDescripcion('');
         setPrecioMin('');
        // setEmail('');
        // setPassword('');
        // setConfirmarPassword('');
      return;
      }
      setAlerta({msg: 'Servicio ya registrado, ingrese un correo valido', error: true});

      
  };

  

  const { msg } = alerta;

  const titulo = id? 'Editar Servicio' : 'Registrar Servicio';
  return (
    <>
    <div>
        <h1 className="text-blue-600 font-black text-2xl text-center">
          {titulo}
        </h1>
      </div>
      <div className="mt-20 md:mt-5 justify-center">

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
              Descripcion
            </label>
            <input
              type="text"
              placeholder="Apellido de Registro"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label className="uppercasek text-gray-600 block text-xl font-bold">
              Precio Minimo
            </label>
            <input
              type="number"
              placeholder="Introduce el coste minimo del servicio"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={precioMin}
              onChange={(e) => setPrecioMin(e.target.value)}
            />
          </div>
          
          <div className="text-center">
          <input
            type="submit"
            value={id? 'Actualizar Servicio' : 'Agregar Servicio'}
            className="bg-blue-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-blue-800 md:w-auto"
          />
          </div>
        </form>
        
      </div>
      </div>
    </>
  )
}

export default FormularioServicio
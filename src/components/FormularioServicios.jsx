import React, { useEffect } from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import clienteAxios from "../config/axios"
import Alerta from "../components/Alerta";
import useEmpleados from '../hooks/useEmpleados';


const FormularioServicio = () => {


  const {guardarEmpleado, empleado} = useEmpleados();

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precioMin, setPrecioMin] = useState("");
  const [id, setId] =  useState(null);


  const [alerta, setAlerta] = useState({});

  const navigateTo = useNavigate();
  useEffect(() => {
    if(empleado?.nombre) {
    setNombre(empleado.nombre);
    setApellido(empleado.apellido);
    setCorreo(empleado.correo);
    setTelefono(empleado.telefono);
    setRol(empleado.rol);
    setId(empleado._id);
}
  }, [empleado])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('click');
    // Validar Formulario
    if ([nombre, apellido, correo, telefono, rol].includes("")) {
      // Hay campos vacios
      console.log('vacio');
      setAlerta({ msg: "No se permiten campos vacios", error: true });
      return;
    }

    

    setAlerta({});

    // Crear el usuario

    
      // Construccion del objeto
      const empleado = {
        id,
        nombre,
        descripcion,
        precioMin,
      };
      console.log(empleado);

      const empleadoRegistrado = await guardarEmpleado(empleado);
      console.log(empleadoRegistrado);
      if(empleadoRegistrado) {
        setAlerta({msg: 'Empleado Guardado', error: false});

        setTimeout(() => {
          //setRedirect(true);
      setAlerta({});
      navigateTo('/scy/admin');
      //window.location.reload();
        }, 2000);
        // Usuario Registrado, limpiar form
        // setNombre('');
        // setEmail('');
        // setPassword('');
        // setConfirmarPassword('');
      return;
      }
      setAlerta({msg: 'Correo registrado, ingrese un correo valido', error: true});

      
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
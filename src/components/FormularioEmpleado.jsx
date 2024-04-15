import React, { useEffect } from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import clienteAxios from "../config/axios"
import Alerta from "../components/Alerta";
import useEmpleados from '../hooks/useEmpleados';


const FormularioEmpleado = () => {


  const {guardarEmpleado, empleado} = useEmpleados();

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [rol, setRol] = useState("");
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
        apellido,
        correo,
        telefono,
        rol,
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

  const titulo = id? 'Editar Empleado' : 'Registrar Empleado';
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
              Apellido
            </label>
            <input
              type="text"
              placeholder="Apellido de Registro"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label className="uppercasek text-gray-600 block text-xl font-bold">
              Correo
            </label>
            <input
              type="email"
              placeholder="correo"
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
              placeholder="Tú telefono"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label className="uppercasek text-gray-600 block text-xl font-bold">
              Rol
            </label>
            <input
              type="text"
              placeholder="Rol"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={rol}
              onChange={(e) => setRol(e.target.value)}
            />
          </div>
          <div className="text-center">
          <input
            type="submit"
            value={id? 'Actualizar Empleado' : 'Agregar Empleado'}
            className="bg-blue-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-blue-800 md:w-auto"
          />
          </div>
        </form>
        
      </div>
      </div>
    </>
  )
}

export default FormularioEmpleado
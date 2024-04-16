import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from './Alerta';
import clienteAxios from '../config/axios';

const FormularioCotizacion = () => {
    const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmarPassword, setConfirmarPassword] = useState("");

  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validar Formulario
    if ([nombre, email, password, confirmarPassword].includes("")) {
      // Hay campos vacios
      setAlerta({ msg: "No se permiten campos vacios", error: true });
      return;
    }

    if (password !== confirmarPassword) {
      setAlerta({ msg: "Las contraseñas no son iguales", error: true });
      return;
    }

    if (password.length < 6) {
      setAlerta({
        msg: "La contraseña debe ser de minimo 6 caracteres",
        error: true,
      });
      return;
    }

    setAlerta({});

    // Crear el usuario

    try {
      // Construccion del objeto
      const usuario = {
        nombre,
        email,
        password,
      };
      console.log(usuario);

      const {data} = await clienteAxios.post('/usuarios', usuario);
      console.log(data);
      setAlerta({msg: 'Usuario Registrado, Revisa tu email', error: false});
      // Usuario Registrado, limpiar form
      // setNombre('');
      // setEmail('');
      // setPassword('');
      // setConfirmarPassword('');
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      });
    }
  };

  const { msg } = alerta;
  return (
    <>
    <div>
        <h1 className="text-blue-600 font-black text-2xl text-center">
          Crea tu Cuenta y Administra{" "}
          <span className="text-black">tus administradores</span>
        </h1>
      </div>
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
              Email
            </label>
            <input
              type="text"
              placeholder="Email de Registro"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label className="uppercasek text-gray-600 block text-xl font-bold">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="Tú contraseña"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label className="uppercasek text-gray-600 block text-xl font-bold">
              Confirma tú Contraseña
            </label>
            <input
              type="password"
              placeholder="Repite la contraseña"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={confirmarPassword}
              onChange={(e) => setConfirmarPassword(e.target.value)}
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
        <nav className="mt-10 lg:flex lg:justify-between">
          <Link className="block text-center my-5 text-gray-500" to={"/"}>
            ¿Ya tienes una cuenta? Inicia Sesión
          </Link>
          <Link
            className="block text-center my-5 text-gray-500"
            to={"/olvide-password"}
          >
            Olvide mi Password
          </Link>
        </nav>
      </div>
      </div>
    </>
  )
}

export default FormularioCotizacion
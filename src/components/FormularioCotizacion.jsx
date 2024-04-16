import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "./Alerta";
import clienteAxios from "../config/axios";

const FormularioCotizacion = () => {
  const [nombre, setNombre] = useState("");
  const [nombre_empresa, setNombre_empresa] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [servicio, setServicio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [foto, setFoto] = useState("");
  const [listaServicios, setListaServicios] = useState([]);

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

      const { data } = await clienteAxios.post("/usuarios", usuario);
      console.log(data);
      setAlerta({ msg: "Usuario Registrado, Revisa tu email", error: false });
      // Usuario Registrado, limpiar form
      // setNombre('');
      // setEmail('');
      // setPassword('');
      // setConfirmarPassword('');
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const handleImagenChange = (e) => {
    const file = e.target.files[0]; // Obtener el archivo seleccionado
    setFoto(file); // Actualizar el estado con la imagen seleccionada
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
                  <option key={servicio.id} value={servicio.id}>
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
  );
};

export default FormularioCotizacion;

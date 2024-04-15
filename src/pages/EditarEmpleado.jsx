import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FormularioEmpleado from '../components/FormularioEmpleado';
import clienteAxios from "../config/axios";

const EditarEmpleado = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [empleadoEditar, setEmpleadoEditar] = useState({});

  useEffect(() => {
    const obtenerEmpleado = async () => {
      try {
        const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
        const {data} = await clienteAxios.get(`/empleados/${id}`, config);
        console.log(data);
        setEmpleadoEditar(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    obtenerEmpleado();
  }, [id]);

  return (
    <div className=" px-2 mb-10">
      <h2 id="main" className="text-3xl font-light text-center">Editar Empleado</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="flex flex-col mt-5">
          <FormularioEmpleado empleado={empleadoEditar} />
        </div>
      )}
    </div>
  );
};

export default EditarEmpleado;

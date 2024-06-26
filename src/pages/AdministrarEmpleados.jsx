import React from "react";
import { useState } from "react";
import TablaEmpleados from "../components/TablaEmpleados";
import FormularioEmpleado from '../components/FormularioEmpleado';


const AdministrarEmpleados = () => {

  const handleClick = () => {
    // Redirige a otro componente
    window.location.href = "http://localhost:5173/scy/admin/registrar"
    // O redirige a una dirección externa
  };
  return (
    <>
      <div className=" px-2 mb-10">
        <h2 id="main" class="text-3xl font-light text-center">
          Empleados
        </h2>

        <div class="flex flex-col mt-5">
          <TablaEmpleados/>
        </div>
        
        
      </div>
      <div className="flex justify-center">
      <button
        className="bg-blue-600 text-white font-bold uppercase mx-10 p-3 rounded-md mb-10 "
        onClick={handleClick}>Registrar Empleado
        </button>
      </div>
    </>
  );
};

export default AdministrarEmpleados;

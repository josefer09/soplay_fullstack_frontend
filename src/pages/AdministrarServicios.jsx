import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TablaServicios from "../components/TablaServicios";
import FormularioEmpleado from '../components/FormularioEmpleado';

const AdministrarServicios = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.location.href = "http://localhost:5173/scy/admin/servicios/registrar-servicio";
  }
  return (
    <>
      <div className=" px-2 mb-10">
        <h2 id="main" class="text-3xl font-light text-center">
          Servicios
        </h2>

        <div class="flex flex-col mt-5">
          <TablaServicios/>
        </div>
        
        
      </div>
      <div className="flex justify-center">
      <button
        className="bg-blue-600 text-white font-bold uppercase mx-10 p-3 rounded-md mb-10 "
        onClick={handleClick}>Registrar Servicio
        </button>
      </div>
    </>
  );
}

export default AdministrarServicios
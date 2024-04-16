import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TablaCotizaciones from "../components/TablaCotizaciones";

const AdministrarCotizaciones = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.location.href = "http://localhost:5173/scy/admin/servicios/registra-cotizaciones";
  }
  return (
    <>
      <div className=" px-2 mb-10">
        <h2 id="main" class="text-3xl font-light text-center">
          Cotizaciones
        </h2>

        <div class="flex flex-col mt-5">
          <TablaCotizaciones/>
        </div>
        
        
      </div>
      
    </>
  );
}

export default AdministrarCotizaciones
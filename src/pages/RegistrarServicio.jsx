import React from 'react'
import FormularioEmpleado from '../components/FormularioEmpleado';

const RegistrarServicio = () => {
    const handleClick = () => {
        console.log('Holamundo');
    }
  return (
    <>
    <div className=" px-2 mb-10">
        <h2 id="main" class="text-3xl font-light text-center">
          Registrar Servicios
        </h2>

        <div class="flex flex-col mt-5">
          <FormularioEmpleado/>
        </div>
        
        
      </div>
      <div className="flex justify-center">
      <button
        className="bg-blue-600 text-white font-bold uppercase mx-10 p-3 rounded-md mb-10 "
        onClick={handleClick}>Registrar Empleado
        </button>
      </div>
    </>
  )
}

export default RegistrarServicio
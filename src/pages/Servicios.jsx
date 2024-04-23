import React from 'react'

const Servicios = () => {
  return (
    <>
    <main className="container mx-auto">
      <h3 className="text-center text-3xl font-semibold mb-8">Nuestros Servicios</h3>

      {/* Servicio de Soldadura */}
      <div className="flex flex-col md:flex-row items-center md:items-start mb-12">
        <div className="w-full md:w-1/3">
          <img src="../public/soldadura.jpg" alt="Imagen del servicio de Soldadura" className="w-full" />
        </div>
        <div className="w-full md:w-2/3 md:ml-6">
          <h4 className="text-lg font-semibold mb-2">Servicio de Soldadura</h4>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempor libero.
          </p>
          <p className="text-gray-700 mb-1">Precio:</p>
          <p className="text-gray-900 font-semibold mb-4">A consultar</p>
        </div>
      </div>

      {/* Servicio de Reparación */}
      <div className="flex flex-col md:flex-row items-center md:items-start mb-12">
        <div className="w-full md:w-1/3">
          <img src="../public/reparacion.png" alt="Imagen del servicio de Reparación" className="w-full" />
        </div>
        <div className="w-full md:w-2/3 md:ml-6">
          <h4 className="text-lg font-semibold mb-2">Servicio de Reparación</h4>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempor libero.
          </p>
          <p className="text-gray-700 mb-1">Precio:</p>
          <p className="text-gray-900 font-semibold mb-4">A consultar</p>
        </div>
      </div>

      {/* Servicio de Fundición */}
      <div className="flex flex-col md:flex-row items-center md:items-start mb-12">
        <div className="w-full md:w-1/3">
          <img src="../public/fundicion.jpg" alt="Imagen del servicio de Fundición" className="w-full" />
        </div>
        <div className="w-full md:w-2/3 md:ml-6">
          <h4 className="text-lg font-semibold mb-2">Servicio de Fundición</h4>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempor libero.
          </p>
          <p className="text-gray-700 mb-1">Precio:</p>
          <p className="text-gray-900 font-semibold mb-4">A consultar</p>
        </div>
      </div>
    </main>
    </>
  )
}

export default Servicios
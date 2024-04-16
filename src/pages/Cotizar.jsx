import React from 'react';
import FormularioCotizacion from '../components/FormularioCotizacion';

const Cotizar = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Título Aquí</h1>
        <p className="text-lg">Descripción aquí.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <FormularioCotizacion />
        </div>
        <div>
          <img src="../../public/fondo-cotizacion.jpeg" alt="Imagen" className="w-full h-auto md:h-full md:w-auto" />
        </div>
      </div>
    </div>
  );
}

export default Cotizar;

import React from 'react';
import { Link } from 'react-router-dom';

const HeaderPublic = () => {
  return (
    <header className="bg-gray-200 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center justify-center md:justify-start">
          {/* Aquí puedes cambiar la ruta y el nombre de la imagen */}
          <Link to="/">
            <img src="../../public/soplay-logo.png" alt="Logo" className="h-12 md:h-20 w-auto" />
          </Link>
        </div>
        <nav className="mt-4 md:mt-0 md:space-x-4 md:flex-grow md:flex md:items-center md:justify-end text-center text-2xl">
          <div className="md:flex md:space-x-4 md:space-y-0 flex-col md:flex-row">
            <Link to="/cotizar" className=" text-black hover:text-blue-600 block md:inline-block md:text-center">Cotizar</Link>
            <Link to="/servicios" className=" text-black hover:text-blue-600 block md:inline-block md:text-center">Servicios</Link>
            <Link to="/nosotros" className=" text-black hover:text-blue-600 block md:inline-block md:text-center">Nosotros</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default HeaderPublic;
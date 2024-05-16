import React from "react";
import { Link } from "react-router-dom";

const HeaderPublic = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <Link to="/">
          <img
            src="../../public/soplay-logo.png"
            alt="Logo"
            className=" w-1/3 h-auto mx-10"
          />
        </Link>
        <nav className="mx-10 my-5 flex">
          <Link to="facebook.com" className="mx-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-facebook"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
          </Link>
          <Link className="mx-5">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
  <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
</svg>
          </Link>
        </nav>
      </div>

      <header className="bg-blue-500 text-white py-4">
          <nav className="mt-4 md:mt-0 md:space-x-4 md:flex-grow md:flex md:items-center md:justify-center text-center text-2xl">
              <Link
                to="/cotizar"
                className=" text-white hover:text-yellow-400 block md:inline-block md:text-center"
              >
                Cotizar
              </Link>
              <Link
                to="/servicios"
                className=" text-white hover:text-yellow-400 block md:inline-block md:text-center mx-5"
              >
                Servicios
              </Link>
              <Link
                to="/nosotros"
                className=" text-white hover:text-yellow-400 block md:inline-block md:text-center mx-5"
              >
                Nosotros
              </Link>
              <Link
                to="/scy"
                className=" text-white hover:text-yellow-400 block md:inline-block md:text-center mx-5"
              >
                Empleados
              </Link>
          </nav>
      </header>
    </>
  );
};

export default HeaderPublic;

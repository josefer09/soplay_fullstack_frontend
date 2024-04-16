import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {
    const {cerrarSesion} = useAuth();
    const navigate = useNavigate();

    const handleNavigate = (path) => {
      navigate(path);
    }
  return (
    <>
      <aside className="md:w-1/4 lg:w-1/5 xl:w-1/6 bg-blue-600 px-5 py-10 flex flex-col justify-between">
        <div>
          <h1
          id="title"
          className="uppercase text-white tracking-wide text-2xl font-bold mt-2"
        >
          SOPLAY
        </h1>
        <div id="welcome"></div>
        <p class="mt-10 text-white">
          Administra los empleados, cotizaciones y más.
        </p>
        <nav className="mt-8">
          <a href="/scy/admin/users"
          class="px-3 py-1 text-white block hover:bg-blue-700 hover:text-yellow-400">Usuarios</a>
          <a
            href="/scy/admin"
            class="px-3 py-1 text-white block hover:bg-blue-700 hover:text-yellow-400"
            >Empleados</a
          >
          <a
          href="/scy/admin/servicios"
            className="px-3 py-1 text-white block hover:bg-blue-700 hover:text-yellow-400"
            >Servicios</a
          >
          <a
            href="./specialtys.html"
            className="px-3 py-1 text-white block hover:bg-blue-700 hover:text-yellow-400"
            >Cotizaciones</a
           >
          <a
            href="./patient.html"
            className="px-3 py-1 text-white block hover:bg-blue-700 hover:text-yellow-400"
            >Pagos</a
          >
        </nav>
        </div>

        <div className="mt-auto flex items-center justify-start">
          <button id="logOut" className="flex items-center justify-center w-30 h-30 px-2 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-blue-500 cursor-pointer focus:ring-blue-400" title="cerrar-sesion" type="button" onClick={cerrarSesion}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
            </svg>
            <p class="pl-2 text-white">Cerrar Sesión</p>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Header;
import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RutaProtegida = () => {
    const { auth, cargando } = useAuth();
  
    if (cargando) {
      return "cargando";
    }
    return (
      <>
          <div class="md:flex min-h-screen md:align-top">

        <Header />
        {auth?._id ? (
          <main className="md:w-3/5 xl:w-4/5 px-5 py-10 bg-gray-200">
            <Outlet />
          </main>
        ) : (
          <Navigate to="/scy" />
        )}
        </div>
      </>
    );
  };
  
  export default RutaProtegida;
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
      <body className='min-h-100 bg-gray-200'>
        
          <div className="md:flex flex-1 w-full min-h-screen md:align-top">

        <Header />
        {auth?._id ? (
          <main className="md:w-4/5 xl:w-4/5 px-5 py-10 bg-gray-200">
            <Outlet />
          </main>
        ) : (
          <Navigate to="/scy" />
        )}
        </div>
      </body>

      </>
    );
  };
  
  export default RutaProtegida;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Login,
  AdministrarEmpleados,
  Registrar,
  ConfirmarCuenta,
  EditarEmpleado,
  AdministrarServicios,
  Cotizar,
  AdministrarCotizaciones,
} from "./pages";
//import Login from './pages/Login';
//import AdministrarEmpleados from './pages/AdministrarEmpleados';
import AuthLayout from "./layouts/AuthLayout";
import RutaProtegida from "./layouts/RutaProtegida";
import { AuthProvider } from "./context/AuthProvider";
import { EmpleadosProvider } from "./context/EmpleadosProvider";
import { ServicioProvider } from "./context/ServicioProvider";
import { CotizacionProvider } from "./context/CotizacionProvider";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home";
import FormularioEmpleado from "./components/FormularioEmpleado";
import FormularioServicio from "./components/FormularioServicios";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CotizacionProvider>
          <EmpleadosProvider>
            <ServicioProvider>
              <Routes>
                <Route path="/" element={<HomeLayout />}>
                  <Route index element={<Home />} />
                  <Route path="cotizar" element={<Cotizar />} />
                </Route>
                <Route path="/scy" element={<AuthLayout />}>
                  <Route index element={<Login />} />
                  <Route
                    path="/scy/confirmar/:id"
                    element={<ConfirmarCuenta />}
                  />
                </Route>
                <Route path="/scy/admin" element={<RutaProtegida />}>
                  <Route index element={<AdministrarEmpleados />} />
                  <Route path="registrar" element={<FormularioEmpleado />} />
                  <Route path="usuarios/registrar" element={<Registrar />} />
                  <Route
                    path="editar-empleado/:id"
                    element={<EditarEmpleado />}
                  />
                  <Route path="servicios" element={<AdministrarServicios />} />
                  <Route
                    path="servicios/registrar-servicio"
                    element={<FormularioServicio />}
                  />
                  <Route path="cotizaciones" element={<AdministrarCotizaciones/>}/>
                </Route>
              </Routes>
            </ServicioProvider>
          </EmpleadosProvider>
        </CotizacionProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

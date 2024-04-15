import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, AdministrarEmpleados, Registrar, ConfirmarCuenta } from "./pages";
//import Login from './pages/Login';
//import AdministrarEmpleados from './pages/AdministrarEmpleados';
import AuthLayout from "./layouts/AuthLayout";
import RutaProtegida from "./layouts/RutaProtegida";
import { AuthProvider } from "./context/AuthProvider";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home";
import FormularioEmpleado from "./components/FormularioEmpleado";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomeLayout/>}>
            <Route index element={<Home/>}/>
          </Route>
          <Route path="/scy" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="/scy/confirmar/:id" element={<ConfirmarCuenta/>}/>
          </Route>
          <Route path="/scy/admin" element={<RutaProtegida />}>
            <Route index element={<AdministrarEmpleados />} />
            <Route path="registrar" element={<FormularioEmpleado/>}/>
            <Route path="usuarios/registrar" element={<Registrar/>}/>
            
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Outlet } from 'react-router-dom';


const HomeLayout = () => {
  return (
    <>
    <main className="container mx-auto md:grid md:grid-cols-2 mt-12 gap-10 p-5 items-center">
        <Outlet />
      </main>
    </>
  );
};

export default HomeLayout;
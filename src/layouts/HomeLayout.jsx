import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Outlet } from 'react-router-dom';
import HeaderPublic from '../components/HeaderPublic'



const HomeLayout = () => {
  return (
    <>
    <HeaderPublic/>
    <main className="">
        <Outlet />
      </main>
    </>
  );
};

export default HomeLayout;
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex bg-gray-600 text-white p-5">
      <Link href={"/"} className="mr-4">
        Página inicio
      </Link>
      <Link href={"/users"} className="mr-4">
        Usuarios
      </Link>
      <Link href={"/products"} className="mr-4">
        Productos
      </Link>
      <Link href={"/admin"} className="mr-4">
        Administrador
      </Link>
    </div>
  );
};

export default NavBar;

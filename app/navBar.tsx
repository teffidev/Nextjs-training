import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex bg-gray-600 text-white">
      <Link href={"/"} className="mr-4">
        Página inicio
      </Link>
      <Link href={"/users"} className="mr-4">
        Usuarios
      </Link>
    </div>
  );
};

export default NavBar;

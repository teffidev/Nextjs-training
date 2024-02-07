import React from "react";
import UserTable from "./UserTable";
import Link from "next/link";

const PageUsers = () => {
  return (
    <>
      <h1>Usuarios</h1>
      {/* <h2>{new Date().toLocaleTimeString()}</h2> */}
      <Link href={"/users/newUser"} className="btn btn-secondary">
        Nuevo usuario
      </Link>
      <UserTable />
    </>
  );
};

export default PageUsers;

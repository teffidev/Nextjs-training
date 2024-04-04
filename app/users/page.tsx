import React from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props{
  searchParams: {userOrder: string}
}

const PageUsers = async ({searchParams: {userOrder}}: Props) => {
  return (
    <>
      <h1>Usuarios</h1>
      {/* <h2>{new Date().toLocaleTimeString()}</h2> */}
      <Link href={"/users/newUser"} className="btn btn-secondary">
        Nuevo usuario
      </Link>
      <UserTable userOrder={userOrder}/>
    </>
  );
};

export default PageUsers;

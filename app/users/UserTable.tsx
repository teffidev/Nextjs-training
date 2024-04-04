import React from "react";
import { sort } from "fast-sort";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  userOrder: string;
}

const UserTable = async ({ userOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  const users: User[] = await res.json();

  //Ordenamiento
  const usersOrder = sort(users).asc(
    userOrder === "email"
      ? (usuario) => usuario.email
      : (usuarios) => usuarios.name
  );

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
      {usersOrder.map((usuario) => (
          <tr key={usuario.id}>
            <td>{usuario.name}</td>
            <td>{usuario.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;

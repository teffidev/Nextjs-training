import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: number };
}

const UserDetailsPage = ({ params: { id } }: Props) => {

  if (id > 5) {
    notFound();
  }
  
  return <div>Detalle Usuario: {id}</div>;
};

export default UserDetailsPage;

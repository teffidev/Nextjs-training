"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void
}

const Error = ({ error, reset }: Props) => {
  console.log("Error", error);

  return (
    <>
      <h2>¡Ha ocurrido un error inesperado!</h2>
      <button className="btn btn-info">Intentar de nuevo</button>
    </>
  );
};

export default Error;

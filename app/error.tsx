"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: Props) => {
  console.log("Error", error);

  return (
    <>
      <h2>¡Ha ocurrido un error inesperado!</h2>
      <div className="pt-5">
        <button onClick={reset} className="btn btn-info">Intentar de nuevo</button>
      </div>
    </>
  );
};

export default Error;

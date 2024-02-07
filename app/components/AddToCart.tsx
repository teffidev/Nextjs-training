"use client";
import React from "react";

const AddToCart = () => {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => console.log("Botón Clickeando")}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default AddToCart;

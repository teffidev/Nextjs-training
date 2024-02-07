import React from "react";

interface Props {
  params: { enlace: string[] };
}

const ProductPage = ({ params: { enlace } }: Props) => {
  return <div>Página de productos {enlace}</div>;
};

export default ProductPage;

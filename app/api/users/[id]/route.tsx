import { NextRequest, NextResponse } from "next/server";

// interface Props {
//   params: { id: number };
// }

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  //*Si el id es mayor a 10 entonces error
  if (params.id > 10) {
    return NextResponse.json(
      { error: "Usuario no encontrado" },
      { status: 404 }
    );
  }
  //*Si es menor a 10
  return NextResponse.json({ id: 1, name: "José" });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();

  if (!body.name) {
    return NextResponse.json(
      { error: "El nombre es obligatorio" },
      { status: 400 }
    );
  }

  if (params.id > 10) {
    return NextResponse.json(
      { error: "El usuario no existe" },
      { status: 404 }
    );
  }

  return NextResponse.json({ id: 1, name: body.name });
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10) {
    return NextResponse.json(
      { error: "El usuario no existe" },
      { status: 404 }
    );
  }

  return NextResponse.json({});
}

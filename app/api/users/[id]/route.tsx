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

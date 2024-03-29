/**
 * GET - Obtener datos
 * POST - Crear dato
 * PUT - Actualizar dato
 * DELETE - Borrar dato
 */

import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "José" },
    { id: 2, name: "Clara" },
    { id: 3, name: "Emma" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  //*Implementación de validaciones ZOD

  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 404 });
  }

  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}

import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      id: 1,
      name: "Lavadora",
      price: 650000,
    },
    {
      id: 2,
      name: "Nevera",
      price: 850000,
    },
    {
      id: 3,
      name: "Estufa",
      price: 950000,
    },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 404 });
  }

  return NextResponse.json({ id: 10, name: body.name, price: body.price });
}

import { PrismaClient } from "@prisma/client";
import { uuid as v4 } from "uuidv4";

export async function GET() {
  const prima = new PrismaClient();

  const data = await prima.usuarios.findMany();
  console.log("chamou");
  return Response.json(data);
}

export async function POST(req: Request) {
  const { username, password } = await req.json();

  if (!username || !password) {
    return new Response("username and password is required", { status: 406 });
  }

  try {
    const prima = new PrismaClient();
    const user = await prima.usuarios.create({
      data: { id: v4(), name: username, password: password },
    });

    return Response.json(user);
  } catch (e) {
    console.log("error -->", e);
    return new Response("Request Error", { status: 500 });
  }
}

export async function PUT(req: Request) {
  const { username, password } = await req.json();

  if (!username || !password) {
    return new Response("username and password is required", { status: 406 });
  }

  try {
    const prima = new PrismaClient();

    const user = prima.usuarios.update({
      where: { name: username },
      data: { password: password },
    });

    return Response.json(user);
  } catch (e) {
    console.log("error -->", e);
    return new Response("Request Error", { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const { username } = await req.json();

  if (!username) {
    return new Response("usernameis required", { status: 406 });
  }

  try {
    const prisma = new PrismaClient();
    const user = await prisma.usuarios.delete({ where: { name: username } });

    return Response.json(user);
  } catch (e) {
    console.log("error -->", e);
    return new Response("Request Error", { status: 500 });
  }
}

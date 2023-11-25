import { PrismaClient } from "@prisma/client";
import { uuid } from "uuidv4";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  if (!username || !password) {
    return new Response("username and password is required", { status: 406 });
  }

  try {
    const prisma = new PrismaClient();
    const user = await prisma.usuarios.create({
      data: { id: uuid(), name: username, password: password },
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
    const prisma = new PrismaClient();

    const user = prisma.usuarios.update({
      where: { name: username },
      data: { password: password },
    });

    return Response.json(user);
  } catch (e) {
    console.log("error -->", e);
    return new Response("Request Error", { status: 500 });
  }
}

export async function PATCH(req: Request) {
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

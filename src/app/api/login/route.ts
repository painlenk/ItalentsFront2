import { PrismaClient } from "@prisma/client";

// rota de login
export async function POST(req: Request) {
  const { username } = await req.json();

  try {
    const prisma = new PrismaClient();
    const data = await prisma.usuarios.findFirst({ where: { name: username } });

    return Response.json(data);
  } catch (e) {
    console.log("error -->", e);
    return new Response("Request Error", { status: 500 });
  }
}

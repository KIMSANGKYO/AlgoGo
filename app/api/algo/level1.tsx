import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const problems = await prisma.problem.findMany();
  if (req.method === "GET") {
    res.status(200).json(problems);
  }
}

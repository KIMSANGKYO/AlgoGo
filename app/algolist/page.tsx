import prisma from "@/lib/prisma";
import Link from "next/link";
import React from "react";

async function getProblems() {
  const problems = await prisma.problem.findMany();

  return problems;
}

const AlgoList = async () => {
  const problems = await getProblems();

  return (
    <main>
      <div className="flex flex-col">
        {problems.map((problem) => (
          <Link href={`/algolist/${problem.id}`} key={problem.id}>
            {problem.title}
          </Link>
        ))}
      </div>
    </main>
  );
};

export default AlgoList;

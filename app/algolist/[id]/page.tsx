import React from "react";
import prisma from "@/lib/prisma";
import NormalProblem from "@/components/algolist/NormalProblem";
import { Prisma } from "@prisma/client";

async function getProblems() {
  const problems = await prisma.problem.findMany();

  return problems;
}

const ProblemList = async () => {
  const problems = await getProblems();

  return (
    <main>
      <div>
        {problems.map((problem) => (
          <NormalProblem key={problem.id} problem={problem} />
        ))}
      </div>
    </main>
  );
};

export default ProblemList;

// 문제를 푸는 페이지

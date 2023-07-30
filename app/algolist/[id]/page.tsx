import React from "react";
import prisma from "@/lib/prisma";

async function getProblems() {
  const pro = await prisma.problem.findMany();
  return pro;
}

const ProblemList = async () => {
  const problem = await getProblems();

  return (
    <main>
      <div>
        {problem.map((e) => (
          <div>{e.title}</div>
        ))}
      </div>
    </main>
  );
};

export default ProblemList;

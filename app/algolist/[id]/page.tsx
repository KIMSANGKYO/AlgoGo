import React from "react";
import prisma from "@/lib/prisma";
import NormalProblem from "@/components/algolist/NormalProblem";

type PageParams = {
  id: number;
};

const ProblemList = async ({ params }: { params: PageParams }) => {
  const problem = await prisma.problem.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  return (
    <main>
      {problem ? (
        <NormalProblem problem={problem} />
      ) : (
        <div>데이터안받아짐</div>
      )}
      <div>{Number(params.id)}</div>
    </main>
  );
};

export default ProblemList;

// 문제 푸는 페이지
// 파람스 받아오기 테스트

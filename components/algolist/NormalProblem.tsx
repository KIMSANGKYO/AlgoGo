import { Prisma } from "@prisma/client";
import React from "react";

type Problem = {
  id: number;
  title: string;
  description: string;
  testcase: any;
  difficulty: number;
};

const NormalProblem = ({ problem }: { problem: Problem }) => {
  return (
    <div>
      <div className="flex flex-col">
        <div>{problem.title}</div>
        <div>{problem.description}</div>
        <div>{problem.testcase.input}</div>
      </div>
    </div>
  );
};

export default NormalProblem;

// 문제 내용 컴포넌트

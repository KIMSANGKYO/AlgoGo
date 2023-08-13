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
      <div className="flex justify-between w-full">
        <div className="flex flex-col w-7/12">
          <div> 드롭다운 (상태,레벨,언어,분류,정렬)</div>
          <ul className="flex flex-col border border-blue-600">
            <div>상태바 라인</div>
            {problems.map((problem) => (
              <Link
                href={`/algolist/${problem.id}`}
                key={problem.id}
                className="p-4"
              >
                {problem.title}
              </Link>
            ))}
          </ul>
        </div>
        <section className="flex flex-col items-center w-4/12">
          <div className="flex border border-blue-600">
            <div className="flex flex-col">
              <div>닉네임</div>
              <div>칭호 & 순위</div>
            </div>
            <div>이미지</div>
          </div>
          <nav className="flex flex-col border border-blue-600">문제네브바</nav>
        </section>
      </div>
    </main>
  );
};

export default AlgoList;

//FIXME: 드롭다운에 맞춰 데이터정렬 필요 >> 표형태로 레이아웃 재설정

import prisma from "@/lib/prisma";
import NormalProblem from "@/components/algolist/NormalProblem";
import ProblemBox from "@/components/algolist/ProblemBox";

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
    <div className="flex justify-around min-h-screen p-4 bg-myWhite">
      <section className="flex-1 p-4 overflow-auto resize-x">
        {problem ? (
          <NormalProblem problem={problem} />
        ) : (
          <div>데이터안받아짐</div>
        )}
      </section>
      <div
        className="w-4 p-1 bg-gray-300 cursor-col-resize"
        style={{ resize: "horizontal" }}
      ></div>
      <section className="flex-1 p-4 overflow-auto resize-x">
        코드 작성 컴포넌트
        <ProblemBox />
      </section>
    </div>
  );
};

export default ProblemList;

// 문제 푸는 페이지
// 파람스 받아오기 테스트 => Number(params.id)

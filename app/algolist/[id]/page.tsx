import prisma from "@/lib/prisma";
import ProblemContainer from "@/components/algolist/ProblemContainer";

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
      {problem ? (
        <ProblemContainer problem={problem} />
      ) : (
        <div>데이터안받아짐</div>
      )}
    </div>
  );
};

export default ProblemList;

// 문제 푸는 페이지
// 파람스 받아오기 테스트 => Number(params.id)
//TODO: 데이터 안받아졌을 경우 오류 페이지 이동 >> url 로 없는 문제번호 접근시

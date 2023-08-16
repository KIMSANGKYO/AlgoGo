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
    <div className="flex flex-col min-h-screen p-4 bg-myWhite">
      {problem ? (
        <ProblemContainer problem={problem} />
      ) : (
        <div>데이터안받아짐</div>
      )}
      <div className="flex justify-end p-4">
        <button className="w-20 h-10 bg-myPink">초기화</button>
        <button className="w-20 h-10 ml-4 bg-myGreen">제출</button>
      </div>
      <section className="flex flex-col bg-myBlue">
        <div>코드러닝</div>
        {/* 테케 출력 뿌리기 */}
        <div>출력값</div>
        <div>정답</div>
        <div>코드 로딩</div>
        <div>맞틀 확인 메시지</div>
      </section>
    </div>
  );
};

export default ProblemList;

// 문제 푸는 페이지
// 파람스 받아오기 테스트 => Number(params.id)
//TODO: 데이터 안받아졌을 경우 오류 페이지 이동 >> url 로 없는 문제번호 접근시

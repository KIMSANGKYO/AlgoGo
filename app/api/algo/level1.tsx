import { NextApiRequest, NextApiResponse } from "next";

type Example = {
  input: string;
  output: string;
};

type Post = {
  id: number;
  title: string;
  description: string;
  input: string;
  output: string;
  example: Example;
  difficulty: string;
};

const algos: Post[] = [
  {
    id: 1,
    title: "두 수의 합",
    description: "두 개의 정수를 입력받아서 그 합을 구하는 함수를 작성하세요.",
    input: "두 개의 정수 a, b가 주어집니다. (1 <= a, b <= 1000)",
    output: "두 정수의 합을 반환해야 합니다.",
    example: {
      input: "5, 10",
      output: "15",
    },
    difficulty: "1",
  },
  {
    id: 2,
    title: "세 수의 평균",
    description:
      "세 개의 정수를 입력받아서 그 평균을 구하는 함수를 작성하세요.",
    input: "세 개의 정수 a, b, c가 주어집니다. (1 <= a, b, c <= 1000)",
    output: "세 정수의 평균 값을 반환해야 합니다.",
    example: {
      input: "10, 20, 30",
      output: "20",
    },
    difficulty: "1",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  if (req.method === "GET") {
    res.status(200).json(algos);
  }
}

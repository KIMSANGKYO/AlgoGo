"use client";

import React, { useState } from "react";
import NormalProblem from "./NormalProblem";
type Problem = {
  id: number;
  title: string;
  description: string;
  testcase: any;
  difficulty: number;
};

const ProblemContainer = ({ problem }: { problem: Problem }) => {
  const [dragging, setDragging] = useState(false);
  const [leftWidth, setLeftWidth] = useState("50%");

  const handleMouseDown = () => {
    setDragging(true);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (e: any) => {
    if (!dragging) return;
    const containerRect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX;
    const newLeftWidth =
      ((mouseX - containerRect.left) / containerRect.width) * 100;
    setLeftWidth(newLeftWidth + "%");
  };

  return (
    <div
      style={{
        display: "flex",
        height: "500px",
        border: "1px solid #ccc",
        position: "relative", // 부모 컨테이너를 relative로 설정
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <section
        style={{
          width: leftWidth,
          overflow: "auto",
        }}
      >
        <NormalProblem problem={problem} />
      </section>
      <div
        style={{
          width: "4px", // 경계선의 너비
          height: "100%",
          background: "#ccc", // 경계선의 색상
          cursor: dragging ? "col-resize" : "default",
          position: "absolute", // 절대 위치로 설정
          top: 0,
          left: leftWidth,
        }}
        onMouseDown={handleMouseDown}
      />
      <section
        style={{
          flex: "1",
          overflow: "auto",
        }}
      >
        오른쪽내용
      </section>
    </div>
  );
};
export default ProblemContainer;

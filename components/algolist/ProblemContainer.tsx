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
  // 이분 드래그 기능
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
      className="relative flex w-full border border-gray-300 h-80"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <section
        className="p-2 overflow-auto"
        style={{
          width: leftWidth,
        }}
      >
        <NormalProblem problem={problem} />
      </section>
      <div
        className="absolute top-0 w-1 h-full bg-gray-300 cursor-col-resize"
        style={{
          left: leftWidth,
        }}
        onMouseDown={handleMouseDown}
      />
      <section className="flex-1 p-2 overflow-auto">오른쪽 내용</section>
    </div>
  );
};
export default ProblemContainer;

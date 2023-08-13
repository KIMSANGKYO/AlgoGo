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
      className="relative flex border border-gray-300 h-44"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <section
        className="overflow-auto"
        style={{
          width: leftWidth,
        }}
      >
        <NormalProblem problem={problem} />
      </section>
      <div
        className="absolute top-0 w-1 h-full bg-gray-300"
        style={{
          cursor: dragging ? "col-resize" : "default",
          left: leftWidth,
        }}
        onMouseDown={handleMouseDown}
      />
      <section className="flex-1 overflow-auto">오른쪽내용</section>
    </div>
  );
};
export default ProblemContainer;

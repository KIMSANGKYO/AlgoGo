"use client";

import React, { useState } from "react";

const ProblemSet = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [testcase, setTestcase] = useState({});
  const [difficulty, setDifficulty] = useState(0);

  return (
    <div>
      <h2>문제 생성</h2>
      <div className="flex flex-col">
        <input
          className="mb-4"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <textarea className="mb-4"></textarea>
        <input className="mb-4"></input>
        <input className="mb-4"></input>
      </div>
      <button>작성완료</button>
    </div>
  );
};

export default ProblemSet;

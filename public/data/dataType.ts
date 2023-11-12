import React from "react";
import { IconType } from "react-icons";
export type SubjectsType = "HTML" | "CSS" | "JavaScript" | "Accessibility" | "";
export type QuizzesType = {
  quizzes: {
    title: SubjectsType;
    icon: IconType | React.JSX.Element;
    questions: QuestionType[];
  }[];
};

export type QuestionType = {
  question: string;
  options: [string, string, string, string];
  answer: string;
};

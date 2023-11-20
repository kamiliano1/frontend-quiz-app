import React from "react";
import { IconType } from "react-icons";
export type SubjectsType = "HTML" | "CSS" | "Javascript" | "Accessibility" | "";
export type QuizzesType = {
  quizzes: SubjectType[];
};

export type SubjectType = {
  title: SubjectsType;
  icon: IconInterface;
  questions: QuestionType[];
};

export interface IconInterface {
  icon: IconType | React.JSX.ElementType;
  color: string;
  background: string;
}

export type QuestionType = {
  question: string;
  options: [string, string, string, string];
  answer: string;
};

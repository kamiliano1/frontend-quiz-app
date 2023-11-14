import React, { useEffect, useState } from "react";
import AnswersRadioInputs from "../RadioInput/AnswersRadioInputs";
import { useRecoilState, useRecoilValue } from "recoil";
import { gameStatusState } from "@/atoms/gameStatusAtom";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { quizData } from "../../../public/data/data";
import { currentThemeState } from "@/atoms/themeSwitcherAtom";
import ProgressBar from "../ProgressBar/ProgressBar";
type QuestionPageProps = {};

const QuestionPage: React.FC<QuestionPageProps> = () => {
  const activeTheme = useRecoilValue(currentThemeState);
  const [gameStatus, setGameStatus] = useRecoilState(gameStatusState);
  const [activeSubjectQuestions, setActiveSubjectQuestions] = useState(
    quizData.quizzes[0]
  );
  const [questionNumber, setQuestionNumber] = useState(0);
  const { color, background } = activeSubjectQuestions.icon;
  useEffect(() => {
    const subjectIndex = quizData.quizzes.findIndex(
      (item) => item.title === gameStatus.subject
    );
    setActiveSubjectQuestions(quizData.quizzes[subjectIndex]);
  }, [gameStatus.subject]);

  return (
    <>
      <div className="flex justify-between pb-4">
        <div className="flex gap-x-4 sm:gap-x-6 items-center">
          <div
            className={` ${color} ${background} w-[40px] h-[40px] sm:w-[56px] sm:h-[56px] rounded-lg flex items-center justify-center`}
          >
            {" "}
            <activeSubjectQuestions.icon.icon className="text-headingS sm:text-headingLRegularMobile" />
          </div>
          <p
            className={`text-headingXS sm:text-headingS
      ${activeTheme.isDarkMode ? "text-white" : "text-darkNavy"}
      `}
          >
            {gameStatus.subject}
          </p>
        </div>
        <ThemeSwitch />
      </div>
      <div className="col-start-1 row-start-2 pt-8">
        <p
          className={`text-bodySMobile sm:text-bodyS mb-3
      ${activeTheme.isDarkMode ? "text-lightBluish" : "text-greyNavy"}
      `}
        >
          Question {gameStatus.questionNumber + 1} of{" "}
          {activeSubjectQuestions.questions.length}
        </p>
        <h3
          className={` text-bodyS sm:text-headingM mb-6
        ${activeTheme.isDarkMode ? "text-white" : "text-darkNavy"}`}
        >
          {activeSubjectQuestions.questions[gameStatus.questionNumber].question}
        </h3>
        <ProgressBar progress={gameStatus.questionNumber + 5} />
        {/* <h1 className="mt-12 lg:mt-0 text-headingLRegularMobile sm:text-headingLRegular block">
    Welcome to the{" "}
    <span className="text-headingLBoldMobile sm:text-headingLBold block">
      Frontend Quiz!
    </span>
  </h1>
  <p className="mt-4 lg:mt-12 mb-10 sm:mb-16 text-bodySMobile sm:text-bodyS italic text-greyNavy">
    Pick a subject to get started.
  </p> */}
      </div>
      <AnswersRadioInputs
        question={activeSubjectQuestions.questions[gameStatus.questionNumber]}
      />
    </>
  );
};
export default QuestionPage;

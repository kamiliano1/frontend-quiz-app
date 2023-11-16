import React from "react";
import { QuizType } from "./QuizPage";
import ProgressBar from "@/layout/ProgressBar/ProgressBar";
import AnswersRadioInputs from "@/layout/RadioInput/AnswersRadioInputs";

const QuizInProgress: React.FC<QuizType> = ({
  gameStatus,
  activeSubjectQuestions,
  activeTheme,
}) => {
  return (
    <>
      <div className="col-start-1 row-start-2 pt-8">
        <p
          className={`text-bodySMobile sm:text-bodyS mb-3
  ${activeTheme.isDarkMode ? "text-lightBluish" : "text-greyNavy"}
  `}>
          Question {gameStatus.questionNumber + 1} of{" "}
          {activeSubjectQuestions.questions.length}
        </p>
        <h3
          className={` text-bodyS sm:text-headingM mb-6
    ${activeTheme.isDarkMode ? "text-white" : "text-darkNavy"}`}>
          {activeSubjectQuestions.questions[gameStatus.questionNumber].question}
        </h3>
        <ProgressBar progress={gameStatus.questionNumber + 1} />
      </div>
      <AnswersRadioInputs
        question={activeSubjectQuestions.questions[gameStatus.questionNumber]}
      />
    </>
  );
};
export default QuizInProgress;

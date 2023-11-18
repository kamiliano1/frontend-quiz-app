import React from "react";
import { QuizType } from "./QuizPage";
import ProgressBar from "@/layout/ProgressBar/ProgressBar";
import AnswersRadioInputs from "@/layout/RadioInput/AnswersRadioInputs";

const QuizInProgress: React.FC<QuizType> = ({
  gameStatus,
  activeSubjectQuestions,
  activeTheme,
}) => {
  const { questionNumber } = gameStatus;
  const subjectQuestionQuantity = activeSubjectQuestions.questions.length;
  const activatedQuestion =
    activeSubjectQuestions.questions[questionNumber].question;
  const activatedAnswers = activeSubjectQuestions.questions[questionNumber];
  return (
    <>
      <div className="col-start-1 row-start-2 pt-8 lg:pt-0 flex flex-col">
        <p
          className={`text-bodySMobile sm:text-bodyS mb-3 sm:mb-[1.6875rem]
  ${activeTheme.isDarkMode ? "text-lightBluish" : "text-greyNavy"}
  `}
        >
          Question {questionNumber + 1} of {subjectQuestionQuantity}
        </p>
        <h3
          className={` text-headingMMobile sm:text-headingM mb-6 sm:mb-10 lg:mb-40
    ${activeTheme.isDarkMode ? "text-white" : "text-darkNavy"}`}
        >
          {activatedQuestion}
        </h3>
        <ProgressBar progress={questionNumber + 1} />
      </div>
      <AnswersRadioInputs question={activatedAnswers} />
    </>
  );
};
export default QuizInProgress;

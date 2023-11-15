import React, { useEffect, useState } from "react";
import AnswersRadioInputs from "../RadioInput/AnswersRadioInputs";
import { useRecoilState, useRecoilValue } from "recoil";
import { gameStatusState } from "@/atoms/gameStatusAtom";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { quizData } from "../../../public/data/data";
import { currentThemeState } from "@/atoms/themeSwitcherAtom";
import ProgressBar from "../ProgressBar/ProgressBar";
import Button from "../Button/Button";
type QuestionPageProps = {};

const Question = () => {};

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

  const resetGame = () => {
    setGameStatus({
      subject: "",
      questionNumber: 0,
      isGameStarted: false,
      isGameFinished: false,
      userScore: 0,
    });
  };
  return (
    <>
      <div className="flex justify-between pb-4 lg:pb-0 col-span-2">
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
      {gameStatus.isGameFinished ? (
        <>
          <h2
            className={`text-headingLRegularMobile mt-8 mb-2 ${
              activeTheme.isDarkMode ? "text-white" : "text-darkNavy"
            }`}
          >
            Quiz completed
          </h2>
          <h3
            className={`text-headingLBoldMobile mb-10 ${
              activeTheme.isDarkMode ? "text-white" : "text-darkNavy"
            }`}
          >
            You scored...
          </h3>
          <div
            className={`p-8 w-full flex flex-col items-center mb-3 ${
              activeTheme.isDarkMode ? "bg-navy" : "bg-white"
            } rounded-xl`}
          >
            <div className="flex items-center mb-4">
              <div
                className={` ${color} ${background} w-[40px] h-[40px] sm:w-[56px] sm:h-[56px] rounded-lg flex items-center justify-center`}
              >
                {" "}
                <activeSubjectQuestions.icon.icon className="text-headingS sm:text-headingLRegularMobile" />
              </div>
              <p
                className={`text-headingXS sm:text-headingS ml-4 
${activeTheme.isDarkMode ? "text-white" : "text-darkNavy"}
`}
              >
                {gameStatus.subject}
              </p>
            </div>
            <p
              className={`
          ${activeTheme.isDarkMode ? "text-white" : "text-darkNavy"}
      text-displayMobile sm:text-display mb-4`}
            >
              {gameStatus.userScore}
            </p>
            <p
              className={`
          ${activeTheme.isDarkMode ? "text-lightBluish" : "text-greyNavy"}
      text-headingXS sm:text-headingS`}
            >
              out of {activeSubjectQuestions.questions.length}
            </p>
          </div>
          <Button onClick={resetGame}>Play Again</Button>
        </>
      ) : (
        <>
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
              {
                activeSubjectQuestions.questions[gameStatus.questionNumber]
                  .question
              }
            </h3>
            <ProgressBar progress={gameStatus.questionNumber + 1} />
          </div>
          <AnswersRadioInputs
            question={
              activeSubjectQuestions.questions[gameStatus.questionNumber]
            }
          />
        </>
      )}
    </>
  );
};
export default QuestionPage;

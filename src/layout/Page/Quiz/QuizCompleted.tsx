import Button from "@/layout/Button/Button";
import React, { useEffect } from "react";
import { QuizType } from "./QuizPage";

const QuizCompleted: React.FC<QuizType> = ({
  gameStatus,
  activeSubjectQuestions,
  activeTheme,
  setGameStatus,
}) => {
  const { color, background } = activeSubjectQuestions.icon;

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent): void => {
      const key = e.key;
      if (key === "Enter") resetGame();
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });
  const resetGame = () => {
    setGameStatus!({
      subject: "",
      questionNumber: 0,
      isGameStarted: false,
      isGameFinished: false,
      userScore: 0,
    });
  };
  return (
    <>
      <div className="lg:mx-0 lg:min-h-[585.33px]">
        <h2
          className={`text-headingLRegularMobile sm:text-headingLRegular mt-8 lg:mt-0 mb-2 ${
            activeTheme.isDarkMode ? "text-white" : "text-darkNavy"
          }`}
        >
          Quiz completed
        </h2>
        <h3
          className={`text-headingLBoldMobile sm:text-headingLBold mb-10 ${
            activeTheme.isDarkMode ? "text-white" : "text-darkNavy"
          }`}
        >
          You scored...
        </h3>
      </div>
      <div className="lg:mx-0">
        <div
          className={`p-8 sm:p-12 w-full flex flex-col items-center  ${
            activeTheme.isDarkMode ? "bg-navy" : "bg-white"
          } rounded-xl`}
        >
          <div className="flex items-center mb-4 sm:mb-10">
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
      text-headingXS sm:text-bodyM`}
          >
            out of {activeSubjectQuestions.questions.length}
          </p>
        </div>
        <Button cssClassName="col-start-2 mt-3 sm:mt-8" onClick={resetGame}>
          Play Again
        </Button>
      </div>
    </>
  );
};
export default QuizCompleted;

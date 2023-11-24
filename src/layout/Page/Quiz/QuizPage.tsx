import { GameStatusState, gameStatusState } from "@/atoms/gameStatusAtom";
import React, { useEffect, useState } from "react";
import { SetterOrUpdater, useRecoilState } from "recoil";
import ThemeSwitch from "../../ThemeSwitch/ThemeSwitch";

import { quizData } from "@/data/data";
import { SubjectType } from "@/data/dataType";
import QuizCompleted from "./QuizCompleted";
import QuizInProgress from "./QuizInProgress";
type QuizPageProps = {};

export type QuizType = {
  gameStatus: GameStatusState;
  activeSubjectQuestions: SubjectType;
  activeTheme: boolean;
  setGameStatus?: SetterOrUpdater<GameStatusState>;
};

const QuizPage: React.FC<QuizPageProps> = () => {
  const [gameStatus, setGameStatus] = useRecoilState(gameStatusState);
  const [activeSubjectQuestions, setActiveSubjectQuestions] = useState(
    quizData.quizzes[0]
  );
  const { color, background } = activeSubjectQuestions.icon;
  useEffect(() => {
    const subjectIndex = quizData.quizzes.findIndex(
      (item) => item.title === gameStatus.subject
    );
    setActiveSubjectQuestions(quizData.quizzes[subjectIndex]);
  }, [gameStatus.subject]);

  return (
    <>
      <div className="flex justify-between items-center pb-4 lg:pb-0 col-span-2">
        <div className="flex gap-x-4 sm:gap-x-6 items-center">
          <div
            className={`${color} ${background} w-[40px] h-[40px] sm:w-[56px] sm:h-[56px] rounded-lg flex items-center justify-center`}
          >
            {" "}
            <activeSubjectQuestions.icon.icon className="text-headingS sm:text-headingLRegularMobile" />
          </div>
          <p
            className={`text-headingXS sm:text-headingS
            ${gameStatus.isDarkMode ? "text-white" : "text-darkNavy"}
`}
          >
            {gameStatus.subject}
          </p>
        </div>
        <ThemeSwitch />
      </div>
      {gameStatus.isGameFinished ? (
        <QuizCompleted
          setGameStatus={setGameStatus}
          gameStatus={gameStatus}
          activeSubjectQuestions={activeSubjectQuestions}
          activeTheme={gameStatus.isDarkMode}
        />
      ) : (
        <QuizInProgress
          gameStatus={gameStatus}
          activeSubjectQuestions={activeSubjectQuestions}
          activeTheme={gameStatus.isDarkMode}
        />
      )}
    </>
  );
};
export default QuizPage;

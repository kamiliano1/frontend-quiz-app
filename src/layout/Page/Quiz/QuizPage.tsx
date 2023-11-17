import React, { useEffect, useState } from "react";
import AnswersRadioInputs from "../../RadioInput/AnswersRadioInputs";
import { SetterOrUpdater, useRecoilState, useRecoilValue } from "recoil";
import { GameStatusState, gameStatusState } from "@/atoms/gameStatusAtom";
import ThemeSwitch from "../../ThemeSwitch/ThemeSwitch";
// import { quizData } from "../../../../public/data/data";
import {
  CurrentThemeState,
  currentThemeState,
} from "@/atoms/themeSwitcherAtom";
import ProgressBar from "../../ProgressBar/ProgressBar";
import Button from "../../Button/Button";
import QuizCompleted from "./QuizCompleted";
import QuizInProgress from "./QuizInProgress";
import { quizData } from "@/data/data";
import { SubjectType } from "@/data/dataType";
type QuizPageProps = {};

export type QuizType = {
  gameStatus: GameStatusState;
  activeSubjectQuestions: SubjectType;
  activeTheme: CurrentThemeState;
  setGameStatus?: SetterOrUpdater<GameStatusState>;
};

const QuizPage: React.FC<QuizPageProps> = () => {
  const activeTheme = useRecoilValue(currentThemeState);
  const [gameStatus, setGameStatus] = useRecoilState(gameStatusState);
  const [activeSubjectQuestions, setActiveSubjectQuestions] = useState(
    quizData.quizzes[0]
  );
  const [zmiana, setZmiana] = useState(false);
  const { color, background } = activeSubjectQuestions.icon;
  useEffect(() => {
    const subjectIndex = quizData.quizzes.findIndex(
      (item) => item.title === gameStatus.subject
    );
    setActiveSubjectQuestions(quizData.quizzes[subjectIndex]);
  }, [gameStatus.subject]);

  return (
    <>
      <button className="absolute" onClick={() => setZmiana((prev) => !prev)}>
        Zmiana
      </button>
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
      {/* {gameStatus.isGameFinished ? ( */}
      {zmiana ? (
        <QuizCompleted
          setGameStatus={setGameStatus}
          gameStatus={gameStatus}
          activeSubjectQuestions={activeSubjectQuestions}
          activeTheme={activeTheme}
        />
      ) : (
        <QuizInProgress
          gameStatus={gameStatus}
          activeSubjectQuestions={activeSubjectQuestions}
          activeTheme={activeTheme}
        />
      )}
    </>
  );
};
export default QuizPage;

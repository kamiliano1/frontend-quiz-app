import React, { useEffect, useState } from "react";
import AnswersRadioInputs from "../RadioInput/AnswersRadioInputs";
import { useRecoilState } from "recoil";
import { gameStatusState } from "@/atoms/gameStatusAtom";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { quizData } from "../../../public/data/data";
type QuestionPageProps = {};

const QuestionPage: React.FC<QuestionPageProps> = () => {
  const [gameStatus, setGameStatus] = useRecoilState(gameStatusState);
  const [activeSubjectQuestions, setActiveSubjectQuestions] = useState(
    quizData.quizzes[0]
  );
  const [questionNumber, setQuestionNumber] = useState(0);

  useEffect(() => {
    const subjectIndex = quizData.quizzes.findIndex(
      (item) => item.title === gameStatus.subject
    );
    setActiveSubjectQuestions(quizData.quizzes[subjectIndex]);
  }, [gameStatus.subject]);
  return (
    <>
      <div className="flex justify-between">
        <div className="flex gap-x-4 sm:gap-x-6 items-center">
          <div className="bg-lightGrey w-[40px] h-[40px] sm:w-[56px] sm:h-[56px] rounded-lg ">
            {" "}
          </div>
          <p className="text-headingXS sm:text-headingS">
            {gameStatus.subject}
          </p>
        </div>
        <ThemeSwitch />
      </div>
      <div className="col-start-1 row-start-2">
        <p></p>
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
        question={activeSubjectQuestions.questions[questionNumber]}
      />
    </>
  );
};
export default QuestionPage;

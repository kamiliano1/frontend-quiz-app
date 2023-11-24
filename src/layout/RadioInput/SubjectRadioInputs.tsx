import React, { useCallback, useEffect } from "react";
import { quizData } from "@/data/data";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { useRecoilState } from "recoil";
import SubjectRadio from "./SubjectRadio";
import { gameStatusState } from "@/atoms/gameStatusAtom";
type SubjectRadioInputsProps = {};

const SubjectRadioInputs: React.FC<SubjectRadioInputsProps> = () => {
  const [gameStatus, setGameStatus] = useRecoilState(gameStatusState);
  const handleKeyPress = useCallback(
    (e: KeyboardEvent): void => {
      const key = e.key;
      if (key === "a") {
        setGameStatus((prev) => ({
          ...prev,
          subject: quizData.quizzes[0].title,
          isGameStarted: true,
        }));
      }
      if (key === "b")
        setGameStatus((prev) => ({
          ...prev,
          subject: quizData.quizzes[1].title,
          isGameStarted: true,
        }));
      if (key === "c")
        setGameStatus((prev) => ({
          ...prev,
          subject: quizData.quizzes[2].title,
          isGameStarted: true,
        }));
      if (key === "d")
        setGameStatus((prev) => ({
          ...prev,
          subject: quizData.quizzes[3].title,
          isGameStarted: true,
        }));
    },
    [setGameStatus]
  );
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);
  const printedSubjects = quizData.quizzes.map((item) => {
    return (
      <SubjectRadio
        key={item.title}
        value={item.title}
        icon={item.icon}
        activeTheme={gameStatus.isDarkMode}
      />
    );
  });
  return (
    <RadioGroup.Root
      className="flex flex-col gap-3 sm:gap-6 mb-3 lg:row-start-2 lg:col-start-2"
      aria-label="Question Subjects"
    >
      {printedSubjects}
    </RadioGroup.Root>
  );
};
export default SubjectRadioInputs;

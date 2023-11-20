import React, {
  SVGProps,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { VscError } from "react-icons/vsc";
import Button from "../Button/Button";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentThemeState } from "@/atoms/themeSwitcherAtom";
import SingleRadio from "./SingleRadio";
import { gameStatusState } from "@/atoms/gameStatusAtom";
import { QuestionType } from "@/data/dataType";
type AnswersRadioInputsProps = { question: QuestionType };

type KeyboardType = { key: KeyboardEvent };

const answerLetters = [
  "after:content-['A']",
  "after:content-['B']",
  "after:content-['C']",
  "after:content-['D']",
];

const AnswersRadioInputs: React.FC<AnswersRadioInputsProps> = ({
  question,
}) => {
  const radioInputRef = useRef<HTMLInputElement>(null);

  const [activeTheme, setActiveTheme] = useRecoilState(currentThemeState);

  const [gameStatus, setGameStatus] = useRecoilState(gameStatusState);
  const [activeRadio, setActiveRadio] = useState("");
  const [checkAnswer, setCheckAnswer] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const handleKeyPress = useCallback(
    (e: KeyboardEvent): void => {
      const key = e.key;
      if (key === "q")
        setActiveTheme((prev) => ({ isDarkMode: !prev.isDarkMode }));
      if (key === "a") {
        setActiveRadio(question.options[0]);
        setIsClicked(true);
      }
      if (key === "b") {
        setActiveRadio(question.options[1]);
        setIsClicked(true);
      }
      if (key === "c") {
        setActiveRadio(question.options[2]);
        setIsClicked(true);
      }
      if (key === "d") {
        setActiveRadio(question.options[3]);
        setIsClicked(true);
      }
      if (key === "Enter") checkAnswer ? resetQuestion() : submitKeyboard();
      radioInputRef.current?.focus();
    },
    [question.options, setActiveTheme]
  );
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  const submitKeyboard = () => {
    console.log("robi sie", isClicked);
    if (!isClicked) {
      setIsError(true);
      return;
    }
    if (checkAnswer) {
      if (activeRadio === question.answer)
        setGameStatus((prev) => ({
          ...prev,
          userScore: gameStatus.userScore + 1,
        }));
      gameStatus.questionNumber === 9
        ? setGameStatus((prev) => ({ ...prev, isGameFinished: true }))
        : setGameStatus((prev) => ({
            ...prev,
            questionNumber: gameStatus.questionNumber + 1,
          }));
      return;
    }
    setCheckAnswer(true);
  };

  const resetQuestion = () => {
    setActiveRadio("");
    setIsError(false);
    setCheckAnswer(false);
  };

  const submitAnswer = () => {
    if (!activeRadio) {
      setIsError(true);
      return;
    }
    if (checkAnswer) {
      if (activeRadio === question.answer)
        setGameStatus((prev) => ({
          ...prev,
          userScore: gameStatus.userScore + 1,
        }));
      gameStatus.questionNumber === 9
        ? setGameStatus((prev) => ({ ...prev, isGameFinished: true }))
        : setGameStatus((prev) => ({
            ...prev,
            questionNumber: gameStatus.questionNumber + 1,
          }));
      return;
    }
    setCheckAnswer(true);
  };

  useEffect(() => {
    setActiveRadio("");
    setIsError(false);
    setCheckAnswer(false);
  }, [gameStatus.questionNumber]);

  useEffect(() => {
    setIsError(false);
  }, [activeRadio]);
  const printedQuestion = question.options.map((item, id) => {
    const isCorrect = question.answer === item;
    return (
      <SingleRadio
        key={id}
        setActiveRadio={setActiveRadio}
        activeRadio={activeRadio}
        value={item}
        isCorrectAnswer={isCorrect}
        isAnswerSubmitted={checkAnswer}
        answerLetter={answerLetters[id]}
        activeTheme={activeTheme}
      />
    );
  });
  return (
    <form className="lg:row-start-2 lg:col-start-2">
      {activeRadio}
      {gameStatus.questionNumber}
      {isClicked ? "jest" : "nie"}
      <RadioGroup.Root
        className="flex flex-col gap-3 sm:gap-6 mb-3 sm:mb-8"
        aria-label="Answers"
        onValueChange={(state) => setActiveRadio(state)}
        disabled={checkAnswer}
        ref={radioInputRef}
      >
        {printedQuestion}
      </RadioGroup.Root>
      <Button type="button" onClick={submitAnswer}>
        {checkAnswer ? "Next question" : "Submit Answer"}
      </Button>
      {isError && (
        <div className="flex items-center justify-center mt-3">
          <VscError className="text-[2rem] text-red" />
          <p
            className={`text-headingXS font-normal ${
              activeTheme.isDarkMode ? "text-white" : "text-red"
            }  ml-2`}
          >
            Please select an answer
          </p>
        </div>
      )}
    </form>
  );
};
export default AnswersRadioInputs;

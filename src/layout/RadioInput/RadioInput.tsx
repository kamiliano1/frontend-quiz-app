import React, { useEffect, useState } from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { VscError } from "react-icons/vsc";
import Button from "../Button/Button";
import { useRecoilValue } from "recoil";
import { currentThemeState } from "@/atoms/themeSwitcherAtom";
type RadioInputProps = {};

const questions = {
  question: "What does HTML stand for?",
  options: [
    "Hyper Trainer Marking Language",
    "Hyper Text Marketing Language",
    "Hyper Text Markup Language",
    "Hyper Text Markup Leveler",
  ],
  answer: "Hyper Text Markup Language",
};

type RadioItemType = {
  setActiveRadio: React.Dispatch<React.SetStateAction<string>>;
  activeRadio: string;
  value: string;
  isCorrectAnswer: boolean;
  isAnswerSubmitted: boolean;
  answerLetter: string;
};

const answerLetters = [
  "after:content-['A']",
  "after:content-['B']",
  "after:content-['C']",
  "after:content-['D']",
];

const RadioItem = ({
  setActiveRadio,
  activeRadio,
  value,
  isCorrectAnswer,
  isAnswerSubmitted,
  answerLetter,
}: RadioItemType) => {
  const activeTheme = useRecoilValue(currentThemeState);
  const [isHover, setIsHover] = useState(false);
  const isActive = activeRadio === value;
  const activeAnswer = () => {
    if (!isAnswerSubmitted) {
      setActiveRadio(value);
    }
  };
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={activeAnswer}
      className={`flex items-center rounded-xl sm:rounded-[1.5rem] shadow-[0px_16px_40px_0px_rgba(143,_160,_193,_0.14)] bg-white text-darkNavy p-3 lg:py-[18px] lg:px-5 border-[3px] data-[state=checked]:bg-purple 
      ${
        activeTheme.isDarkMode
          ? "bg-navy text-white border-navy"
          : "bg-white text-darkNavy border-white"
      }
      ${isAnswerSubmitted && isCorrectAnswer && isActive && "border-green"}
      ${isAnswerSubmitted && !isCorrectAnswer && isActive && "border-red"}
        `}
    >
      <RadioGroup.Item
        className={`bg-lightGrey w-[40px] h-[40px] sm:w-[56px] sm:h-[56px] after:text-headingXS sm:after:text-headingM 
        ${answerLetter} after:text-greyNavy outline-none cursor-default rounded-lg 
        ${
          isAnswerSubmitted &&
          isCorrectAnswer &&
          isActive &&
          "bg-[rgba(38,_215,_130,_1)]"
        }
        ${isAnswerSubmitted && !isCorrectAnswer && isActive && "bg-red"}
        ${
          isHover &&
          !isActive &&
          !isAnswerSubmitted &&
          "bg-purple bg-opacity-40 after:text-purple"
        }
        ${isActive && "bg-purple after:text-white"}
        `}
        value={value}
        id={value}
      ></RadioGroup.Item>
      <label
        className="text-headingXS sm:text-headingS leading-none pl-4 sm:pl-8"
        htmlFor={value}
      >
        {value}
      </label>
      {isAnswerSubmitted && isCorrectAnswer && isActive && (
        <AiOutlineCheckCircle className="text-[2rem] text-green ml-auto" />
      )}
      {isAnswerSubmitted && isActive && !isCorrectAnswer && (
        <VscError className="text-[2rem] text-red ml-auto" />
      )}
      {isAnswerSubmitted && isCorrectAnswer && !isActive && (
        <AiOutlineCheckCircle className="text-[2rem] text-green ml-auto" />
      )}
    </div>
  );
};

const RadioInput: React.FC<RadioInputProps> = () => {
  const activeTheme = useRecoilValue(currentThemeState);
  const [activeRadio, setActiveRadio] = useState("");
  const [checkAnswer, setCheckAnswer] = useState(false);
  const [isError, setIsError] = useState(false);
  const submitAnswer = () => {
    if (!activeRadio) {
      setIsError(true);
      return;
    }
    setCheckAnswer(true);
  };
  useEffect(() => {
    setIsError(false);
  }, [activeRadio]);
  const printedQuestion = questions.options.map((item, id) => {
    const isCorrect = questions.answer === item;
    return (
      <RadioItem
        key={id}
        setActiveRadio={setActiveRadio}
        activeRadio={activeRadio}
        value={item}
        isCorrectAnswer={isCorrect}
        isAnswerSubmitted={checkAnswer}
        answerLetter={answerLetters[id]}
      />
    );
  });
  return (
    <form>
      <RadioGroup.Root
        className="flex flex-col gap-3 mb-3"
        aria-label="View density"
        onValueChange={(state) => setActiveRadio(state)}
        defaultValue={activeRadio}
        disabled={checkAnswer}
      >
        {printedQuestion}
      </RadioGroup.Root>
      <Button type="button" onClick={submitAnswer}>
        Submit Answer
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
export default RadioInput;

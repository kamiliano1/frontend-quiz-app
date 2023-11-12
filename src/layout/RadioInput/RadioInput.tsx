import React, { SVGProps, useEffect, useState } from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { VscError } from "react-icons/vsc";
import Button from "../Button/Button";
import { useRecoilValue } from "recoil";
import { currentThemeState } from "@/atoms/themeSwitcherAtom";
import SingleRadio from "./SingleRadio";
import { LuPaintbrush2 } from "react-icons/lu";
import { RiJavascriptLine } from "react-icons/ri";
import { AccessibilityIcon } from "../../../public/icons/AccessibilityIcon";
type RadioInputProps = {};

const HtmlHint = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="#e44f26"
        d="m10.04 18.875l-7.991-4.116v-1.531l7.991-4.117v2.381l-4.988 2.501l4.988 2.5v2.382zm7.273.195H15.03l4.543-11.803h2.299L17.313 19.07zm4.647-.198v-2.38l5.023-2.499l-5.023-2.499V9.113l7.991 4.099v1.562l-7.991 4.098z"
      ></path>
    </svg>
  );
};

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

const answerLetters = [
  "after:content-['A']",
  "after:content-['B']",
  "after:content-['C']",
  "after:content-['D']",
];

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
      <HtmlHint className="text-[5rem]" />
      <p className="text-[rgba(255,_126,_53,_1)] text-[28px]">{`</>`}</p>
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

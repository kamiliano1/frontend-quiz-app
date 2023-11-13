import React, { SVGProps, useEffect, useState } from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { VscError } from "react-icons/vsc";
import Button from "../Button/Button";
import { useRecoilValue } from "recoil";
import { currentThemeState } from "@/atoms/themeSwitcherAtom";
import SingleRadio from "./SingleRadio";
import { LuPaintbrush2 } from "react-icons/lu";
import { RiJavascriptLine } from "react-icons/ri";

import { HtmlIcon } from "../../../public/images/icon-html";
import { AccessibilityIcon } from "../../../public/images/icon-accessibility";
import { QuestionType } from "../../../public/data/dataType";
type AnswersRadioInputsProps = { question: QuestionType };

const answerLetters = [
  "after:content-['A']",
  "after:content-['B']",
  "after:content-['C']",
  "after:content-['D']",
];

const AnswersRadioInputs: React.FC<AnswersRadioInputsProps> = ({
  question,
}) => {
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
      <RadioGroup.Root
        className="flex flex-col gap-3 sm:gap-6 mb-3 sm:mb-8"
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
export default AnswersRadioInputs;

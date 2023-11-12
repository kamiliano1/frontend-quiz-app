import React, { useState } from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { CurrentThemeState } from "@/atoms/themeSwitcherAtom";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { VscError } from "react-icons/vsc";
type SingleRadioProps = {
  setActiveRadio: React.Dispatch<React.SetStateAction<string>>;
  activeRadio: string;
  value: string;
  isCorrectAnswer: boolean;
  isAnswerSubmitted: boolean;
  answerLetter: string;
  activeTheme: CurrentThemeState;
};

const SingleRadio: React.FC<SingleRadioProps> = ({
  setActiveRadio,
  activeRadio,
  value,
  isCorrectAnswer,
  isAnswerSubmitted,
  answerLetter,
  activeTheme,
}) => {
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
      className={`flex items-center cursor-pointer rounded-xl sm:rounded-[1.5rem] shadow-[0px_16px_40px_0px_rgba(143,_160,_193,_0.14)] text-darkNavy p-3 lg:py-[18px] lg:px-5 border-[3px] data-[state=checked]:bg-purple 
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
export default SingleRadio;

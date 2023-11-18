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
      className={`grid grid-cols-[40px,_auto,_32px] sm:grid-cols-[56px,_auto] items-center 
      ${!isAnswerSubmitted && "cursor-pointer"} 
      rounded-xl sm:rounded-[1.5rem] text-darkNavy px-3 py-[9.34px] lg:py-[18px] lg:px-5 border-[3px] data-[state=checked]:bg-purple 
        ${
          activeTheme.isDarkMode
            ? "bg-navy text-white border-navy"
            : "bg-white text-darkNavy border-white"
        }
        ${!isAnswerSubmitted && isActive && "border-purple"}
        ${
          isAnswerSubmitted &&
          isCorrectAnswer &&
          isActive &&
          "border-[rgba(38,_215,_130,_1)]"
        }
        ${isAnswerSubmitted && !isCorrectAnswer && isActive && "border-red"}
          `}
    >
      <RadioGroup.Item
        className={`bg-lightGrey w-[40px] h-[40px] sm:w-[56px] sm:h-[56px] after:text-headingXS sm:after:text-headingM 
          ${answerLetter} after:text-greyNavy outline-none 
          ${!isAnswerSubmitted && "cursor-pointer"} 
          rounded-lg 
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
            "bg-[#F6E7FF] after:text-purple"
          }
          ${isActive && "bg-purple after:text-white"}
          `}
        value={value}
        id={value}
      ></RadioGroup.Item>
      <label
        className={`text-headingXS sm:text-headingS leading-none pl-4 sm:pl-8 cursor-pointer
        ${!isAnswerSubmitted && "cursor-pointer"} 
        `}
        htmlFor={value}
      >
        {value}
      </label>
      {isAnswerSubmitted && isCorrectAnswer && isActive && (
        <AiOutlineCheckCircle className="text-[2rem] text-green ml-auto col-start-3" />
      )}
      {isAnswerSubmitted && isActive && !isCorrectAnswer && (
        <VscError className="text-[2rem] text-red ml-auto col-start-3" />
      )}
      {isAnswerSubmitted && isCorrectAnswer && !isActive && (
        <AiOutlineCheckCircle className="text-[2rem] text-green ml-auto col-start-3" />
      )}
    </div>
  );
};
export default SingleRadio;

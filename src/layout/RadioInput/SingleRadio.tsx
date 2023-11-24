import React, { useEffect, useState } from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { VscError } from "react-icons/vsc";
type SingleRadioProps = {
  setActiveRadio: React.Dispatch<React.SetStateAction<string>>;
  activeRadio: string;
  value: string;
  isCorrectAnswer: boolean;
  isAnswerSubmitted: boolean;
  answerLetter: string;
  activeTheme: boolean;
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
  const [radioBorder, setRadioBorder] = useState("");
  const activeAnswer = () => {
    if (!isAnswerSubmitted) {
      setActiveRadio(value);
    }
  };
  useEffect(() => {
    if (activeTheme) setRadioBorder("border-navy");
    if (!activeTheme) setRadioBorder("border-white");
    if (isActive && !isAnswerSubmitted) setRadioBorder("border-purple");
    if (isAnswerSubmitted && isCorrectAnswer && isActive)
      setRadioBorder("border-[rgba(38,_215,_130,_1)]");
    if (isAnswerSubmitted && !isCorrectAnswer && isActive)
      setRadioBorder("border-red");
  }, [activeTheme, isActive, isAnswerSubmitted, isCorrectAnswer]);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={activeAnswer}
      className={`grid grid-cols-[40px,_auto,_32px] sm:grid-cols-[56px,_auto] items-center 
      ${!isAnswerSubmitted && "cursor-pointer"} 
      rounded-xl sm:rounded-[1.5rem] text-darkNavy px-3 py-[9.34px] lg:py-[18px] lg:px-5 border-[3px] data-[state=checked]:bg-purple 
      ${radioBorder}
        ${activeTheme ? "bg-navy text-white" : "bg-white text-darkNavy"}
          `}
    >
      <RadioGroup.Item
        title={value}
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

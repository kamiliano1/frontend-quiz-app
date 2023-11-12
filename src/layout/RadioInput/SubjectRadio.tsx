import React, { useState } from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { CurrentThemeState } from "@/atoms/themeSwitcherAtom";
import { IconType } from "react-icons";
import { LuPaintbrush2 } from "react-icons/lu";
import { gameStatusState } from "@/atoms/gameStatusAtom";
import { useRecoilState } from "recoil";
import { SubjectsType } from "../../../public/data/dataType";
type SubjectRadioProps = {
  value: SubjectsType;
  answerLetter: IconType | React.JSX.Element;
  activeTheme: CurrentThemeState;
};

const SubjectRadio: React.FC<SubjectRadioProps> = ({
  value,
  answerLetter,
  activeTheme,
}) => {
  const [isHover, setIsHover] = useState(false);
  const [gameStatus, setGameStatus] = useRecoilState(gameStatusState);
  const startQuiz = () => {
    setGameStatus((prev) => ({ ...prev, subject: value }));
  };

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={startQuiz}
      className={`flex items-center cursor-pointer rounded-xl sm:rounded-[1.5rem] shadow-[0px_16px_40px_0px_rgba(143,_160,_193,_0.14)] text-darkNavy px-3 py-2.5 lg:py-[18px] lg:px-5 border-[3px] data-[state=checked]:bg-purple 
        ${
          activeTheme.isDarkMode
            ? "bg-navy text-white border-navy"
            : "bg-white text-darkNavy border-white"
        }
          `}
    >
      <RadioGroup.Item
        className={`bg-lightGrey w-[40px] h-[40px] sm:w-[56px] sm:h-[56px] after:text-headingXS sm:after:text-headingM 
           after:text-greyNavy outline-none cursor-default rounded-lg 
          ${isHover && "bg-purple bg-opacity-40 after:text-purple"}
          `}
        value={value}
        id={value}
      >
        <LuPaintbrush2 />
      </RadioGroup.Item>
      <label
        className="text-headingXS sm:text-headingS leading-none pl-4 sm:pl-8"
        htmlFor={value}
      >
        {value}
      </label>
    </div>
  );
};
export default SubjectRadio;

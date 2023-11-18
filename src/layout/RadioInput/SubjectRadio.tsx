import React, { useState } from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { CurrentThemeState } from "@/atoms/themeSwitcherAtom";
import { gameStatusState } from "@/atoms/gameStatusAtom";
import { useRecoilState } from "recoil";
import { IconInterface, SubjectsType } from "@/data/dataType";

type SubjectRadioProps = {
  value: SubjectsType;
  icon: IconInterface;
  activeTheme: CurrentThemeState;
};
const SubjectRadio: React.FC<SubjectRadioProps> = ({
  value,
  icon,
  activeTheme,
}) => {
  const [isHover, setIsHover] = useState(false);
  const [gameStatus, setGameStatus] = useRecoilState(gameStatusState);
  const startQuiz = () => {
    setGameStatus((prev) => ({ ...prev, subject: value, isGameStarted: true }));
  };
  const SubjectIcon = () => {
    return (
      <icon.icon
        className={`text-headingS sm:text-headingLRegularMobile ${icon.color} `}
      />
    );
  };
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={startQuiz}
      className={`flex items-center cursor-pointer rounded-xl sm:rounded-[1.5rem] text-darkNavy px-3 py-[9.34px] lg:py-[1.08375rem] lg:px-5 border-[3px] data-[state=checked]:bg-purple 
        ${
          activeTheme.isDarkMode
            ? "bg-navy text-white border-navy"
            : "bg-white text-darkNavy border-white"
        }
          `}
    >
      <RadioGroup.Item
        className={`w-[40px] h-[40px] sm:w-[56px] sm:h-[56px] cursor-pointer after:text-headingXS sm:after:text-headingM flex items-center justify-center 
        //  ${icon.background} 
        bg-opacity-10
         ${isHover ? "bg-opacity-40" : icon.background}
           after:text-greyNavy outline-none rounded-lg 
          `}
        value={value}
        id={value}
      >
        <SubjectIcon />
      </RadioGroup.Item>
      <label
        className="text-headingXS cursor-pointer sm:text-headingS leading-none pl-4 sm:pl-8"
        htmlFor={value}
      >
        {value}
      </label>
    </div>
  );
};
export default SubjectRadio;

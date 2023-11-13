import React from "react";
import { quizData } from "../../../public/data/data";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { currentThemeState } from "@/atoms/themeSwitcherAtom";
import { useRecoilValue } from "recoil";
import SubjectRadio from "./SubjectRadio";
type SubjectRadioInputsProps = {};

const SubjectRadioInputs: React.FC<SubjectRadioInputsProps> = () => {
  const activeTheme = useRecoilValue(currentThemeState);
  const printedSubjects = quizData.quizzes.map((item) => {
    return (
      <SubjectRadio
        key={item.title}
        value={item.title}
        answerLetter={item.icon}
        activeTheme={activeTheme}
      />
    );
  });
  return (
    <RadioGroup.Root
      className="flex flex-col gap-3 sm:gap-6 mb-3 lg:row-start-2 lg:col-start-2"
      aria-label="View density"
    >
      {printedSubjects}
    </RadioGroup.Root>
  );
};
export default SubjectRadioInputs;

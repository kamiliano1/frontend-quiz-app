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
    <div>
      <RadioGroup.Root
        className="flex flex-col gap-3 mb-3"
        aria-label="View density"
      >
        {printedSubjects}
      </RadioGroup.Root>
    </div>
  );
};
export default SubjectRadioInputs;

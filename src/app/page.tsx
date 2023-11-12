"use client";
import Button from "@/layout/Button/Button";
import ProgressBar from "@/layout/ProgressBar/ProgressBar";
import RadioInput from "@/layout/RadioInput/AnswersRadioInputs";
import SubjectRadioInputs from "@/layout/RadioInput/SubjectRadioInputs";
import ThemeSwitch from "@/layout/ThemeSwitch/ThemeSwitch";
import Image from "next/image";
import { quizData } from "../../public/data/data";
import { gameStatusState } from "@/atoms/gameStatusAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentThemeState } from "@/atoms/themeSwitcherAtom";
import { PatternBackgroundMobileDark } from "../../public/images/pattern-background-mobile-dark";
import { PatternBackgroundMobileLight } from "../../public/images/pattern-background-mobile-light";
export default function Home() {
  const [gameStatus, setGameStatus] = useRecoilState(gameStatusState);
  const activeTheme = useRecoilValue(currentThemeState);
  return (
    <main
      className={`${
        activeTheme.isDarkMode
          ? "bg-darkNavy text-white"
          : "bg-lightGrey text-darkNavy"
      } `}
    >
      {activeTheme.isDarkMode ? (
        <PatternBackgroundMobileDark className="absolute" />
      ) : (
        <PatternBackgroundMobileLight className="absolute" />
      )}
      <div className="z-[1] relative px-6 py-4">
        <ThemeSwitch />
        <h1 className="mt-12 text-headingLRegularMobile sm:text-headingLRegular">
          Welcome to the{" "}
          <span className="text-headingLBoldMobile sm:text-headingLBold">
            Frontend Quiz!
          </span>
        </h1>
        <p
          className={`mt-4 mb-10 text-bodySMobile sm:text-bodyS italic text-greyNavy
        ${activeTheme.isDarkMode ? "text-lightBluish" : "text-darkNavy"}
        `}
        >
          Pick a subject to get started.
        </p>
        {/* <Button>Button</Button>
          <ProgressBar /> */}
        <SubjectRadioInputs />
      </div>
    </main>
  );
}

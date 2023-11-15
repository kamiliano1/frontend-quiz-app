"use client";
import Button from "@/layout/Button/Button";
import ProgressBar from "@/layout/ProgressBar/ProgressBar";
import RadioInput from "@/layout/RadioInput/AnswersRadioInputs";
import SubjectRadioInputs from "@/layout/RadioInput/SubjectRadioInputs";
import ThemeSwitch from "@/layout/ThemeSwitch/ThemeSwitch";
import { gameStatusState } from "@/atoms/gameStatusAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentThemeState } from "@/atoms/themeSwitcherAtom";

import BackgroundPattern from "@/layout/BackgroundPattern/BackgroundPattern";
import WelcomePage from "@/layout/Page/WelcomePage";
import QuestionPage from "@/layout/Page/QuestionPage";
import { useState } from "react";
export default function Home() {
  const [gameStatus, setGameStatus] = useRecoilState(gameStatusState);
  const activeTheme = useRecoilValue(currentThemeState);
  const [zmianaStrony, setZmianaStrony] = useState(false);
  return (
    <>
      <button onClick={() => setZmianaStrony((prev) => !prev)}>Zmiana</button>
      <main
        className={`relative overflow-x-hidden sm:pb-52 lg:pb-0 h-[100vh] lg:flex lg:items-center justify-center ${
          activeTheme.isDarkMode
            ? "bg-darkNavy text-white"
            : "bg-lightGrey text-darkNavy"
        }`}
      >
        <div className="lg:h-[960px] lg:w-[1440px]">
          <div className="z-[1] relative px-6 py-4 sm:px-16 sm:py-14 lg:py-24 lg:px-32 lg:grid lg:grid-rows-[141px,_auto] lg:gap-x-10 lg:grid-cols-2 max-w-[1440px]">
            {gameStatus.isGameStarted ? <QuestionPage /> : <WelcomePage />}
            <BackgroundPattern />
            {/* {zmianaStrony ? <QuestionPage /> : <WelcomePage />} */}
            {/* <QuestionPage /> */}
          </div>
        </div>
      </main>
    </>
  );
}

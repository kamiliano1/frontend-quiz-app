"use client";
import { gameStatusState } from "@/atoms/gameStatusAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentThemeState } from "@/atoms/themeSwitcherAtom";

import BackgroundPattern from "@/layout/BackgroundPattern/BackgroundPattern";
import WelcomePage from "@/layout/Page/WelcomePage";
import QuizPage from "@/layout/Page/Quiz/QuizPage";
import { useState } from "react";
export default function Home() {
  const [gameStatus, setGameStatus] = useRecoilState(gameStatusState);
  const activeTheme = useRecoilValue(currentThemeState);
  return (
    <main
      className={`relative overflow-x-hidden sm:pb-52 lg:pb-0 h-[100vh] 
       ${
         activeTheme.isDarkMode
           ? "bg-darkNavy text-white"
           : "bg-lightGrey text-darkNavy"
       }`}
      // className={`relative overflow-x-hidden sm:pb-52 lg:pb-0 h-[100vh]
      // lg:flex lg:items-center justify-center
      //  ${
      //   activeTheme.isDarkMode
      //     ? "bg-darkNavy text-white"
      //     : "bg-lightGrey text-darkNavy"
      // }`}
    >
      <div className="lg:max-h-[960px] lg:w-[1440px] mx-auto">
        {/* <div className="lg:max-h-[960px] lg:w-[1440px]"> */}
        <div
          className="z-[1] relative px-6 py-4 sm:py-14
            lg:py-[clamp(3.5rem,_15vh,_6rem)]a lg:py-0
          lg:px-[clamp(4rem,_8.1vw,_8rem)] sm:px-[clamp(1.5rem,_8.4vw,_4rem)]
          lg:grid lg:grid-rows-[clamp(2rem,18vh,171px),_auto] lg:gap-x-10 lg:grid-cols-[minmax(400px,_453px),_minmax(400px,_564px)] lg:justify-between max-w-[1440px] lg:grid-rows-[clamp(2rem,24vh,224px),_auto]s"
        >
          {gameStatus.isGameStarted ? <QuizPage /> : <WelcomePage />}
          <BackgroundPattern />
        </div>
      </div>
    </main>
  );
}

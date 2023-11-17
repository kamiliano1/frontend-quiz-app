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
  const [zmianaStrony, setZmianaStrony] = useState(false);
  return (
    <>
      {/* <button onClick={() => setZmianaStrony((prev) => !prev)}>Zmiana</button> */}
      <main
        className={`relative overflow-x-hidden sm:pb-52 lg:pb-0 h-[100vh] lg:flex lg:items-center justify-center ${
          activeTheme.isDarkMode
            ? "bg-darkNavy text-white"
            : "bg-lightGrey text-darkNavy"
        }`}
      >
        <div className="lg:max-h-[960px] lg:w-[1440px]">
          <div
            className="z-[1] relative px-6 py-4 sm:py-14
            lg:py-[clamp(3.5rem,_15vh,_6rem)]
          lg:px-[clamp(4rem,_8.1vw,_8rem)] sm:px-[clamp(1.5rem,_8.4vw,_4rem)]
          lg:grid lg:grid-rows-[clamp(2rem,18vh,171px),_auto] lg:gap-x-10 lg:grid-cols-2 max-w-[1440px]"
          >
            {gameStatus.isGameStarted ? <QuizPage /> : <WelcomePage />}
            {/* <BackgroundPattern /> */}
            {/* {zmianaStrony ? <QuestionPage /> : <WelcomePage />} */}
            {/* <QuestionPage /> */}
          </div>
        </div>
      </main>
    </>
  );
}

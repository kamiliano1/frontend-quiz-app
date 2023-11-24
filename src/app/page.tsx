"use client";
import { gameStatusState } from "@/atoms/gameStatusAtom";
import { useRecoilState } from "recoil";
import BackgroundPattern from "@/layout/BackgroundPattern/BackgroundPattern";
import WelcomePage from "@/layout/Page/WelcomePage";
import QuizPage from "@/layout/Page/Quiz/QuizPage";
import { useEffect } from "react";
export default function Home() {
  const [gameStatus, setGameStatus] = useRecoilState(gameStatusState);
  useEffect(() => {
    const submitKeyboard = (e: KeyboardEvent): void => {
      const key = e.key;
      if (key === "q")
        setGameStatus((prev) => ({ ...prev, isDarkMode: !prev.isDarkMode }));
    };
    window.addEventListener("keydown", submitKeyboard);
    return () => {
      window.removeEventListener("keydown", submitKeyboard);
    };
  }, [setGameStatus]);
  return (
    <main
      className={`relative overflow-x-hidden sm:pb-52 lg:pb-0 h-[100vh]
      lg:flex lg:items-center lg:justify-center
       ${
         gameStatus.isDarkMode
           ? "bg-darkNavy text-white"
           : "bg-lightGrey text-darkNavy"
       }`}
    >
      <div className="lg:h-[960px] lg:w-[1440px]">
        <div
          className="z-[1] relative px-6 py-4 sm:py-14
          lg:py-0
          lg:px-[clamp(4rem,_9.75vw,_8.75rem)] sm:px-[clamp(1.5rem,_8.4vw,_4rem)]
          lg:grid  lg:gap-x-10 
          lg:grid-cols-[minmax(400px,_453px),_minmax(400px,_564px)] lg:justify-between max-w-[1440px]
          lg:grid-rows-[252px,_auto]
       "
        >
          {gameStatus.isGameStarted ? <QuizPage /> : <WelcomePage />}
          <BackgroundPattern />
        </div>
      </div>
    </main>
  );
}

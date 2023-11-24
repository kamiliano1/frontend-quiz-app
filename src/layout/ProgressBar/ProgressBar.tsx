import { gameStatusState } from "@/atoms/gameStatusAtom";
import * as Progress from "@radix-ui/react-progress";
import React from "react";
import { useRecoilValue } from "recoil";
type ProgressBarProps = { progress: number };

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const gameStatus = useRecoilValue(gameStatusState);
  return (
    <div
      className={`rounded-full p-1 mb-10 sm:mb-16 ${
        gameStatus.isDarkMode ? "bg-navy" : "bg-white"
      }`}
    >
      <Progress.Root
        max={10}
        aria-label="questions progress bar"
        className={`relative overflow-hidden rounded-full w-full h-[8px]`}
        style={{
          transform: "translateZ(0)",
        }}
        value={progress}
      >
        <Progress.Indicator
          className={`bg-purple rounded-[104px] h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]`}
          style={{
            transform: `translateX(-${100 - progress * 10}%)`,
          }}
        />
      </Progress.Root>
    </div>
  );
};
export default ProgressBar;

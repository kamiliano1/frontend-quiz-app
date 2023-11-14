import React, { useEffect, useState } from "react";
import * as Progress from "@radix-ui/react-progress";
import { currentThemeState } from "@/atoms/themeSwitcherAtom";
import { useRecoilValue } from "recoil";
type ProgressBarProps = { progress: number };

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const activeTheme = useRecoilValue(currentThemeState);
  return (
    <div
      className={`rounded-full p-1 mb-6 ${
        activeTheme.isDarkMode ? "bg-navy" : "bg-white"
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

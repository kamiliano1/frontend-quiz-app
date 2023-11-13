import React from "react";
import useWindowWith from "@/hooks/useWindowWidth";
import { PatternBackgroundDesktopLight } from "../../../public/images/pattern-background-desktop-light";
import { PatternBackgroundDesktopDark } from "../../../public/images/pattern-background-desktop-dark";
import { PatternBackgroundTabletLight } from "../../../public/images/pattern-background-tablet-light";
import { PatternBackgroundTabletDark } from "../../../public/images/pattern-background-tablet-dark";
import { PatternBackgroundMobileLight } from "../../../public/images/pattern-background-mobile-light";
import { PatternBackgroundMobileDark } from "../../../public/images/pattern-background-mobile-dark";
import { currentThemeState } from "@/atoms/themeSwitcherAtom";
import { useRecoilValue } from "recoil";
type BackgroundPatternProps = {};

const BackgroundPattern: React.FC<BackgroundPatternProps> = () => {
  const windowWidth = useWindowWith();
  const activeTheme = useRecoilValue(currentThemeState);

  if (windowWidth < 400) {
    if (activeTheme.isDarkMode) {
      return <PatternBackgroundMobileDark className="absolute top-0  z-[-1]" />;
    }
    return <PatternBackgroundMobileLight className="absolute top-0  z-[-1]" />;
  } else if (windowWidth < 900) {
    if (activeTheme.isDarkMode) {
      return <PatternBackgroundTabletDark className="absolute top-0  z-[-1]" />;
    }
    return <PatternBackgroundTabletLight className="absolute top-0  z-[-1]" />;
  } else if (activeTheme.isDarkMode)
    return <PatternBackgroundDesktopDark className="absolute top-0 z-[-1]" />;
  return <PatternBackgroundDesktopLight className="absolute top-0 z-[-1]" />;
};
export default BackgroundPattern;

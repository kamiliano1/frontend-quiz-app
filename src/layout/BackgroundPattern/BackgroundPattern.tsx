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
  const cssClass = "absolute top-0 z-[-1] left-0";
  if (windowWidth < 639) {
    if (activeTheme.isDarkMode) {
      return <PatternBackgroundMobileDark className={cssClass} />;
    }
    return <PatternBackgroundMobileLight className={cssClass} />;
  } else if (windowWidth < 1024) {
    if (activeTheme.isDarkMode) {
      return <PatternBackgroundTabletDark className={cssClass} />;
    }
    return <PatternBackgroundTabletLight className={cssClass} />;
  } else if (activeTheme.isDarkMode)
    return <PatternBackgroundDesktopDark className={cssClass} />;
  return <PatternBackgroundDesktopLight className={cssClass} />;
};
export default BackgroundPattern;

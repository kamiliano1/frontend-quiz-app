import React from "react";
import SubjectRadioInputs from "@/layout/RadioInput/SubjectRadioInputs";
import { currentThemeState } from "@/atoms/themeSwitcherAtom";
import { useRecoilValue } from "recoil";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

type WelcomePageProps = {};

const WelcomePage: React.FC<WelcomePageProps> = () => {
  const activeTheme = useRecoilValue(currentThemeState);
  return (
    <>
      <ThemeSwitch />
      <div className="col-start-1 row-start-2">
        <h1 className="mt-12 lg:mt-0 text-headingLRegularMobile sm:text-headingLRegular block">
          Welcome to the{" "}
          <span className="text-headingLBoldMobile sm:text-headingLBold block">
            Frontend Quiz!
          </span>
        </h1>
        <p
          className={`mt-4 lg:mt-12 mb-10 sm:mb-16 text-bodySMobile sm:text-bodyS italic text-greyNavy
          ${activeTheme.isDarkMode ? "text-lightBluish" : "text-darkNavy"}
          `}
        >
          Pick a subject to get started.
        </p>
      </div>
      <SubjectRadioInputs />
    </>
  );
};
export default WelcomePage;

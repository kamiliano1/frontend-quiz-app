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
      <div className="col-span-2 my-auto">
        <ThemeSwitch />
      </div>
      <div className="col-start-1 row-start-2 lg:min-h-[585.33px]">
        <h1 className="mt-12 lg:mt-0 text-headingLRegularMobile sm:text-headingLRegular block">
          Welcome to the{" "}
          <span className="text-headingLBoldMobile sm:text-headingLBold block mt-2">
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

// import React from "react";
import { currentThemeState } from "@/atoms/themeSwitcherAtom";
import * as Switch from "@radix-ui/react-switch";
import { BiSun } from "react-icons/bi";
import { GoMoon } from "react-icons/go";
import { useRecoilState } from "recoil";
type ThemeSwitchProps = {};

const ThemeSwitch: React.FC<ThemeSwitchProps> = () => {
  const [activeTheme, setActiveTheme] = useRecoilState(currentThemeState);
  return (
    <div
      className={`flex items-center ${
        activeTheme.isDarkMode ? "text-white" : "text-greyNavy"
      }`}
    >
      <label className="" htmlFor="theme-switcher">
        <BiSun />
      </label>
      <Switch.Root
        value={activeTheme.isDarkMode ? "on" : "off"}
        title="theme-switcher"
        className="bg-purple w-[48px] mx-4 h-[28px] rounded-full relative  data-[state=checked]:bg-black outline-none cursor-default"
        id="theme-switcher"
        onCheckedChange={(state) => setActiveTheme({ isDarkMode: state })}
      >
        <Switch.Thumb className="ml-[2px] mb-[1px]  block w-5 h-5 bg-white rounded-full  transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[22px]" />
      </Switch.Root>
      <label className="" htmlFor="theme-switcher">
        <GoMoon />
      </label>
    </div>
  );
};
export default ThemeSwitch;

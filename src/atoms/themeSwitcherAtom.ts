import { atom } from "recoil";

export type CurrentThemeState = {
  isDarkMode: boolean;
};

const defaultCurrentThemeState: CurrentThemeState = {
  isDarkMode: true,
};

export const currentThemeState = atom<CurrentThemeState>({
  key: "currentThemeState",
  default: defaultCurrentThemeState,
});

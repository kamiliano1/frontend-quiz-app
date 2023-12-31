import { gameStatusState } from "@/atoms/gameStatusAtom";
import * as Switch from "@radix-ui/react-switch";
import { BiSun } from "react-icons/bi";
import { GoMoon } from "react-icons/go";
import { useRecoilState } from "recoil";
type ThemeSwitchProps = {};

const ThemeSwitch: React.FC<ThemeSwitchProps> = () => {
  const [gameStatus, setGameStatus] = useRecoilState(gameStatusState);
  return (
    <div
      className={`flex items-center justify-end lg:row-start-1 lg:col-start-2  cursor-pointer h-[40px] sm:h-[56px] w-min ml-auto
      ${gameStatus.isDarkMode ? "text-white" : "text-greyNavy"}`}
    >
      <label htmlFor="theme-switcher">
        <BiSun className="sm:text-[1.5rem]" />
      </label>
      <Switch.Root
        checked={gameStatus.isDarkMode}
        title="theme-switcher"
        className="bg-purple w-[32px] sm:w-[48px] mx-2 sm:mx-4 h-[20px] sm:h-[28px] rounded-full relative data-[state=checked]:bg-black outline-none cursor-pointer"
        id="theme-switcher"
        onCheckedChange={(state) =>
          setGameStatus((prev) => ({ ...prev, isDarkMode: state }))
        }
      >
        <Switch.Thumb className="ml-[2px] sm:mb-[1px] block w-3 sm:w-5 h-3 sm:h-5 bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[15px] sm:data-[state=checked]:translate-x-[22px]" />
      </Switch.Root>
      <label htmlFor="theme-switcher">
        <GoMoon className="sm:text-[1.5rem]" />
      </label>
    </div>
  );
};
export default ThemeSwitch;

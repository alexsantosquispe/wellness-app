import { THEME_TYPES, useTheme } from "use-theme-hook";

import { MoonIcon } from "../../icons/MoonIcon";
import { SunIcon } from "../../icons/SunIcon";

export const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === THEME_TYPES.DARK ? THEME_TYPES.LIGHT : THEME_TYPES.DARK;
    setTheme(newTheme);
  };

  return (
    <button
      className="flex h-6 w-6 items-center justify-center hover:cursor-pointer"
      onClick={toggleTheme}
    >
      {theme === THEME_TYPES.DARK ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

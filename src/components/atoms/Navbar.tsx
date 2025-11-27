import { FAVORITES_COUNT } from "../../constants";
import { HearthIcon } from "../../icons/HearthIcon";
import { ThemeButton } from "./ThemeButton";
import { getFavorites } from "../../store/selectors";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const count = useSelector(getFavorites)?.length || FAVORITES_COUNT;

  return (
    <header className="fixed top-0 z-30 flex h-16 w-full items-center justify-center border-b border-neutral-100 dark:border-neutral-700 bg-white/50 dark:bg-black/50 backdrop-blur-md">
      <div className="flex w-full flex-1 items-center justify-between px-4 text-emerald-800 dark:text-emerald-600 md:max-w-360 md:px-8">
        <p className="text-xl font-bold">
          Wellness<strong className="px-1 text-6xl leading-0">.</strong>
          IA
        </p>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold">{count}</span>
            <HearthIcon isFilled={true} />
            <span className="text-xs font-semibold">Favorites</span>
          </div>

          <ThemeButton />
        </div>
      </div>
    </header>
  );
};

import type { FavoriteItem } from "../../models/types";
import { HearthIcon } from "../../icons/HearthIcon";
import { twMerge } from "tailwind-merge";

interface FavoriteButtonProps {
  onClick: (item: FavoriteItem) => void;
  id: string;
  title: string;
  ariaLabel: string;
  isFavorite?: boolean;
  className?: string;
  iconClassName?: string;
}

export const FavoriteButton = ({
  onClick,
  id,
  title,
  ariaLabel,
  isFavorite = false,
  className,
  iconClassName
}: FavoriteButtonProps) => {
  const toggleFavoriteHandler = () => {
    onClick({ id, title });
  };

  return (
    <button
      type="button"
      onClick={toggleFavoriteHandler}
      aria-label={ariaLabel}
      className={twMerge("size-5 hover:cursor-pointer", className)}
    >
      <HearthIcon isFilled={isFavorite} className={iconClassName} />
    </button>
  );
};

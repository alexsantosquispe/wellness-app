import type { FavoriteItem } from "../../models/types";
import { HearthIcon } from "../../icons/HearthIcon";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface FavoriteButtonProps {
  onClick: (item: FavoriteItem) => void;
  id: string;
  title: string;
  isFavorite?: boolean;
  className?: string;
}

export const FavoriteButton = ({
  onClick,
  id,
  title,
  isFavorite = false,
  className
}: FavoriteButtonProps) => {
  const toggleFavoriteHandler = () => {
    onClick({ id, title });
  };

  return (
    <button
      type="button"
      onClick={toggleFavoriteHandler}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      className={twMerge(
        "size-5 hover:cursor-pointer",
        clsx({ "text-emerald-700": isFavorite }, className)
      )}
    >
      <HearthIcon
        isFilled={isFavorite}
        className={twMerge(clsx({ "text-emerald-700": isFavorite }))}
      />
    </button>
  );
};

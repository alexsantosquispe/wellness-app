import { HearthIcon } from "../../icons/HearthIcon";
import { twMerge } from "tailwind-merge";

interface FavoriteButtonProps {
  onClick: () => void;
  ariaLabel: string;
  isFavorite?: boolean;
  className?: string;
  iconClassName?: string;
}

export const FavoriteButton = ({
  onClick,
  ariaLabel,
  isFavorite = false,
  className,
  iconClassName
}: FavoriteButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={twMerge("size-5 hover:cursor-pointer", className)}
    >
      <HearthIcon isFilled={isFavorite} className={iconClassName} />
    </button>
  );
};

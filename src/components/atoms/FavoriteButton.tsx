import { HearthIcon } from "../../icons/HearthIcon";
import { twMerge } from "tailwind-merge";

interface FavoriteButtonProps {
  onClick: () => void;
  ariaLabel: string;
  className?: string;
}

export const FavoriteButton = ({
  onClick,
  ariaLabel,
  className
}: FavoriteButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={twMerge("size-5", className)}
    >
      <HearthIcon />
    </button>
  );
};

import { Suspense, lazy, memo, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FavoriteButton } from "./FavoriteButton";
import type { SessionType } from "../../models/types";
import { getFavorites } from "../../store/selectors";
import { toggleFavorite } from "../../store/slices/favoritesSlice";

const LazySessionDetailsModal = lazy(
  () => import("../molecules/SessionDetailsModal")
);

const SessionCard = ({
  id,
  title,
  description,
  category,
  duration,
  image
}: SessionType) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const favorites = useSelector(getFavorites);

  const isFavorite = useMemo(
    () => favorites.some((item) => item.id === id),
    [favorites, id]
  );

  const onSelectFavorite = () => {
    dispatch(toggleFavorite({ id, title }));
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex flex-col overflow-hidden rounded-xl border border-neutral-300 dark:border-neutral-700">
        <div className="aspect-ratio-4/3 w-full overflow-hidden bg-neutral-100">
          <img
            src={image}
            alt={title}
            className="h-full max-h-52 w-full object-cover transition-transform duration-300 hover:scale-110"
            loading="lazy"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between gap-8 p-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between gap-4">
              <div onClick={openModal} className="w-full py-1">
                <h2 className="text-lg font-medium hover:cursor-pointer hover:text-emerald-700 hover:underline">
                  {title}
                </h2>
              </div>

              <FavoriteButton
                id={id}
                title={title}
                onClick={onSelectFavorite}
                isFavorite={isFavorite}
              />
            </div>

            <p className="line-clamp-2 text-sm text-neutral-600 dark:text-neutral-200">
              {description}
            </p>
          </div>

          <div className="flex items-end justify-between text-xs font-semibold uppercase">
            <span className="rounded-full bg-emerald-700 dark:bg-emerald-600 px-2 py-1 text-white">
              {category}
            </span>
            <span className="rounded-full border border-neutral-500 dark:border-neutral-200 px-2 py-1 text-neutral-500 dark:text-neutral-200">
              {duration} min
            </span>
          </div>
        </div>
      </div>

      {isOpen && (
        <Suspense>
          <LazySessionDetailsModal
            sessionId={id}
            onClose={closeModal}
            isFavorite={isFavorite}
            onToggleFavorite={onSelectFavorite}
          />
        </Suspense>
      )}
    </>
  );
};

export default memo(SessionCard);

import { FavoriteButton } from "./FavoriteButton";
import { SessionDetailsModal } from "../molecules/SessionDetailsModal";
import type { SessionType } from "../../models/types";
import { useState } from "react";

const SessionCard = ({
  id,
  title,
  description,
  category,
  duration,
  image
}: SessionType) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex flex-col overflow-hidden rounded-xl border border-neutral-300">
        <div className="aspect-ratio-4/3 w-full overflow-hidden bg-neutral-100">
          <img
            src={image}
            alt={title}
            className="h-full max-h-52 w-full object-cover transition-transform duration-300 hover:scale-110"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col justify-between gap-8 p-4">
          <div className="flex h-[130px] flex-col gap-2">
            <div className="flex items-center justify-between">
              <a
                onClick={openModal}
                className="hover:cursor-pointer hover:text-emerald-700 hover:underline"
              >
                <h2 className="text-lg font-medium">{title}</h2>
              </a>
              <FavoriteButton onClick={() => {}} ariaLabel="Favorite" />
            </div>
            <p className="line-clamp-3 text-sm text-neutral-600">
              {description}
            </p>
          </div>

          <div className="flex items-center justify-between text-xs font-semibold uppercase">
            <span className="rounded-full bg-emerald-700 px-2 py-1 text-white">
              {category}
            </span>
            <span className="rounded-full border border-neutral-500 px-2 py-1 text-neutral-500">
              {duration} min
            </span>
          </div>
        </div>
      </div>

      {isOpen && <SessionDetailsModal sessionId={id} onClose={closeModal} />}
    </>
  );
};

export default SessionCard;

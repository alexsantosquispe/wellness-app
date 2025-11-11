import { FavoriteButton } from "../atoms/FavoriteButton";
import { Modal } from "../atoms/Modal";
import type { SessionType } from "../../models/types";
import { Spinner } from "../atoms/Spinner";
import { getSessionById } from "../../service/api";
import { useQuery } from "@tanstack/react-query";

interface SessionDetailsModalProps {
  sessionId: string;
  onClose: () => void;
}

const SessionDetailsModal = ({
  sessionId,
  onClose
}: SessionDetailsModalProps) => {
  const { data, isLoading } = useQuery<SessionType>({
    queryKey: ["sessions", sessionId],
    queryFn: () => getSessionById(sessionId)
  });

  return (
    <Modal onClose={onClose}>
      {isLoading && <Spinner />}

      {!isLoading && data && (
        <div className="flex flex-col gap-4 p-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-medium">{data.title}</h2>
            <p className="text-neutral-600">{data.description}</p>
          </div>

          <div className="aspect-ratio-4/3 relative w-full rounded-lg bg-neutral-100">
            <img
              src={data.image}
              alt={data.title}
              className="h-full max-h-80 w-full rounded-md object-cover"
              loading="lazy"
            />
            <FavoriteButton
              ariaLabel="Favorite"
              className="absolute top-4 right-4 text-white shadow-lg"
              iconClassName="size-7 shadow-lg"
              onClick={() => {}}
            />
          </div>

          <div className="flex items-center justify-between text-xs font-semibold uppercase">
            <span className="rounded-full bg-emerald-700 px-2 py-1 text-white">
              {data.category}
            </span>
            <span className="rounded-full border border-neutral-500 px-2 py-1 text-neutral-500">
              {data.duration} min
            </span>
          </div>

          <p className="text-xs font-semibold text-neutral-600 uppercase">
            Instructor: <span className="text-black/80">{data.instructor}</span>
          </p>
        </div>
      )}
    </Modal>
  );
};

export default SessionDetailsModal;

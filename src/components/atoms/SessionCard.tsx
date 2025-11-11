import type { SessionType } from "../../models/types";

const SessionCard = ({
  id,
  title,
  description,
  category,
  duration,
  image
}: SessionType) => {
  return (
    <div
      key={id}
      className="flex flex-col overflow-hidden rounded-xl border border-neutral-300"
    >
      <div className="aspect-ratio-4/3 w-full overflow-hidden bg-neutral-100">
        <img
          src={image}
          alt={title}
          className="h-full max-h-56 w-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col gap-2 p-4">
        <h2 className="text-lg font-semibold text-neutral-900">{title}</h2>
        <p className="line-clamp-3 text-sm text-neutral-600">{description}</p>

        <div className="mt-2 flex items-center justify-between text-sm text-neutral-500">
          <span className="capitalize">{category}</span>
          <span>{duration} min</span>
        </div>
      </div>
    </div>
  );
};

export default SessionCard;

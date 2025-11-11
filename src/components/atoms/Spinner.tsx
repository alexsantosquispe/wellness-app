import { LoadingIcon } from "../../icons/LoadingIcon";

export const Spinner = () => {
  return (
    <div className="flex h-full w-full items-center justify-center md:h-[65vh]">
      <LoadingIcon />
    </div>
  );
};

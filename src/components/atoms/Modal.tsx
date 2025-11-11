import { CloseIcon } from "../../icons/CloseIcon";
import type { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

export const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex w-full items-center justify-center bg-black/50 backdrop-blur-md">
      <div className="flex w-full flex-col rounded-xl border border-neutral-200 bg-white p-2 md:w-160">
        <button
          type="button"
          className="self-end rounded-lg p-1 hover:cursor-pointer hover:bg-emerald-600 hover:text-white"
          onClick={onClose}
        >
          <CloseIcon />
        </button>

        <div>{children}</div>
      </div>
    </div>
  );
};

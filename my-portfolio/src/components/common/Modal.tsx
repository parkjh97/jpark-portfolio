import { useEffect } from "react";

import "./Modal.css";

interface ModalProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  width?: "default" | "wide";
}

export function Modal({ title, onClose, children, width = "default" }: ModalProps) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label={title}>
      <div className={`modal ${width === "wide" ? "modal--wide" : ""}`}>
        <header className="modal__header">
          <h3>{title}</h3>
          <button type="button" className="modal__close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </header>
        <div className="modal__content">{children}</div>
      </div>
      <button
        type="button"
        className="modal-overlay__backdrop"
        aria-hidden="true"
        onClick={onClose}
      />
    </div>
  );
}

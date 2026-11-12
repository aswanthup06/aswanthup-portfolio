"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";

export type ModalId = "contact" | "chat" | "theme" | "mobile-menu";

export interface ModalContextType {
  activeModal: ModalId | null;
  isModalOpen: (id: ModalId) => boolean;
  openModal: (id: ModalId) => void;
  closeModal: (id?: ModalId) => void;
  toggleModal: (id: ModalId) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

/**
 * Coordinates all modals, popovers, and drawers across the application so at most one is open at a time.
 */
export function ModalProvider({ children }: { children: ReactNode }) {
  const [activeModal, setActiveModal] = useState<ModalId | null>(null);

  const isModalOpen = useCallback(
    (id: ModalId) => activeModal === id,
    [activeModal]
  );

  const openModal = useCallback((id: ModalId) => {
    setActiveModal(id);
  }, []);

  const closeModal = useCallback((id?: ModalId) => {
    setActiveModal((prev) => (id === undefined || prev === id ? null : prev));
  }, []);

  const toggleModal = useCallback((id: ModalId) => {
    setActiveModal((prev) => (prev === id ? null : id));
  }, []);

  return (
    <ModalContext.Provider
      value={{ activeModal, isModalOpen, openModal, closeModal, toggleModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

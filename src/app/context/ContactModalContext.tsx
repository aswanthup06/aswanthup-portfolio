'use client';

import { createContext, useCallback, useContext, type ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { useModal } from './ModalContext';

const ContactModal = dynamic(() => import('../components/ContactModal'), {
  ssr: false,
});

export interface ContactModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const { isModalOpen, openModal: openAppModal, closeModal: closeAppModal } = useModal();
  const isOpen = isModalOpen('contact');

  const openModal = useCallback(() => openAppModal('contact'), [openAppModal]);
  const closeModal = useCallback(() => closeAppModal('contact'), [closeAppModal]);

  return (
    <ContactModalContext.Provider
      value={{ isOpen, openModal, closeModal }}
    >
      {children}
      <ContactModal />
    </ContactModalContext.Provider>
  );
}

export const useContactModal = (): ContactModalContextType => {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error('useContactModal must be used within a ContactModalProvider');
  }
  return context;
};

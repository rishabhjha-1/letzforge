"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type ContactContextType = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const ContactContext = createContext<ContactContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export function ContactProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ContactContext.Provider
      value={{ isOpen, openModal: () => setIsOpen(true), closeModal: () => setIsOpen(false) }}
    >
      {children}
    </ContactContext.Provider>
  );
}

export function useContact() {
  return useContext(ContactContext);
}

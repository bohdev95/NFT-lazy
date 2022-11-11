import { useState } from "react";

export const useFooter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openFooter = () => setIsOpen(true);
  const closeFooter = () => setIsOpen(false);
  return {
    isOpen,
    openFooter,
    closeFooter,
  };
};

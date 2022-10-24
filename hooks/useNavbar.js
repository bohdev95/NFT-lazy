import { useState } from "react";

export const useNavbar = () => {
  const [isHidden, setIsHidden] = useState(true);
  const toggleNavbar = () => {
    setIsHidden((curr) => !curr);
  };
  const openNavbar = () => setIsHidden(false);
  const closeNavbar = () => setIsHidden(true);

  return {
    isHidden,
    toggleNavbar: () => toggleNavbar(),
    openNavbar: () => openNavbar(),
    closeNavbar: () => closeNavbar(),
  };
};

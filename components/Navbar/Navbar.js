import { useClickOutside } from "@/hooks/useClickOutside";
import { useNavbar } from "@/hooks/useNavbar";
import styles from "@/styles/navbar.module.scss";
import { useRef } from "react";
import LanguageButton from "../LanguageButton/LanguageButton";
const Navbar = () => {
  const { isHidden, toggleNavbar, closeNavbar } = useNavbar();
  let ref = useRef(null);
  useClickOutside(ref, () => closeNavbar());
  return (
    <>
      <div
        className={[
          styles.modal_full,
          isHidden ? styles.modal_hidden : styles.modal_showed,
        ].join(" ")}
      ></div>
      <div
        className={[
          styles.navbar,
          isHidden ? styles.nav_hidden : styles.nav_showed,
        ].join(" ")}
      >
        <img src="/Union.svg" alt="head" />
        <img src="/Union_nose.svg" alt="nose" className={styles.union_nose} />
        <div className={styles.nav_bnts_container} ref={ref}>
          <button>INTRO</button>
          <button>NFT</button>
          <button>APP</button>
          <button>ROADMAP</button>
          <button>PARTNERS</button>
          <button>TEAM</button>
          <button>FAQ</button>
        </div>
      </div>

      <div className={styles.nav_handler_container}>
        <LanguageButton />
        <button onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </>
  );
};

export default Navbar;

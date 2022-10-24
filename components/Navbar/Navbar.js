import { useNavbar } from "@/hooks/useNavbar";
import styles from "@/styles/navbar.module.scss";
const Navbar = () => {
  const { isHidden, toggleNavbar } = useNavbar();
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
        <div className={styles.nav_bnts_container}>
          <button onClick={toggleNavbar}>INTRO</button>
          <button onClick={toggleNavbar}>NFT</button>
          <button onClick={toggleNavbar}>APP</button>
          <button onClick={toggleNavbar}>ROADMAP</button>
          <button onClick={toggleNavbar}>PARTNERS</button>
          <button onClick={toggleNavbar}>TEAM</button>
          <button onClick={toggleNavbar}>FAQ</button>
        </div>
      </div>

      <div className={styles.nav_handler_container}>
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

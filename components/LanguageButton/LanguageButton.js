import { useClickOutside } from "@/hooks/useClickOutside";
import styles from "@/styles/languageButton.module.scss";
import { useRef, useState } from "react";
const LanguageButton = () => {
  const languages = ["English", "한국어", "日本語"];
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  let ref = useRef(null);
  useClickOutside(ref, () => setIsOpenMenu(false));
  const toggleMenuHandler = () => setIsOpenMenu((curr) => !curr);

  const selectLang = (id) => {
    setSelectedLang(languages[id]);
    setIsOpenMenu(false);
  };

  return (
    <div className={styles.language_btn} ref={ref}>
      <button
        onClick={toggleMenuHandler}
        className={`${isOpenMenu ? "green" : ""}`}
      >
        <span>
          <img src="/icons/language.svg" alt="language" />
        </span>
      </button>
      <div
        className={`${styles.language_selector_wrapper} ${
          isOpenMenu ? `${styles.l_active}` : `${styles.l_hidden}`
        }`}
      >
        {languages.map((l, idx) => (
          <button
            key={idx}
            className={`${
              l === selectedLang
                ? `${styles.col_purple}`
                : `${styles.col_black}`
            }`}
            onClick={() => selectLang(idx)}
          >
            {l}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageButton;

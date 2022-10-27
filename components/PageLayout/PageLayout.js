import styles from "@/styles/pageLayout.module.scss";
const PageLayout = ({ children }) => {
  return <div className={styles.page_layout}>{children}</div>;
};

export default PageLayout;

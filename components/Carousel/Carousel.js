import React, { useEffect, useState } from "react";
import styles from "./carousel.module.scss";

const Carousel = ({ children }) => {
  return <div className={styles.carousel}>{children}</div>;
};

export default Carousel;

import React, { useEffect, useRef } from "react";
import { words } from "./data";

import styles from "./Loader.module.scss";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Loader = () => {
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const progressNumberRef = useRef(null);
  const workGroupsRef = useRef(null);

  useGSAP(() => {
    gsap.to(workGroupsRef.current, {
      yPercent: -80,
      duration: 5,
      ease: "power4.inOut",
    });

    gsap.to(progressRef.current, {
      scaleX: 1,
      duration: 5,
      ease: "power3.inOut",
    });
  }, []);
  return (
    <div className={styles.loader__wrapper} ref={loaderRef}>
      <div className={styles.loader__progressWrapper}>
        <div className={styles.loader__progress} ref={progressRef}></div>
        <span className={styles.loader__progressNumber} ref={progressNumberRef}>
          0
        </span>
      </div>
      <div className={styles.loader}>
        <div className={styles.loader__words}>
          <div className={styles.loader__overlay}></div>
          <div className={styles.loader__wordsGroup} ref={workGroupsRef}>
            {words.map((word, index) => {
              return (
                <span key={index} className={styles.loader__word}>
                  {word}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
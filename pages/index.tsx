import type { NextPage } from "next";
import styles from "./index.module.css";
const MacBookAir2: NextPage = () => {
  return (
    <div className={styles.macbookAir2}>
      <main className={styles.mainDiv}>
        <section className={styles.leftContent}>
          <img className={styles.logoIcon} alt="" src="/logo.svg" />
          <div className={styles.mainContent}>
            <div className={styles.heading}>
              <h1 className={styles.heading1}>Hello!</h1>
            </div>
            <div className={styles.description}>
              <p className={styles.description1}>
                I'm Tony Sebastian, a product designer based in Bangalore,
                India. I've always been drawn to things that are not just
                beautiful but also engaging and useful. My current focus is to
                create interactive experiences at the intersection of art and
                design.
              </p>
            </div>
          </div>
          <div className={styles.contactDetails}>
            <div className={styles.subTextDiv}>
              <p className={styles.subDescription}>
                Want to solve a problem together?
              </p>
            </div>
            <div className={styles.socialLinks}>
              <a
                className={styles.brandsDribbble}
                href="https://dribbble.com/tonyzebastian"
                target="_blank"
              >
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              </a>
              <a
                className={styles.brandsFigma}
                href="https://www.figma.com/@tonyzebastian"
                target="_blank"
              >
                <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
              </a>
              <a
                className={styles.brandsDribbble}
                href="https://www.linkedin.com/in/tonyzebastian/"
                target="_blank"
              >
                <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
              </a>
              <a
                className={styles.brandsDribbble}
                href="https://twitter.com/tonyzebastian"
                target="_blank"
              >
                <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
              </a>
              <a
                className={styles.brandsDribbble}
                href="mailto:tonyzebastian@gmail.com?subject=Hello there!"
              >
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              </a>
            </div>
          </div>
        </section>
        <section className={styles.rightIllustration}>
          <img
            className={styles.illustration1Icon}
            alt=""
            src="/illustration-1.svg"
          />
        </section>
      </main>
    </div>
  );
};

export default MacBookAir2;

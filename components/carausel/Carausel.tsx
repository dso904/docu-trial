import styles from "./Carausel.module.css";
import Image from "next/image";
import { useEffect } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

const Carausel = () => {
  useEffect(() => {
    const next = document.querySelector("." + styles.next);
    const prev = document.querySelector("." + styles.prev);
    const carausel = document.querySelector("." + styles.carausel__wrapper);

    if (next && prev && carausel) {
      next.addEventListener("click", () => {
        carausel.scrollTo({
          left: carausel.scrollLeft + 500,
          behavior: "smooth",
        });
      });
      prev.addEventListener("click", () => {
        carausel.scrollTo({
          left: carausel.scrollLeft - 500,
          behavior: "smooth",
        });
      });
    }
  }, []);

  return (
    <div className={styles.carausel}>
  <div className={styles.prev}>&#10094;</div>
  <ScrollContainer className={styles.carausel__wrapper}>
    {[3, 7, 11, 12, 13, 15].map((goalNumber) => (
      <div className={styles.carausel__item} key={goalNumber}>
        <a
          href={`https://sdgs.un.org/goals/goal${goalNumber}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.carausel__imWrapper}>
            <Image
              src={`/images/sdgs/sdg${goalNumber}.png`}
              alt={`SDG -> ${goalNumber}`}
              width={1024}
              height={320}
              quality={100}
              className={styles.carausel__image}
              priority
            />
          </div>
        </a>
      </div>
    ))}
  </ScrollContainer>
  <div className={styles.next}>&#10095;</div>
</div>

  );
};

export default Carausel;

import { useRouter } from "next/router";
import styles from "./Footer.module.css";

export default function Footer(prop: { scrollTop: any }) {
  const router = useRouter();
  return (
    <>
      <div className={styles.lane}>
        <div className={styles.inner}>
          <>
            <p className={styles.proj}>©️ {new Date().getFullYear()} Team Hackminors</p>
          </>
          <>
            <ul>
              <li>
                <a href="mailto:teamhackminors@gmail.com">Contact Us</a>
              </li>
            </ul>
          </>
        </div>
      </div>
      <div
        id="daFooter"
        className={styles.footer}
        onClick={prop.scrollTop}
      ></div>
    </>
  );
}

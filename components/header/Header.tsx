import styles from "./Header.module.css";
import Pass from "@/components/pass/Pass";
import { showPlayer } from "../player/Player";

export default function Header() {
  function showMenu() {

  }
  return (
    <div className={styles.header}>
      <div className={styles.inner}>
        <Pass href="/">
          <h1 className={styles.headerTitle}>Carbon Manager</h1>
        </Pass>
        <div className={styles.options}>
          <Pass href="/">
            <span>Home</span>
          </Pass>
          <Pass href="/features">
            <span>Features</span>
          </Pass>
          <Pass href="/goals">
            <span>Goals</span>
          </Pass>
          
        </div>
        <div className={styles.action}>
          <span className={styles.actionButton} onClick={showPlayer} btn-action="player">
            Watch Video
            <span>→</span>
          </span>
          <span className={styles.actionButton} onClick={showMenu} btn-action="menu">
            Menu
            <span>→</span>
          </span>
        </div>
      </div>
    </div>
  );
}

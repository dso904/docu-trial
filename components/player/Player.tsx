import { gsap } from "gsap";
import React, { useEffect } from "react";
import styles from "./Player.module.css";

const PLAYER_SHOW_EVENT = "player_show";
const PLAYER_HIDE_EVENT = "player_hide";

function showPlayer() {
  const player = document.querySelector(`.${styles.player}`);
  if (player) {
    gsap.set(player, { opacity: 0, display: "block", scale: 0.8 });
    gsap.to(player, { opacity: 1, duration: 0.5, scale: 1 });
    window.dispatchEvent(new Event(PLAYER_SHOW_EVENT));
  }
}

function hidePlayer() {
  const player = document.querySelector(`.${styles.player}`);
  if (player) {
    gsap.set(player, { opacity: 1, display: "block", scale: 1 });
    gsap.to(player, {
      opacity: 0,
      duration: 0.5,
      scale: 0.8,
      onComplete: () => {
        gsap.set(player, { display: "none", scale: 1 });
        const fok = document.querySelector(`.${styles.fok}`);
        if (fok) {
          fok.innerHTML = `<iframe
            src="https://www.youtube.com/embed/ENhW6AN1RK0?si=cVX0FnaymRS19weF"
            width="640"
            height="349"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            id="vid"
          ></iframe>`;
        }
        window.dispatchEvent(new Event(PLAYER_HIDE_EVENT));
      },
    });
  }
}

function Player() {
  return (
    <div className={styles.player}>
      <button id="btn" onClick={hidePlayer}>
        ←
      </button>
      <div className={styles.fok}>
        <iframe
          src="https://www.youtube.com/embed/ENhW6AN1RK0?si=cVX0FnaymRS19weF"
          width="640"
          height="349"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          id="vid"
        ></iframe>
      </div>
    </div>
  );
}

export default Player;
export { showPlayer, hidePlayer, PLAYER_SHOW_EVENT, PLAYER_HIDE_EVENT };

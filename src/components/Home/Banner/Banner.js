import React from "react";
import styles from "./Banner.module.css";
import bannerImg from "../../../images/banner.png";
import bannerBg from "../../../images/banner-bg.svg";

const Banner = () => {
   // TOP BANNER
   return (
      <section className={styles.topBannerSection}>
         <div className={styles.topBanner}>
            <div className={styles.bannerInfo}>
               <h1>Find your best watch Today !</h1>
               <p>
                  Hey ! Welcome here. Are you looking for smart watch ?
                  Congratulations ! You are one the right place. You will get all the
                  watch information you need here
               </p>
               <button className={styles.liveDemoButton}>Live Demo</button>
            </div>
            <div className={styles.bannerImageArea}>
               <img
                  className={styles.bannerImage}
                  src={bannerImg}
                  alt="Banner-Img"
               />
               <img
                  className={styles.bannerBg}
                  src={bannerBg}
                  alt="Banner Background"
               />
            </div>
         </div>
      </section>
   );
};

export default Banner;

import React from "react";
import styles from "./Review.module.css";

const Review = ({ review }) => {
   const { name, profile, message, reviewCount, rating } = review;
   return (
      <div className={styles.reviewContainer}>
         <div className={styles.cart}>
            <div className={styles.cartHeader}>
               <div className={styles.profileImage}>
                    <img src={profile} alt="user-profile" />
               </div>
               <div className={styles.profileInfo}>
                   <h3>{name}</h3>
                   <p>{reviewCount} reviews</p>
               </div>
            </div>
            <div className={styles.cartBody}>
               <div className={styles.ratings}>
                   rating: {rating}
               </div>
               <p>{message}</p>
            </div>
         </div>
      </div>
   );
};

export default Review;

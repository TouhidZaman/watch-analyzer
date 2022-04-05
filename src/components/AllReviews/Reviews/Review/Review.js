import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";
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
               <div className={styles.rating}>
                  <Rating
                     initialRating={rating}
                     emptySymbol={<FontAwesomeIcon icon={faStar} />}
                     fullSymbol={
                        <FontAwesomeIcon
                           style={{ color: "goldenrod" }}
                           icon={faStar}
                        />
                     }
                     readonly
                  ></Rating>
                  <span className={styles.ratingCount}>{rating}</span>
               </div>
               <p>{message}</p>
            </div>
         </div>
      </div>
   );
};

export default Review;

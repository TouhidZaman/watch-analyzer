import React from "react";
import Review from "./Review/Review";
import styles from "./Reviews.module.css";

const Reviews = ({ reviews }) => {
   return (
      <div className={styles.reviewsContainer}>
         {reviews.map((review) => (
            <Review key={review.id} review={review} />
         ))}
      </div>
   );
};

export default Reviews;

import React from "react";
import useReviews from "../../hooks/useReviews";
import styles from './Reviews.module.css';

const Reviews = () => {
   const [reviews, setReviews] = useReviews();
   return (
      <div className={styles.reviews}>
         <h2>What Our customers say !</h2>
         <p> total reviews: 
            {
               reviews.length
            }
         </p>
      </div>
   );
};

export default Reviews;

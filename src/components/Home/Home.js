import React from "react";
import { useNavigate } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import Reviews from "../Reviews/Reviews";
import Banner from "./Banner/Banner";
import styles from "./Home.module.css";

const Home = () => {
   const [reviews] = useReviews(); //Getting reviews using custom hook
   const navigate = useNavigate();

   //Navigating to all reviews page
   const seeMoreReviewsHandler = () => {
      const path = `/all-reviews`;
      navigate(path);
   };
   return (
      <div className={styles.home}>
         <Banner />
         <div className={styles.reviewsSection}>
            <h2>Showing Customers Reviews (3)</h2>
            <Reviews reviews={reviews.slice(0, 3)} />
            <div className={styles.reviewsAction}>
               <button
                  className={styles.seeMoreReviewsButton}
                  onClick={seeMoreReviewsHandler}
               >
                  <p>See more reviews</p>
                  {/* <FontAwesomeIcon icon={faSearch} /> */}
               </button>
            </div>
         </div>
      </div>
   );
};

export default Home;

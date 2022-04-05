import React from 'react';
import useReviews from '../../hooks/useReviews';
import Reviews from '../Reviews/Reviews';
import styles from './AllReviews.module.css';

const AllReviews = () => {
   const [reviews] = useReviews(); //Custom hook

    return (
        <div className={styles.allReviews}>
            <h2>What Our customers says...!</h2>
            <Reviews reviews={reviews} />
        </div>
    );
};

export default AllReviews;
import { useEffect, useState } from 'react';

//Custom hook for handling reviews data
const useReviews = () => {
    const [reviews, setReviews] = useState([])

    //Getting customer reviews data
    useEffect(() => {
        fetch("reviews-data.json")
        .then(response => response.json())
        .then(data => setReviews(data))
    }, []);

    return [reviews, setReviews];
};

export default useReviews;
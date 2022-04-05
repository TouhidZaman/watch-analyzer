import React from 'react';
import styles from './NotFound.module.css'

const NotFound = () => {
    return (
        <div className={styles.notFound}>
            <h2>Ops ! the page you are looking for is not found</h2>
        </div>
    );
};

export default NotFound;
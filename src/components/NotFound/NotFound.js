import React from 'react';
import styles from './NotFound.module.css'

const NotFound = () => {
    return (
        <div className={styles.notFound}>
            <h1>Ops ! the page you are looking for is not found</h1>
        </div>
    );
};

export default NotFound;
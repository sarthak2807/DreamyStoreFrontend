import React from 'react';
import styles from './Empty.module.css';

const Empty = () => {
    return (
        <div className={styles.container}>
            No Matching Products Found
        </div>
    );
};

export default Empty;
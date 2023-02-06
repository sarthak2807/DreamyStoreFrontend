import React from 'react';
import styles from './GridCard.module.css';

const GridCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src='https://cdn.pixabay.com/photo/2017/03/19/01/43/living-room-2155376_960_720.jpg' alt='error' className={styles.image}></img>
            </div>
            <div className={styles.imageDetails}>
                <div className={styles.name}>Image 1</div>
                <div className={styles.price}>$2431.0</div>
            </div>
        </div>
    );
};

export default GridCard;
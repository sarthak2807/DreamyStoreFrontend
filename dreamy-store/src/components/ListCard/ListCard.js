import React from 'react';
import styles from './ListCard.module.css';

const ListCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src='https://cdn.pixabay.com/photo/2017/03/19/01/43/living-room-2155376_960_720.jpg' alt='error' className={styles.image}></img>
            </div>
            <div className={styles.detailsContainer}>
                <div className={styles.name}>Modern Poster</div>
                <div className={styles.price}>$2610.0</div>
                <div className={styles.details}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</div>
                <div className={styles.detailsBtn}>DETAILS</div>
            </div>
        </div>
    );
};

export default ListCard;
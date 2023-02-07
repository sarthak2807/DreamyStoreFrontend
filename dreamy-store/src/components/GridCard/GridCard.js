import React from 'react';
import styles from './GridCard.module.css';

const GridCard = (props) => {
    const product = props.product;

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={product.images[0]} alt='error' className={styles.image}></img>
            </div>
            <div className={styles.imageDetails}>
                <div className={styles.name}>{product.name}</div>
                <div className={styles.price}>${product.price}.00</div>
            </div>
        </div>
    );
};

export default GridCard;
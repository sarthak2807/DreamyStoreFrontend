import React from 'react';
import styles from './GridCard.module.css';
import { useNavigate } from 'react-router-dom';

const GridCard = (props) => {
    const product = props.product;
    const navigate = useNavigate();

    return (
        <div className={styles.container} onClick={()=>navigate(`/${product._id}`)}>
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
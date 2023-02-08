import React from 'react';
import styles from './ListCard.module.css';
import { useNavigate } from 'react-router-dom';

const ListCard = (props) => {
    const product = props.product;
    const slicedText = product.about.slice(0,120) + "...";
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={product.images[0]} alt='error' className={styles.image}></img>
            </div>
            <div className={styles.detailsContainer}>
                <div className={styles.name}>{product.name}</div>
                <div className={styles.price}>${product.price}.00</div>
                <div className={styles.details}>{slicedText}</div>
                <div className={styles.detailsBtn} onClick={()=>navigate(`/${product._id}`)}>DETAILS</div>
            </div>
        </div>
    );
};

export default ListCard;
import React from 'react';
import styles from './ProductDetailsContainer.module.css';

const ProductDetailsContainer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.upper}>
                <div className={styles.backBtn}>BACK TO PRODUCTS</div>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.left}>

                </div>
                <div className={styles.right}>
                    <div className={styles.contentsContainer}>
                        <div className={styles.name}>Modern Poster</div>
                        <div className={styles.review}>100 customer users</div>
                        <div className={styles.price}>$324.56</div>
                        <div className={styles.details}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                        <div className={styles.pairs}>
                            <div className={styles.type}>Available:</div>
                            <div className={styles.info}>In Stock</div>
                        </div>
                        <div className={styles.pairs}>
                            <div className={styles.type}>SKU:</div>
                            <div className={styles.info}>shgRhhsRsjjs</div>
                        </div>
                        <div className={styles.pairs}>
                            <div className={styles.type}>Brand:</div>
                            <div className={styles.info}>Samsung</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsContainer;
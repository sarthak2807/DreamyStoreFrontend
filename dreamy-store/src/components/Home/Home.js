import React from 'react';
import styles from './Home.module.css';
import ProductList from '../ProductList/ProductList';

const Home = () => {
    return (
        <div className={styles.parent}>
            <div className={styles.navbar}>
                <div className={styles.breadCrumbContainer}>
                    Home / Products
                </div>
            </div>
            <div className={styles.contentsContainer}>
                <ProductList />
            </div>
        </div>
    );
};

export default Home;
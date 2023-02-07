import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import ProductList from '../ProductList/ProductList';
// import ProductDetailsContainer from '../CardDetailsContainer/ProductDetailsContainer';
import { getAllCategories } from '../api/discover';

const Home = () => {
    const [categoryList, setCategoryList] = useState([]);

    async function fetchCategories(){
        const list = await getAllCategories();
        setCategoryList(list);
    }

    useEffect(()=>{
        fetchCategories();
    },[]);

    return (
        <div className={styles.parent}>
            <div className={styles.navbar}>
                <div className={styles.breadCrumbContainer}>
                    Home / Products
                </div>
            </div>
            <div className={styles.contentsContainer}>
                <ProductList categoryList={categoryList} />
                {/* <ProductDetailsContainer /> */}
            </div>
        </div>
    );
};

export default Home;
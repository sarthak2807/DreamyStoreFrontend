import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import ProductList from '../ProductList/ProductList';
import ProductDetailsContainer from '../CardDetailsContainer/ProductDetailsContainer';
import { getAllCategories, getColors, getCompanies, getAllProducts } from '../api/discover';

const Home = () => {
    const [categoryList, setCategoryList] = useState([]);
    const [colorList, setColorList] = useState([]);
    const [companyList, setCompanyList] = useState([]);
    const [allProductList, setAllProductList] = useState([]);
    const [currentPageIndicator, setCurrentPageIndicator] = useState(0);

    async function fetchAllProducts(){
        const list = await getAllProducts();
        setAllProductList(list);
    }

    async function fetchCategories(){
        const list = await getAllCategories();
        setCategoryList(list);
    }

    async function fetchColors(){
        const list = await getColors();
        setColorList(list);
    }

    async function fetchCompanies(){
        const list = await getCompanies();
        setCompanyList(list);
    }

    useEffect(()=>{
        fetchAllProducts();
        fetchCategories();
        fetchColors();
        fetchCompanies();
    },[]);

    return (
        <div className={styles.parent}>
            <div className={styles.navbar}>
                <div className={styles.breadCrumbContainer}>
                    Home / Products
                </div>
            </div>
            <div className={styles.contentsContainer}>
                {currentPageIndicator===0 && <ProductList categoryList={categoryList} colorList={colorList} companyList={companyList} allProductList={allProductList} togglePage={setCurrentPageIndicator} />}
                {currentPageIndicator===1 && <ProductDetailsContainer togglePage={setCurrentPageIndicator}/>}
            </div>
        </div>
    );
};

export default Home;
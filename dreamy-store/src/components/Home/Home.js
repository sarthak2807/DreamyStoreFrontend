import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import ProductList from '../ProductList/ProductList';
import ProductDetailsContainer from '../CardDetailsContainer/ProductDetailsContainer';
import { getAllCategories, getColors, getCompanies, getAllProducts } from '../api/discover';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import BreadcrumbContainer from '../BreadcrumbContainer/BreadcrumbContainer';

const Home = () => {
    const [categoryList, setCategoryList] = useState([]);
    const [colorList, setColorList] = useState([]);
    const [companyList, setCompanyList] = useState([]);
    const [allProductList, setAllProductList] = useState([]);
    const [productName, setProductName] = useState("");
    const [nav, setNav] = useState(false);
    
    const [spinner, setSpinner] = useState(false);   

    async function fetchAllProducts(){
        setSpinner(true);
        const list = await getAllProducts();
        setAllProductList(list);
        setSpinner(false);
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
                <BreadcrumbContainer productName={productName} setProductName={setProductName} setNav={setNav} />
            </div>
            <div className={styles.contentsContainer}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element = { <ProductList categoryList={categoryList} colorList={colorList} spinner={spinner} companyList={companyList} allProductList={allProductList} /> }></Route>
                        <Route path="/:productId" element = { <ProductDetailsContainer spinner={spinner} setSpinner={setSpinner} allProductList={allProductList} setProductName={setProductName} nav={nav} setNav={setNav} /> }></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
};

export default Home;
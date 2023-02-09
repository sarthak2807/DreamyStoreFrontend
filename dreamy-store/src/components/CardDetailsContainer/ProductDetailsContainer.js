import React, { useEffect, useState } from 'react';
import styles from './ProductDetailsContainer.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";

const ProductDetailsContainer = (props) => {
    let {productId} = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const [imageList, setImageList] = useState([]);
    
    function loadImages(){
        let images = [];
        product && product.images && product.images.map((url)=>{
            images.push({
                original: url,
                thumbnail: url
            })
        })
        setImageList(images);
    }

    useEffect(()=>{
        loadImages();
    },[product]);

    function findProduct(productId){
        let product = props.allProductList.find(product => product._id === productId);
        if(!product){
            navigate("/");
        }
        setProduct(product);
        props.setProductName(product.name);
    }

    useEffect(()=>{
        findProduct(productId);
    },[])

    function goBack(){
        navigate("/");
        props.setProductName("");
    }

    useEffect(()=>{
        if(props.nav){
            props.setNav(false);
            goBack();
        }
    },[props.nav])

    return (
        <div className={styles.container}>
            <div className={styles.upper}>
                <div className={styles.backBtn} onClick={goBack}>BACK TO PRODUCTS</div>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.left}>
                    <ImageGallery items={imageList} height="100%" />
                </div>
                <div className={styles.right}>
                    <div className={styles.contentsContainer}>
                        <div className={styles.name}>{product.name}</div>
                        <div className={styles.review}>{product.reviewCount} customer users</div>
                        <div className={styles.price}>${product.price}.00</div>
                        <div className={styles.details}>{product.about}</div>
                        <div className={styles.pairs}>
                            <div className={styles.type}>Available:</div>
                            <div className={styles.info}>{product.available ? "In Stock" : "Out of Stock"}</div>
                        </div>
                        <div className={styles.pairs}>
                            <div className={styles.type}>SKU:</div>
                            <div className={styles.info}>{product.SKU}</div>
                        </div>
                        <div className={styles.pairs}>
                            <div className={styles.type}>Brand:</div>
                            <div className={styles.info}>{product.company}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsContainer;
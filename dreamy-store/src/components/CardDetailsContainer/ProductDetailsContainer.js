import React, { useEffect, useState } from 'react';
import styles from './ProductDetailsContainer.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import star from '../assets/star.png';
import emptyStar from '../assets/emptyStar.png';
import { getProduct } from '../api/discover';

const ProductDetailsContainer = (props) => {
    let {productId} = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const [imageList, setImageList] = useState([]);

    async function fetchProductDetails(productId){
        const product = await getProduct(productId);
        if(!product){
            navigate("/");
        } else{
            setProduct(product);
        }
    }
    
    function loadImages(){
        let images = [];
        product && product.images && product.images.map((url)=>{
            images.push({
                original: url,
                thumbnail: url,
                originalHeight: "360vh",
            })
        })
        setImageList(images);
    }

    useEffect(()=>{
        loadImages();
        setStarCount(product.rating);
    },[product]);

    useEffect(()=>{
        fetchProductDetails(productId);
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

    const [starCount, setStarCount] = useState(0);

    const [stars,setStars] = useState([]);

    function createDiv(rating){
        let stars=[];
        for(var i=0; i<5; i++) {
          stars.push(<img src={i<rating ? star : emptyStar} alt="error" height="25px" />);
    }
        setStars(stars);
    }

    useEffect(()=>{
        createDiv(product.rating);
    },[starCount]);


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
                        <div className={styles.review}>
                                {stars.map((star)=>{
                                    return star
                                })} &nbsp;&nbsp;
                        {product.reviewCount} customer users</div>
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
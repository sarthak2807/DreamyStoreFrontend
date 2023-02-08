import React from 'react';
import styles from "./BreadcrumbContainer.module.css";
import { useNavigate } from 'react-router-dom';

const BreadcrumbContainer = (props) => {
    // const navigate = useNavigate();

    function goBack(productName){
        if(productName){
            // navigate("/");
            props.setProductName("");
        }
    }
    return (
        <div className={styles.breadCrumbContainer}>
            Home / <span className={!props.productName ? styles.currentBreadcrumb : styles.breadcrumb} onClick={""}>Products</span>
            {props.productName && " / "}
            {props.productName && <span className={props.productName ? styles.currentBreadcrumb : styles.breadcrumb}>{props.productName}</span>}
        </div>
    );
};

export default BreadcrumbContainer;
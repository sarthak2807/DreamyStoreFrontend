import React from 'react';
import styles from "./BreadcrumbContainer.module.css";
import { useNavigate } from 'react-router-dom';

const BreadcrumbContainer = (props) => {

    function goBack(productName){
        if(productName){
            props.setProductName("");
        }
    }
    return (
        <div className={styles.breadCrumbContainer}>
            Home / <span className={!props.productName ? styles.currentBreadcrumb : styles.breadcrumb} onClick={()=>props.productName && props.setNav(true)}>Products</span>
            {props.productName && " / "}
            {props.productName && <span className={props.productName ? styles.currentBreadcrumb : styles.breadcrumb}>{props.productName}</span>}
        </div>
    );
};

export default BreadcrumbContainer;